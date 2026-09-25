// Telegram Bot Control Dashboard - Frontend Logic

let currentChatId = null;
let chatsData = [];

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initEvents();
  fetchStatus();
  fetchChats();

  // Auto-refresh interval
  setInterval(() => {
    fetchStatus();
    fetchChats();
    if (currentChatId) {
      fetchMessages(currentChatId);
    }
  }, 3000);
});

function initTabs() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const pages = document.querySelectorAll('.tab-page');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      navBtns.forEach(b => b.classList.remove('active'));
      pages.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(`tab-${tabName}`).classList.add('active');
    });
  });
}

function initEvents() {
  document.getElementById('refreshChatsBtn').addEventListener('click', fetchChats);
  document.getElementById('sendReplyBtn').addEventListener('click', sendReply);
  document.getElementById('toggleAiBtn').addEventListener('click', toggleAi);
  document.getElementById('broadcastForm').addEventListener('submit', handleBroadcast);

  document.getElementById('saveTemplateBtn').addEventListener('click', saveTemplate);
  document.getElementById('presetPostBtn').addEventListener('click', () => {
    document.getElementById('broadcastText').value = `🏔️ <b>Новий осінній похід у Карпати!</b>\n\n📍 <b>Маршрут:</b> Ґорґани → Сколівські Бескиди → Славсько\n👟 <b>Дистанція:</b> 166 км пішки\n📅 <b>Дата виходу:</b> 28 Вересня\n\nДолучайтеся до нашої компанії! Детальний трек та опис дивіться на нашому сайті.\n\n#Карпати #Ґорґани #похід #мандри`;
  });
}

async function fetchStatus() {
  try {
    const r = await fetch('/api/status');
    const data = await r.json();

    if (data.ok) {
      const bot = data.bot;
      document.getElementById('botName').textContent = bot.first_name ? `${bot.first_name} (@${bot.username})` : '@VKVitaliiHermesbot';
      document.getElementById('chatsCount').textContent = data.chats_count || 0;

      const badge = document.getElementById('unreadBadge');
      if (data.unread_total > 0) {
        badge.textContent = data.unread_total;
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }

      renderLogs(data.logs || []);
    }
  } catch (err) {
    console.error('Error fetching status:', err);
  }
}

async function fetchChats() {
  try {
    const r = await fetch('/api/chats');
    chatsData = await r.json();
    renderChatList(chatsData);
  } catch (err) {
    console.error('Error fetching chats:', err);
  }
}

function renderChatList(chats) {
  const container = document.getElementById('chatItems');

  if (!chats || chats.length === 0) {
    container.innerHTML = '<div class="empty-state">Поки немає активних чатів від користувачів...</div>';
    return;
  }

  container.innerHTML = '';
  chats.forEach(chat => {
    const item = document.createElement('div');
    item.className = `chat-item ${chat.id === currentChatId ? 'active' : ''}`;
    item.innerHTML = `
      <div class="chat-item-header">
        <span class="chat-item-name">${chat.name}</span>
        <span class="chat-item-time">${chat.updated_at ? chat.updated_at.split(' ')[1] : ''}</span>
      </div>
      <div class="chat-item-preview">${chat.last_message || ''}</div>
    `;

    item.addEventListener('click', () => {
      selectChat(chat);
    });

    container.appendChild(item);
  });
}

function selectChat(chat) {
  currentChatId = chat.id;
  document.getElementById('currentChatName').textContent = chat.name;
  document.getElementById('currentChatUsername').textContent = chat.username ? `@${chat.username}` : `ID: ${chat.id}`;
  
  updateAiButton(chat.ai_enabled);
  fetchMessages(chat.id);
  fetchChats();
}

function updateAiButton(aiEnabled) {
  const text = document.getElementById('aiStateText');
  if (aiEnabled) {
    text.textContent = 'Увімкнено 🟢';
    text.style.color = '#10b981';
  } else {
    text.textContent = 'Вимкнено 🔴';
    text.style.color = '#94a3b8';
  }
}

async function fetchMessages(chatId) {
  try {
    const r = await fetch(`/api/messages?chat_id=${chatId}`);
    const msgs = await r.json();
    renderMessages(msgs);
  } catch (err) {
    console.error('Error fetching messages:', err);
  }
}

function renderMessages(msgs) {
  const container = document.getElementById('messagesContainer');
  if (!msgs || msgs.length === 0) {
    container.innerHTML = '<div class="empty-state">У цьому чаті поки немає повідомлень.</div>';
    return;
  }

  container.innerHTML = '';
  msgs.forEach(m => {
    const bubble = document.createElement('div');
    bubble.className = `message-bubble ${m.is_bot ? 'bot' : 'user'}`;
    bubble.innerHTML = `
      <div>${m.text}</div>
      <div class="message-meta">${m.sender} • ${m.timestamp}</div>
    `;
    container.appendChild(bubble);
  });

  container.scrollTop = container.scrollHeight;
}

async function sendReply() {
  const input = document.getElementById('replyTextInput');
  const text = input.value.trim();

  if (!currentChatId || !text) return;

  try {
    const r = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: currentChatId, text: text })
    });
    const res = await r.json();
    if (res.ok) {
      input.value = '';
      fetchMessages(currentChatId);
      fetchChats();
    } else {
      alert('Помилка відправки: ' + (res.error || 'Невідома помилка'));
    }
  } catch (err) {
    console.error('Error sending reply:', err);
  }
}

async function toggleAi() {
  if (!currentChatId) return;

  try {
    const r = await fetch('/api/toggle_ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: currentChatId })
    });
    const res = await r.json();
    if (res.ok) {
      updateAiButton(res.ai_enabled);
    }
  } catch (err) {
    console.error('Error toggling AI:', err);
  }
}

async function saveTemplate() {
  const template = document.getElementById('aiTemplateInput').value.trim();
  if (!template) return;

  try {
    const r = await fetch('/api/save_template', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ template: template })
    });
    const res = await r.json();
    if (res.ok) {
      alert('✅ Шаблон автовідповіді успішно збережено!');
    } else {
      alert('Помилка: ' + (res.error || 'Не вдалося зберегти'));
    }
  } catch (err) {
    console.error('Error saving template:', err);
  }
}

async function handleBroadcast(e) {
  e.preventDefault();
  const target = document.getElementById('broadcastTarget').value.trim();
  const text = document.getElementById('broadcastText').value.trim();

  if (!text) return;

  try {
    const r = await fetch('/api/broadcast', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target: target, text: text })
    });
    const res = await r.json();
    if (res.ok) {
      alert('🎉 Пост успішно опубліковано в Telegram!');
      document.getElementById('broadcastText').value = '';
    } else {
      alert('Помилка публікації: ' + (res.error || 'Невідома помилка'));
    }
  } catch (err) {
    console.error('Error broadcasting:', err);
  }
}

function renderLogs(logs) {
  const consoleEl = document.getElementById('logsConsole');
  if (!logs || logs.length === 0) return;

  consoleEl.innerHTML = logs.map(l => `<div class="log-line">${l}</div>`).join('');
}
