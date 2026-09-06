/* ==========================================================================
   Сайт «Дожити до фініша...» — Логіка спільноти, дошки знайомств та відгуків
   ========================================================================== */

let currentCommunityRegion = 'all';
let currentCommunitySearch = '';

document.addEventListener('DOMContentLoaded', () => {
  initCommunityPage();
  initGuestbook();
});

function initCommunityPage() {
  const container = document.getElementById('community-grid-container');
  const addPostBtn = document.getElementById('add-post-btn');
  const postModal = document.getElementById('add-post-modal');
  const postForm = document.getElementById('community-post-form');
  const searchInput = document.getElementById('community-search-input');
  const regionButtons = document.querySelectorAll('.region-filter-btn[data-comm-region]');

  if (!container) return;

  // Рендеринг оголошень
  renderCommunityPosts(container);

  // Фільтри за масивами
  regionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      regionButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCommunityRegion = btn.getAttribute('data-comm-region');
      renderCommunityPosts(container);
    });
  });

  // Живий пошук оголошень
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentCommunitySearch = e.target.value.toLowerCase().trim();
      renderCommunityPosts(container);
    });
  }

  // Відкриття модалки додавання оголошення
  if (addPostBtn && postModal) {
    addPostBtn.addEventListener('click', () => {
      window.openModal(postModal);
    });
  }

  // Обробка форми додавання оголошення
  if (postForm && postModal) {
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isEn = document.documentElement.lang === 'en';

      const authorName = document.getElementById('post-form-author').value.trim();
      const postTitle = document.getElementById('post-form-title').value.trim();
      const postRoute = document.getElementById('post-form-route').value.trim();
      const postDate = document.getElementById('post-form-date').value.trim();
      const groupSize = document.getElementById('post-form-group').value.trim();
      const postPace = document.getElementById('post-form-pace').value.trim();
      const postContact = document.getElementById('post-form-contact').value.trim();
      const postDesc = document.getElementById('post-form-desc').value.trim();

      if (!authorName || !postTitle || !postRoute || !postContact) {
        alert(isEn ? 'Please fill in all required fields.' : 'Будь ласка, заповніть обов\'язкові поля.');
        return;
      }

      // Визначення ключа регіону за маршрутом
      let regionKey = 'other';
      const lower = (postTitle + ' ' + postRoute).toLowerCase();
      if (lower.includes('чорногор') || lower.includes('говерл') || lower.includes('петрос') || lower.includes('піп іван') || lower.includes('chornohora') || lower.includes('hoverla')) regionKey = 'chornohora';
      else if (lower.includes('ґорґан') || lower.includes('сивул') || lower.includes('хом') || lower.includes('довбуш') || lower.includes('gorgany') || lower.includes('syvulya')) regionKey = 'gorgany';
      else if (lower.includes('свидовець') || lower.includes('близниц') || lower.includes('драгобрат') || lower.includes('svydovets') || lower.includes('blyznytsya')) regionKey = 'svydovets';
      else if (lower.includes('мармарос') || lower.includes('marmarosy')) regionKey = 'marmarosy';

      const newPost = {
        id: 'post-user-' + Date.now(),
        author: authorName,
        isAuthor: false,
        title: postTitle,
        route: postRoute,
        regionKey: regionKey,
        date: postDate || (isEn ? 'To be agreed' : 'Узгоджується з групою'),
        groupSize: groupSize || (isEn ? '1-3 people' : '1-3 особи'),
        pace: postPace || (isEn ? 'Moderate pace' : 'Середній темп'),
        contactTelegram: postContact.startsWith('@') ? postContact : '@' + postContact,
        description: postDesc,
        createdAt: new Date().toLocaleDateString(isEn ? 'en-US' : 'uk-UA')
      };

      saveCustomPost(newPost);
      renderCommunityPosts(container);
      postForm.reset();
      window.closeModal(postModal);
    });
  }
}

function getStoredPosts() {
  try {
    return JSON.parse(localStorage.getItem('carpathian_community_posts') || '[]');
  } catch (e) {
    console.error('Storage error:', e);
    return [];
  }
}

function saveCustomPost(post) {
  try {
    const customPosts = getStoredPosts();
    customPosts.unshift(post);
    localStorage.setItem('carpathian_community_posts', JSON.stringify(customPosts));
  } catch (e) {
    console.error('Storage save error:', e);
  }
}

function renderCommunityPosts(container) {
  const isEn = document.documentElement.lang === 'en';
  const customPosts = getStoredPosts();
  let allPosts = [...customPosts, ...(window.COMMUNITY_DATA || [])];
  const countBadge = document.getElementById('community-count-badge');

  // Фільтр за масивом
  if (currentCommunityRegion !== 'all') {
    allPosts = allPosts.filter(p => {
      if (p.regionKey) return p.regionKey === currentCommunityRegion;
      const lower = (p.title + ' ' + p.route).toLowerCase();
      if (currentCommunityRegion === 'chornohora') return lower.includes('чорногор') || lower.includes('говерл') || lower.includes('шпиц') || lower.includes('бребенескул') || lower.includes('chornohora') || lower.includes('hoverla');
      if (currentCommunityRegion === 'gorgany') return lower.includes('ґорґан') || lower.includes('сивул') || lower.includes('хом') || lower.includes('довбуш') || lower.includes('gorgany') || lower.includes('syvulya');
      if (currentCommunityRegion === 'svydovets') return lower.includes('свидовець') || lower.includes('близниц') || lower.includes('драгобрат') || lower.includes('svydovets');
      if (currentCommunityRegion === 'marmarosy') return lower.includes('мармарос') || lower.includes('marmarosy');
      return true;
    });
  }

  // Пошук
  if (currentCommunitySearch) {
    allPosts = allPosts.filter(p => 
      p.title.toLowerCase().includes(currentCommunitySearch) ||
      p.route.toLowerCase().includes(currentCommunitySearch) ||
      p.author.toLowerCase().includes(currentCommunitySearch) ||
      p.description.toLowerCase().includes(currentCommunitySearch)
    );
  }

  if (countBadge) {
    countBadge.textContent = isEn 
      ? `Active proposals (${allPosts.length}) from community members`
      : `Актуальні пропозиції (${allPosts.length}) від учасників спільноти`;
  }

  if (!allPosts.length) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px;" class="glass-card">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom: 12px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3 style="margin-bottom: 6px;">${isEn ? 'No posts found in this region' : 'Оголошень у цьому районі не знайдено'}</h3>
        <p style="color: var(--text-muted);">${isEn ? 'Be the first to create a post about a trip!' : 'Будьте першим — створіть власне оголошення про похід!'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = allPosts.map(post => `
    <div class="glass-card post-card" style="${post.isAuthor ? 'border-color: rgba(16, 185, 129, 0.4);' : ''}">
      <div class="post-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: ${post.isAuthor ? 'var(--accent-emerald)' : 'var(--bg-surface-elevated)'}; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #ffffff; font-size: 0.9rem; border: 1px solid var(--glass-border);">
            ${post.author.charAt(0)}
          </div>
          <div>
            <div class="post-author">${post.author} ${post.isAuthor ? `<span style="font-size: 0.75rem; color: var(--accent-amber); font-weight: 600;">(${isEn ? 'Site Author' : 'Автор сайту'})</span>` : ''}</div>
            <div class="post-date">${isEn ? 'Published:' : 'Опубліковано:'} ${post.createdAt}</div>
          </div>
        </div>
      </div>

      <h3 style="font-size: 1.25rem; line-height: 1.3; color: #ffffff;">${post.title}</h3>

      <div class="post-route-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"></circle><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path></svg>
        ${post.route}
      </div>

      <div style="display: flex; flex-direction: column; gap: 6px; font-size: 0.85rem; color: var(--text-secondary); background: rgba(0, 0, 0, 0.2); padding: 12px; border-radius: var(--radius-sm);">
        <div>📅 <strong>${isEn ? 'Dates:' : 'Дати:'}</strong> ${post.date}</div>
        <div>👥 <strong>${isEn ? 'Group:' : 'Група:'}</strong> ${post.groupSize}</div>
        <div>⚡ <strong>${isEn ? 'Pace / conditions:' : 'Темп / умови:'}</strong> ${post.pace}</div>
      </div>

      <p class="post-content">${post.description}</p>

      <div class="post-footer">
        <span style="font-size: 0.85rem; color: var(--text-muted);">${isEn ? 'Contact:' : 'Зв\'язок:'} <strong style="color: var(--accent-emerald);">${post.contactTelegram}</strong></span>
        <a href="https://t.me/${post.contactTelegram.replace('@', '')}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
          ${isEn ? 'Message on Telegram →' : 'Написати в Telegram →'}
        </a>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. Книга вражень та відгуків (Trail Guestbook)
   ========================================================================== */
const isEnPage = window.location.pathname.includes('/en/');

const enGuestbook = [
  {
    id: "gb-1",
    author: "Olena Karpenko",
    trail: "Chornohora Traverse (Hoverla-Petros)",
    text: "Thanks to the author for the accurate description of water sources under Petros! Your track helped us find a cozy campsite at Skopeska.",
    date: "14.08.2026"
  },
  {
    id: "gb-2",
    author: "Yuriy Verkhovynets",
    trail: "Eastern Gorgany (Syvulya)",
    text: "Syvulya rocks are love for life! Stiff hiking boots are key, just as the author advises.",
    date: "08.08.2026"
  },
  {
    id: "gb-3",
    author: "Dmytro & Anya",
    trail: "Marmarosy (Pip Ivan Marmarosky)",
    text: "True Carpathian Alps! The September 2024 report helped us perfectly plan the hiking time from Lysycha meadow.",
    date: "01.08.2026"
  }
];

const INITIAL_GUESTBOOK = isEnPage ? enGuestbook : [
  {
    id: "gb-1",
    author: "Олена Карпенко",
    trail: "Чорногірський траверс (Говерла-Петрос)",
    text: "Дякую автору за точний опис джерел під Петросом! Завдяки вашому треку легко знайшли затишне місце під намет на Скопеській.",
    date: "14.08.2026"
  },
  {
    id: "gb-2",
    author: "Юрій Верховинець",
    trail: "Східні Ґорґани (Велика Сивуля)",
    text: "Похід по цекотах Сивулі — це любовь на все життя! Головне — мати надійне взуття з жорсткою підошвою, як радить автор сайту.",
    date: "08.08.2026"
  },
  {
    id: "gb-3",
    author: "Дмитро та Аня",
    trail: "Мармароси (Піп Іван Мармароський)",
    text: "Справжні Карпатські Альпи! Звіт за вересень 2024 допоміг ідеально розрахувати час переходу від полонини Лисичої.",
    date: "01.08.2026"
  }
];

function getStoredGuestbook() {
  try {
    const stored = localStorage.getItem('carpathian_guestbook');
    if (!stored) {
      localStorage.setItem('carpathian_guestbook', JSON.stringify(INITIAL_GUESTBOOK));
      return INITIAL_GUESTBOOK;
    }
    return JSON.parse(stored);
  } catch (e) {
    return INITIAL_GUESTBOOK;
  }
}

function saveGuestbookEntry(entry) {
  try {
    const list = getStoredGuestbook();
    list.unshift(entry);
    localStorage.setItem('carpathian_guestbook', JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }
}

function initGuestbook() {
  const container = document.getElementById('guestbook-grid-container');
  const form = document.getElementById('guestbook-form');
  if (!container) return;

  renderGuestbook(container);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('gb-author').value.trim();
      const trail = document.getElementById('gb-trail').value.trim();
      const text = document.getElementById('gb-text').value.trim();

      if (!author || !trail || !text) return;

      const newEntry = {
        id: 'gb-' + Date.now(),
        author: author,
        trail: trail,
        text: text,
        date: new Date().toLocaleDateString(isEnPage ? 'en-US' : 'uk-UA')
      };

      saveGuestbookEntry(newEntry);
      renderGuestbook(container);
      form.reset();
    });
  }
}

function renderGuestbook(container) {
  const entries = getStoredGuestbook();

  container.innerHTML = entries.map(item => `
    <div class="guestbook-card">
      <div class="guestbook-author">
        <span>👤 ${item.author}</span>
        <span style="color: var(--accent-amber);">★★★★★</span>
      </div>
      <div class="guestbook-trail">📍 ${item.trail}</div>
      <p class="guestbook-text">«${item.text}»</p>
      <div class="guestbook-date">📅 ${item.date}</div>
    </div>
  `).join('');
}

