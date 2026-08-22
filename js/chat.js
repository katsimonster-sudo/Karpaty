/* ==========================================================================
   Сайт «Дожити до фініша...» — Гібридний чат-віджет (Chat Widget)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initChatWidget();
});

function initChatWidget() {
  // Створюємо розмітку чату, якщо вона відсутня
  if (!document.querySelector('.chat-widget-btn')) {
    injectChatWidgetHTML();
  }

  const toggleBtn = document.querySelector('.chat-widget-btn');
  const drawer = document.querySelector('.chat-drawer');
  const closeBtn = document.querySelector('.chat-drawer-close');
  const sendBtn = document.querySelector('.chat-send-btn');
  const inputField = document.querySelector('.chat-input-field');
  const messagesContainer = document.querySelector('.chat-messages');
  const suggestionChips = document.querySelectorAll('.chat-chip');

  if (!toggleBtn || !drawer) return;

  // Завантажуємо історію з LocalStorage
  loadChatHistory(messagesContainer);

  // Відкриття / закриття чату
  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('active');
    if (drawer.classList.contains('active')) {
      inputField?.focus();
      scrollChatToBottom(messagesContainer);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('active');
    });
  }

  // Відправка повідомлення
  function handleSendMessage() {
    const text = inputField.value.trim();
    if (!text) return;

    appendMessage(messagesContainer, text, 'user');
    inputField.value = '';
    saveChatMessage(text, 'user');

    // Симуляція автентичної відповіді автора
    setTimeout(() => {
      const response = generateAuthorResponse(text);
      appendMessage(messagesContainer, response, 'bot');
      saveChatMessage(response, 'bot');
    }, 600);
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', handleSendMessage);
  }

  if (inputField) {
    inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSendMessage();
      }
    });
  }

  // Обробка кліку на швидкі запитання (Chips)
  suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const question = chip.getAttribute('data-question') || chip.textContent;
      inputField.value = question;
      handleSendMessage();
    });
  });
}

function injectChatWidgetHTML() {
  const widgetHTML = `
    <!-- Плаваюча кнопка чату -->
    <button class="chat-widget-btn" aria-label="Відкрити чат" title="Поговорити або написати в Telegram">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      <span class="chat-badge"></span>
    </button>

    <!-- Вікно чату -->
    <div class="chat-drawer" role="dialog" aria-label="Чат із автором">
      <div class="chat-drawer-header">
        <div class="chat-drawer-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          Чат «Дожити до фініша»
        </div>
        <button class="chat-drawer-close btn-sm btn-secondary" style="padding: 4px 8px; font-size: 0.8rem;">✕</button>
      </div>

      <div class="chat-messages">
        <div class="chat-msg chat-msg-bot">
          Вітаю в Карпатах! 👋 Я Олександр. Якщо плануєш похід або маєш запитання щодо маршрутів чи спорядження — пиши тут або переходь напряму в Telegram.
        </div>
      </div>

      <div class="chat-suggestions">
        <button class="chat-chip" data-question="Коли наступний похід у Карпати?">📅 Наступний похід?</button>
        <button class="chat-chip" data-question="Яке спорядження обов'язкове?">🎒 Що взяти?</button>
        <button class="chat-chip" data-question="Як долучитися до походу?">🤝 Попутники</button>
      </div>

      <div class="chat-input-area">
        <input type="text" class="chat-input-field" placeholder="Напишіть запитання...">
        <button class="chat-send-btn" title="Надіслати">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>

      <div style="padding: 10px 16px; background: #070a0d; text-align: center; border-top: 1px solid var(--glass-border);">
        <a href="https://t.me/Dovig" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" style="width: 100%; font-size: 0.8rem; padding: 6px 12px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
          Відкрити Telegram діалог
        </a>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', widgetHTML);
}

function appendMessage(container, text, sender) {
  const msg = document.createElement('div');
  msg.className = `chat-msg chat-msg-${sender}`;
  msg.textContent = text;
  container.appendChild(msg);
  scrollChatToBottom(container);
}

function scrollChatToBottom(container) {
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

function saveChatMessage(text, sender) {
  try {
    const history = JSON.parse(localStorage.getItem('carpathian_chat_history') || '[]');
    history.push({ text, sender, time: new Date().toISOString() });
    // Зберігаємо останні 30 повідомлень
    if (history.length > 30) history.shift();
    localStorage.setItem('carpathian_chat_history', JSON.stringify(history));
  } catch (e) {
    console.error('Storage error:', e);
  }
}

function loadChatHistory(container) {
  try {
    const history = JSON.parse(localStorage.getItem('carpathian_chat_history') || '[]');
    history.forEach(item => {
      appendMessage(container, item.text, item.sender);
    });
  } catch (e) {
    console.error('Storage load error:', e);
  }
}

function generateAuthorResponse(input) {
  const text = input.toLowerCase();

  if (text.includes('похід') || text.includes('коли') || text.includes('наступн')) {
    return 'Найближчий запланований вихід — наприкінці вересня на Свидовець (2 дні). Деталі та запис є на сторінці «Спільнота» або пиши в Telegram @Dovig!';
  } else if (text.includes('вода') || text.includes('джерел') || text.includes('фільтр')) {
    return 'На Чорногорі надійні джерела є під Петросом (пол. Скопеська), біля озер Несамовите й Бребенескул, а також на пол. Веснарка. Рекомендую мати пляшку з мікрофільтром (наприклад, Katadyn BeFree).';
  } else if (text.includes('мармарос') || text.includes('дозвіл') || text.includes('прикордон')) {
    return 'Для походу на Мармароси обов\'язково потрібен прикордонний дозвіл 27-го загону ДПСУ (м. Мукачево). Подавайте заявку онлайн за 7-10 днів до виходу або оформлюйте в с. Ділове.';
  } else if (text.includes('намет') || text.includes('спорядження') || text.includes('взяти') || text.includes('вага') || text.includes('рюкзак')) {
    return 'Перегляньте наш розділ «Спорядження» — там є інтерактивний калькулятор ваги (Pack Builder) з Ultralight шкалою та мій повний перевірений сетап!';
  } else if (text.includes('зим') || text.includes('мороз') || text.includes('сніг') || text.includes('білий слон')) {
    return 'Зимові Карпати вимагають особливої підготовки: кішки, снігоступи, теплий пуховик, лижна маска та обов\'язкова реєстрація на рятувальному пості на Попі Івані (Білий Слон).';
  } else if (text.includes('gpx') || text.includes('трек') || text.includes('навігац')) {
    return 'Усі 15 походів мають готові для завантаження GPX треки 1.1! Відкрийте будь-який похід у розділі «Подорожі» і тисніть кнопку «Завантажити GPX трек» для Garmin або OsmAnd.';
  } else if (text.includes('взутт') || text.includes('черевик') || text.includes('ґорґан') || text.includes('камін')) {
    return 'Для ґорґанських цекотів потрібні міцні шкіряні трекінгові черевики з жорсткою підошвою Vibram та гумовим захисним рантом, щоб не порізати ноги об каміння.';
  } else if (text.includes('привіт') || text.includes('добрий') || text.includes('вітаю')) {
    return 'Привіт, друже гір! Радий бачити на сайті «Дожити до фініша...». Який масив Карпат тебе найбільше цікавить: Чорногора, Ґорґани чи Свидовець?';
  } else if (text.includes('донат') || text.includes('підтрим') || text.includes('картк') || text.includes('моно') || text.includes('приват') || text.includes('paypal')) {
    return 'Щиро дякую за бажання підтримати проект! Переходь на нашу сторінку «Донат на подорожі» — там доступні реквізити Monobank (Банка/Картка), PrivatBank (Приват24) та PayPal!';
  } else if (text.includes('попут') || text.includes('компані') || text.includes('знайом')) {
    return 'Шукаєш надійну компанію? Переходь на сторінку «Спільнота» — там відкрита дошка оголошень або напиши мені напряму в Telegram @Dovig!';
  } else {
    return 'Чудове гірське запитання! Якщо потрібна термінова відповідь або порада щодо маршруту — пиши напряму в Telegram @Dovig, завжди радий допомогти!';
  }
}


