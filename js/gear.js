/* ==========================================================================
   Сайт «Дожити до фініша...» — Логіка спорядження (Gear Logic, Builder & Analyzer)
   ========================================================================== */

let currentCategoryFilter = 'all';
let currentStatusFilter = 'all';
let currentGearSearch = '';
let currentGearSort = 'default';

document.addEventListener('DOMContentLoaded', () => {
  initGearPage();
  initPackBuilder();
  initCareGuideModal();
});

function initGearPage() {
  const container = document.getElementById('gear-grid-container');
  if (!container || !window.GEAR_DATA) return;

  const categoryButtons = document.querySelectorAll('.filter-btn[data-category]');
  const statusButtons = document.querySelectorAll('.status-filter-btn[data-status]');
  const countBadge = document.getElementById('gear-count-badge');
  const searchInput = document.getElementById('gear-search-input');
  const sortSelect = document.getElementById('gear-sort-select');

  // Рендеринг карток
  renderGear(container, countBadge);

  // Фільтри категорій
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategoryFilter = btn.getAttribute('data-category');
      renderGear(container, countBadge);
    });
  });

  // Фільтри статусів
  statusButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      statusButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStatusFilter = btn.getAttribute('data-status');
      renderGear(container, countBadge);
    });
  });

  // Пошук
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentGearSearch = e.target.value.toLowerCase().trim();
      renderGear(container, countBadge);
    });
  }

  // Сортування
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentGearSort = e.target.value;
      renderGear(container, countBadge);
    });
  }
}

function renderGear(container, countBadge) {
  let filtered = [...window.GEAR_DATA];

  // Категорія
  if (currentCategoryFilter !== 'all') {
    filtered = filtered.filter(item => item.category === currentCategoryFilter);
  }

  // Статус
  if (currentStatusFilter !== 'all') {
    filtered = filtered.filter(item => item.status === currentStatusFilter);
  }

  // Пошук
  if (currentGearSearch) {
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(currentGearSearch) ||
      item.brand.toLowerCase().includes(currentGearSearch) ||
      item.description.toLowerCase().includes(currentGearSearch) ||
      item.categoryLabel.toLowerCase().includes(currentGearSearch)
    );
  }

  // Сортування
  if (currentGearSort === 'weight-asc') {
    filtered.sort((a, b) => a.weightGrams - b.weightGrams);
  } else if (currentGearSort === 'weight-desc') {
    filtered.sort((a, b) => b.weightGrams - a.weightGrams);
  } else if (currentGearSort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (countBadge) {
    countBadge.textContent = `Показано: ${filtered.length} з ${window.GEAR_DATA.length} од.`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;" class="glass-card">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom: 16px;"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        <h3 style="margin-bottom: 8px;">Спорядження не знайдено</h3>
        <p style="color: var(--text-muted);">Спробуйте змінити фільтри або пошуковий запит.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="glass-card gear-card">
      <div class="gear-header">
        <span class="gear-category-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
          ${item.categoryLabel}
        </span>
        <span class="gear-status-badge ${item.status === 'owned' ? 'status-owned' : 'status-planned'}">
          ${item.status === 'owned' ? '✓ У моєму рюкзаку' : '★ У планах придбати'}
        </span>
      </div>

      <div style="display: flex; gap: 16px; align-items: center;">
        <div style="width: 80px; height: 80px; border-radius: var(--radius-md); overflow: hidden; flex-shrink: 0; border: 1px solid var(--glass-border);">
          <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
        </div>
        <div>
          <div class="gear-brand">${item.brand}</div>
          <h3 class="gear-name">${item.name}</h3>
          <div class="gear-weight-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path></svg>
            ${item.weightGrams >= 1000 ? (item.weightGrams / 1000).toFixed(2) + ' кг' : item.weightGrams + ' г'}
          </div>
        </div>
      </div>

      <p class="gear-desc">${item.description}</p>

      <div class="gear-verdict">
        <strong>Особистий досвід:</strong> «${item.verdict}»
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--glass-border); font-size: 0.85rem;">
        <span style="color: var(--text-muted);">Надійність:</span>
        <span style="color: var(--accent-amber); letter-spacing: 2px;">★★★★★</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. Конструктор рюкзака & Ultralight Analyzer
   ========================================================================== */
function getSelectedPackItems() {
  try {
    return JSON.parse(localStorage.getItem('carpathian_pack_selection') || 'null');
  } catch (e) {
    return null;
  }
}

function saveSelectedPackItems(itemIds) {
  try {
    localStorage.setItem('carpathian_pack_selection', JSON.stringify(itemIds));
  } catch (e) {
    console.error(e);
  }
}

function getCustomGearItems() {
  try {
    return JSON.parse(localStorage.getItem('carpathian_custom_gear') || '[]');
  } catch (e) {
    return [];
  }
}

function saveCustomGearItem(item) {
  try {
    const list = getCustomGearItems();
    list.push(item);
    localStorage.setItem('carpathian_custom_gear', JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }
}

function initPackBuilder() {
  const checklistContainer = document.getElementById('gear-checklist-container');
  const customForm = document.getElementById('custom-gear-form');
  const exportBtn = document.getElementById('export-checklist-btn');

  if (!checklistContainer || !window.GEAR_DATA) return;

  // Якщо збереженого сетапу ще нема — за замовчуванням обираємо всі 'owned'
  let selectedIds = getSelectedPackItems();
  if (!selectedIds) {
    selectedIds = window.GEAR_DATA.filter(g => g.status === 'owned').map(g => g.id);
    saveSelectedPackItems(selectedIds);
  }

  renderPackChecklist(checklistContainer, selectedIds);
  updateWeightGauge(selectedIds);

  // Обробка додавання кастомної речі
  if (customForm) {
    customForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('custom-item-name').value.trim();
      const weight = parseInt(document.getElementById('custom-item-weight').value, 10);
      if (!name || isNaN(weight)) return;

      const newItem = {
        id: 'custom-' + Date.now(),
        name: name,
        brand: 'Власне спорядження',
        weightGrams: weight,
        categoryLabel: 'Кастомне',
        isCustom: true
      };

      saveCustomGearItem(newItem);
      let currentSelected = getSelectedPackItems() || [];
      currentSelected.push(newItem.id);
      saveSelectedPackItems(currentSelected);

      renderPackChecklist(checklistContainer, currentSelected);
      updateWeightGauge(currentSelected);
      customForm.reset();
    });
  }

  // Експорт чек-листа в буфер
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      exportPackChecklist();
    });
  }
}

function renderPackChecklist(container, selectedIds) {
  const customItems = getCustomGearItems();
  const allItems = [...window.GEAR_DATA, ...customItems];

  container.innerHTML = allItems.map(item => {
    const isChecked = selectedIds.includes(item.id);
    const weightStr = item.weightGrams >= 1000 
      ? (item.weightGrams / 1000).toFixed(2) + ' кг' 
      : item.weightGrams + ' г';

    return `
      <div class="gear-check-item ${isChecked ? 'selected' : ''}" onclick="togglePackItem('${item.id}')">
        <div style="display: flex; align-items: center; gap: 10px;">
          <input type="checkbox" ${isChecked ? 'checked' : ''} style="accent-color: var(--accent-emerald); cursor: pointer;" onclick="event.stopPropagation(); togglePackItem('${item.id}')">
          <div>
            <div style="font-size: 0.88rem; font-weight: 600; color: #ffffff;">${item.name}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${item.brand}</div>
          </div>
        </div>
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-amber);">${weightStr}</div>
      </div>
    `;
  }).join('');
}

window.togglePackItem = function(id) {
  let selectedIds = getSelectedPackItems() || [];
  if (selectedIds.includes(id)) {
    selectedIds = selectedIds.filter(i => i !== id);
  } else {
    selectedIds.push(id);
  }
  saveSelectedPackItems(selectedIds);

  const checklistContainer = document.getElementById('gear-checklist-container');
  if (checklistContainer) {
    renderPackChecklist(checklistContainer, selectedIds);
  }
  updateWeightGauge(selectedIds);
};

function updateWeightGauge(selectedIds) {
  const customItems = getCustomGearItems();
  const allItems = [...window.GEAR_DATA, ...customItems];
  const selectedItems = allItems.filter(i => selectedIds.includes(i.id));

  const totalGrams = selectedItems.reduce((acc, item) => acc + item.weightGrams, 0);
  const totalKg = totalGrams / 1000;

  const totalWeightEl = document.getElementById('builder-total-weight');
  const catNameEl = document.getElementById('builder-category-name');
  const gaugeFillEl = document.getElementById('weight-gauge-fill');

  if (totalWeightEl) {
    totalWeightEl.textContent = `${totalKg.toFixed(2)} кг`;
  }

  // Розрахунок відсотка шкали (макс шкала 15 кг)
  const percent = Math.min(100, Math.max(5, (totalKg / 15) * 100));
  if (gaugeFillEl) {
    gaugeFillEl.style.width = `${percent}%`;
  }

  if (catNameEl) {
    if (totalKg < 5) {
      catNameEl.textContent = '🟢 Ультралайт (UltraLight < 5 кг)';
      catNameEl.style.color = '#10b981';
    } else if (totalKg < 8) {
      catNameEl.textContent = '🔵 Легкохід (Light 5–8 кг)';
      catNameEl.style.color = '#38bdf8';
    } else if (totalKg < 12) {
      catNameEl.textContent = '🟡 Традиційний сетап (8–12 кг)';
      catNameEl.style.color = '#f59e0b';
    } else {
      catNameEl.textContent = '🔴 Експедиційний / Важкий (> 12 кг)';
      catNameEl.style.color = '#ef4444';
    }
  }
}

function exportPackChecklist() {
  const selectedIds = getSelectedPackItems() || [];
  const customItems = getCustomGearItems();
  const allItems = [...window.GEAR_DATA, ...customItems];
  const selectedItems = allItems.filter(i => selectedIds.includes(i.id));

  const totalGrams = selectedItems.reduce((acc, item) => acc + item.weightGrams, 0);
  const totalKg = (totalGrams / 1000).toFixed(2);

  let text = `🎒 Мій пакувальний лист у Карпати («Дожити до фініша...»)\n`;
  text += `⚖️ Базова вага: ${totalKg} кг (${selectedItems.length} предметів)\n\n`;

  selectedItems.forEach((item, idx) => {
    const w = item.weightGrams >= 1000 ? (item.weightGrams / 1000).toFixed(2) + ' кг' : item.weightGrams + ' г';
    text += `${idx + 1}. [ ] ${item.name} (${item.brand}) — ${w}\n`;
  });

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('export-checklist-btn');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = `✓ Чек-лист скопійовано!`;
      setTimeout(() => btn.innerHTML = orig, 2000);
    }
  }).catch(() => {
    alert('Чек-лист скопійовано!');
  });
}

function initCareGuideModal() {
  const openBtn = document.getElementById('open-care-guide-btn');
  const modal = document.getElementById('care-guide-modal');
  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      window.openModal(modal);
    });
  }
}

