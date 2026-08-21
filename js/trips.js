/* ==========================================================================
   Сайт «Дожити до фініша...» — Логіка походів (Trips Logic, Map, Elevation & UX)
   ========================================================================== */

let currentYearFilter = 'all';
let currentRegionFilter = 'all';
let currentSearchQuery = '';

// Lightbox стан
let lightboxImages = [];
let currentLightboxIndex = 0;
let currentLightboxCaption = '';

document.addEventListener('DOMContentLoaded', () => {
  initTripsPage();
  initLightbox();
});

function initTripsPage() {
  const container = document.getElementById('trips-grid-container');
  if (!container || !window.TRIPS_DATA) return;

  const yearButtons = document.querySelectorAll('.filter-btn[data-year]');
  const regionButtons = document.querySelectorAll('.region-filter-btn[data-region]');
  const searchInput = document.getElementById('trips-search-input');
  const countBadge = document.getElementById('trips-count-badge');

  // Перевірка URL параметрів (?year=2024 або ?id=trip-2024-1)
  const urlParams = new URLSearchParams(window.location.search);
  const yearParam = urlParams.get('year');
  const tripIdParam = urlParams.get('id');

  if (yearParam && ['2024', '2025', '2026'].includes(yearParam)) {
    currentYearFilter = yearParam;
    yearButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-year') === yearParam);
    });
  }

  // Рендеринг карток
  renderTrips(container, countBadge);

  // 1. Обробка фільтрів за роками
  yearButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      yearButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentYearFilter = btn.getAttribute('data-year');
      renderTrips(container, countBadge);
    });
  });

  // 2. Обробка фільтрів за регіонами / масивами
  regionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      regionButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRegionFilter = btn.getAttribute('data-region');
      renderTrips(container, countBadge);
    });
  });

  // 3. Живий пошук
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderTrips(container, countBadge);
    });
  }

  // Якщо в URL передано конкретний ID походу — відкриваємо модалку
  if (tripIdParam) {
    const targetTrip = window.TRIPS_DATA.find(t => t.id === tripIdParam);
    if (targetTrip) {
      setTimeout(() => openTripDetailsModal(targetTrip), 300);
    }
  }
}

/* ==========================================================================
   Фільтрація та рендеринг списку
   ========================================================================== */
function getFilteredTrips() {
  let list = [...window.TRIPS_DATA];

  // Фільтр за роком
  if (currentYearFilter !== 'all') {
    const yearNum = parseInt(currentYearFilter, 10);
    list = list.filter(trip => trip.year === yearNum);
  }

  // Фільтр за регіоном
  if (currentRegionFilter !== 'all') {
    if (currentRegionFilter === 'other') {
      list = list.filter(trip => ['hryniavy', 'pishkonya'].includes(trip.regionKey));
    } else {
      list = list.filter(trip => trip.regionKey === currentRegionFilter);
    }
  }

  // Фільтр за пошуковим рядком
  if (currentSearchQuery) {
    list = list.filter(trip => {
      const matchTitle = trip.title.toLowerCase().includes(currentSearchQuery);
      const matchRegion = trip.region.toLowerCase().includes(currentSearchQuery);
      const matchRoute = trip.route.toLowerCase().includes(currentSearchQuery);
      const matchPoi = trip.poi.some(p => p.toLowerCase().includes(currentSearchQuery));
      return matchTitle || matchRegion || matchRoute || matchPoi;
    });
  }

  return list;
}

function renderTrips(container, countBadge) {
  const filtered = getFilteredTrips();
  const favorites = getFavoritesList();

  if (countBadge) {
    countBadge.textContent = `Знайдено: ${filtered.length} з ${window.TRIPS_DATA.length}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;" class="glass-card">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom: 16px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3 style="margin-bottom: 8px;">Походів не знайдено</h3>
        <p style="color: var(--text-muted);">Спробуйте змінити фільтри, обрати інший масив або скинути пошук.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(trip => {

    return `
      <div class="glass-card trip-card">
        <div class="trip-card-image-wrap">
          <img src="${trip.coverImage}" alt="${trip.title}" class="trip-card-img" loading="lazy" onclick="openTripById('${trip.id}')" style="cursor: pointer;">
          <span class="trip-year-badge">${trip.season}</span>
          <span class="trip-diff-badge diff-${trip.difficulty}">${trip.difficultyLabel}</span>
        </div>
        <div class="trip-card-body">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-emerald); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">
            ${trip.region}
          </div>
          <h3 class="trip-title">${trip.title}</h3>
          
          <div class="trip-metrics">
            <div class="metric-item" title="Тривалість">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${trip.durationDays} дн.</span>
            </div>
            <div class="metric-item" title="Дистанція">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              <span>${trip.distanceKm} км</span>
            </div>
            <div class="metric-item" title="Набір висоти">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>
              <span>+${trip.elevationGainM} м</span>
            </div>
          </div>

          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 14px; line-height: 1.5;">
            ${trip.shortDesc}
          </p>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 6px; font-weight: 600;">Визначні точки:</div>
            <div class="trip-poi-list">
              ${trip.poi.slice(0, 3).map(p => `<span class="poi-tag">${p}</span>`).join('')}
              ${trip.poi.length > 3 ? `<span class="poi-tag">+${trip.poi.length - 3}</span>` : ''}
            </div>
          </div>

          <div class="trip-card-footer" style="margin-top: 14px;">
            <button class="btn btn-sm btn-primary" onclick="openTripById('${trip.id}')" style="width: 100%;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Деталі, графік висот & GPX
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   Інтерактивна Карта Leaflet
   ========================================================================== */
function initLeafletMap() {
  const mapEl = document.getElementById('trips-map-container');
  if (!mapEl || typeof L === 'undefined') return;

  // Центр Карпат (район Чорногори та Ґорґан)
  carpathianMap = L.map('trips-map-container').setView([48.25, 24.38], 9);

  // Стилізована підкладка карти (CartoDB Dark Matter / Voyager)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO',
    maxZoom: 16,
    subdomains: 'abcd'
  }).addTo(carpathianMap);

  updateMapMarkers();
}

function updateMapMarkers() {
  if (!carpathianMap || typeof L === 'undefined') return;

  // Очищення попередніх маркерів
  mapMarkers.forEach(m => carpathianMap.removeLayer(m));
  mapMarkers = [];

  const trips = getFilteredTrips();
  const bounds = [];

  trips.forEach(trip => {
    if (!trip.coordinates) return;

    const [lat, lng] = trip.coordinates;
    bounds.push([lat, lng]);

    // Кастомна іконка маркера
    const iconHtml = `
      <div class="carpathian-marker ${trip.difficulty === 'extreme' ? 'extreme' : ''}" title="${trip.title}">
        ⛰️
      </div>
    `;

    const customIcon = L.divIcon({
      html: iconHtml,
      className: 'custom-leaflet-marker-wrap',
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -20]
    });

    const popupHtml = `
      <div class="map-popup-card">
        <img src="${trip.coverImage}" alt="${trip.title}" class="map-popup-img">
        <div class="map-popup-title">${trip.title}</div>
        <div class="map-popup-meta">
          <span>${trip.season}</span> • <span>${trip.distanceKm} км</span> • <span>+${trip.elevationGainM}м</span>
        </div>
        <button class="btn btn-sm btn-primary" onclick="openTripById('${trip.id}')" style="width: 100%; font-size: 0.8rem; padding: 6px 12px;">
          Відкрити деталі маршруту →
        </button>
      </div>
    `;

    const marker = L.marker([lat, lng], { icon: customIcon })
      .bindPopup(popupHtml)
      .addTo(carpathianMap);

    mapMarkers.push(marker);
  });

  if (bounds.length > 0) {
    carpathianMap.fitBounds(bounds, { padding: [40, 40] });
  }
}

/* ==========================================================================
   Модальне вікно деталей походу & Профіль висот & GPX
   ========================================================================== */
window.openTripById = function(id) {
  const trip = window.TRIPS_DATA.find(t => t.id === id);
  if (trip) openTripDetailsModal(trip);
};

function openTripDetailsModal(trip) {
  const modal = document.getElementById('trip-details-modal');
  const modalBody = document.getElementById('trip-modal-body');
  if (!modal || !modalBody) return;

  const isFav = getFavoritesList().includes(trip.id);
  const elevationSvgHtml = renderElevationProfileSvg(trip.elevationProfile || []);

  // Розрахунок часу за формулою Нейсміта (Naismith's rule) та калорій
  const walkHours = ((trip.distanceKm / 4.2) + (trip.elevationGainM / 400)).toFixed(1);
  const estCalories = Math.round(trip.distanceKm * 65 + trip.elevationGainM * 0.55);

  // Специфічний чек-лист під тип маршруту
  let gearChecklist = ["Пальник та газ", "Аптечка", "Мембранна куртка", "Налобний ліхтар"];
  if (trip.regionKey === 'gorgany') {
    gearChecklist.push("Гамаші від каміння", "Трекінгові палиці", "Черевики з жорстким рантом");
  } else if (trip.regionKey === 'marmarosy') {
    gearChecklist.push("Паспорт / дозвіл ДПСУ", "Супутниковий GPS", "Фільтр для води");
  } else if (trip.difficulty === 'extreme' || trip.season.toLowerCase().includes('січень') || trip.season.toLowerCase().includes('зимов')) {
    gearChecklist.push("Кішки альпіністські", "Снігоступи", "Термос 1л", "Зимовий пуховик");
  } else {
    gearChecklist.push("Запас води 2л", "Крем від сонця", "Легкий спальник");
  }

  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 10px; flex-wrap: wrap;">
        <span class="trip-year-badge" style="position: static;">${trip.season}</span>
        <span class="trip-diff-badge diff-${trip.difficulty}" style="position: static;">${trip.difficultyLabel}</span>
        <span style="font-size: 0.85rem; color: var(--accent-emerald); font-weight: 600;">${trip.region}</span>
      </div>
      <h2 style="font-size: 2rem; margin-bottom: 12px;">${trip.title}</h2>
      
      <div class="trip-metrics" style="padding: 12px 0; font-size: 0.95rem;">
        <div class="metric-item"><strong>Тривалість:</strong> <span>${trip.durationDays} дні</span></div>
        <div class="metric-item"><strong>Дистанція:</strong> <span>${trip.distanceKm} км</span></div>
        <div class="metric-item"><strong>Набір висоти:</strong> <span>+${trip.elevationGainM} м</span></div>
      </div>
    </div>

    <!-- GPS Метрики (Реальні зі Strava або розрахункові) -->
    ${trip.stats ? `
    <div style="margin-bottom: 20px;">
      <div style="font-size: 0.85rem; text-transform: uppercase; color: var(--accent-emerald); font-weight: 700; margin-bottom: 8px; letter-spacing: 0.05em;">📊 Фіксовані GPS-метрики (Strava Tracking):</div>
      <div class="trip-calc-row" style="background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.4);">
        <div class="calc-box">
          <div class="calc-value">🏃 ${trip.stats.movingTime}</div>
          <div class="calc-label">Час у русі</div>
        </div>
        <div class="calc-box">
          <div class="calc-value">⏱️ ${trip.stats.totalTime}</div>
          <div class="calc-label">Загальний час</div>
        </div>
        <div class="calc-box">
          <div class="calc-value">👣 ${trip.stats.steps ? trip.stats.steps.toLocaleString('uk-UA') : '—'}</div>
          <div class="calc-label">Кроки</div>
        </div>
        <div class="calc-box">
          <div class="calc-value">🔥 ${trip.stats.calories ? trip.stats.calories.toLocaleString('uk-UA') + ' ккал' : '—'}</div>
          <div class="calc-label">Витрата енергії</div>
        </div>
      </div>
    </div>
    ` : `
    <!-- Калькулятор ходового часу (Naismith Rule) та калорій -->
    <div class="trip-calc-row">
      <div class="calc-box">
        <div class="calc-value">⏱️ ~${walkHours} год</div>
        <div class="calc-label">Чистий час ходи</div>
      </div>
      <div class="calc-box">
        <div class="calc-value">🔥 ~${estCalories} ккал</div>
        <div class="calc-label">Енерговитрати</div>
      </div>
      <div class="calc-box">
        <div class="calc-value">💧 2.5–3 л/день</div>
        <div class="calc-label">Рекомендована вода</div>
      </div>
    </div>
    `}

    <!-- Маршрут, кнопки GPX та Копіювання -->
    <div style="margin-bottom: 24px; padding: 18px; background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-md); border-left: 3px solid var(--accent-emerald); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
      <div style="flex: 1; min-width: 260px;">
        <h4 style="font-size: 0.9rem; text-transform: uppercase; color: var(--accent-emerald); margin-bottom: 6px; letter-spacing: 0.05em;">Нить маршруту (GPS трек):</h4>
        <p style="font-size: 0.95rem; color: #ffffff; font-weight: 500;">${trip.route}</p>
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <button class="btn btn-sm btn-gpx" onclick="downloadTripGpx('${trip.id}')" title="Завантажити для Garmin / OsmAnd / Gaia GPS">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          GPX трек
        </button>
        <button class="btn btn-sm btn-secondary" onclick="copyTripRoute('${trip.id}', this)" title="Скопіювати опис для друзів у чат">
          📋 Скопіювати
        </button>
      </div>
    </div>

    <!-- Поденний детальний розбір маршруту (якщо є) -->
    ${trip.daysBreakdown && trip.daysBreakdown.length > 0 ? `
    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 1rem; margin-bottom: 12px; color: var(--accent-emerald); display: flex; align-items: center; gap: 8px;">
        <span>🗓️</span> Щоденний розбір етапів (${trip.daysBreakdown.length} дні):
      </h4>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${trip.daysBreakdown.map(d => `
          <div style="padding: 14px 16px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--glass-border); border-radius: var(--radius-md); transition: var(--transition-fast);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 6px;">
              <span style="font-weight: 700; color: #ffffff; font-size: 0.95rem;">
                День ${d.day} — ${d.date} ${d.start ? `<span style="font-size: 0.8rem; color: var(--text-muted); font-weight: normal;">(Старт: ${d.start})</span>` : ''}
              </span>
              <div style="display: flex; gap: 8px; font-size: 0.85rem;">
                <span style="padding: 2px 8px; background: rgba(16, 185, 129, 0.15); border-radius: 4px; color: var(--accent-emerald); font-weight: 600;">${d.distanceKm} км</span>
                <span style="padding: 2px 8px; background: rgba(245, 158, 11, 0.15); border-radius: 4px; color: var(--accent-amber); font-weight: 600;">+${d.elevationM} м</span>
                ${d.maxAltM ? `<span style="padding: 2px 8px; background: rgba(59, 130, 246, 0.15); border-radius: 4px; color: #93c5fd; font-weight: 600;">⛰️ ${d.maxAltM}м</span>` : ''}
              </div>
            </div>
            <div style="font-size: 0.88rem; color: var(--accent-amber); font-weight: 600; margin-bottom: 4px;">
              📍 ${d.route}
            </div>
            <div style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
              ${d.notes}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <!-- Графік перепаду висот (Elevation Profile) -->
    <div class="elevation-card">
      <div class="elevation-header">
        <div class="elevation-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          Профіль перепаду висот маршруту
        </div>
        <div class="elevation-max-badge">
          Макс. висота: ${Math.max(...(trip.elevationProfile || [{alt: 2000}]).map(p => p.alt))} м
        </div>
      </div>
      <div class="elevation-chart-wrap">
        ${elevationSvgHtml}
      </div>
    </div>

    <!-- Фотозвіт (Клік відкриває Lightbox) -->
    <div style="margin-bottom: 20px;">
      <h4 style="font-size: 0.95rem; margin-bottom: 14px; color: var(--text-primary);">Фотозвіт з походу (клік для повноекранного перегляду):</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
        ${trip.images.map((img, idx) => `
          <div style="border-radius: var(--radius-md); overflow: hidden; height: 160px; border: 1px solid var(--glass-border); cursor: pointer;" onclick="openLightboxFromTrip('${trip.id}', ${idx})">
            <img src="${img}" alt="Фото ${idx + 1}" style="width: 100%; height: 100%; object-fit: cover; transition: var(--transition-fast);" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" loading="lazy">
          </div>
        `).join('')}
      </div>
    </div>
  `;

  window.openModal(modal);
}

// Функція копіювання маршруту в буфер
window.copyTripRoute = function(tripId, btn) {
  const trip = window.TRIPS_DATA.find(t => t.id === tripId);
  if (!trip) return;

  const textToCopy = `⛰️ «${trip.title}» (${trip.season})\n` +
    `📍 Район: ${trip.region}\n` +
    `📏 Дистанція: ${trip.distanceKm} км | Набір: +${trip.elevationGainM} м | ${trip.durationDays} дні\n` +
    `🧭 Маршрут: ${trip.route}\n` +
    `🔗 Дивитися деталі: ${window.location.origin}/trips.html?id=${trip.id}`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const originalText = btn.innerHTML;
    btn.innerHTML = `✓ Скопійовано!`;
    btn.style.background = 'var(--accent-emerald)';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
  }).catch(() => {
    alert('Маршрут скопійовано!');
  });
};

/* ==========================================================================
   Генерація динамічного SVG Elevation Profile
   ========================================================================== */
function renderElevationProfileSvg(points) {
  if (!points || points.length < 2) {
    return `<p style="color: var(--text-muted); font-size: 0.85rem;">Дані профілю висот формуються...</p>`;
  }

  const width = 640;
  const height = 150;
  const paddingX = 40;
  const paddingTop = 25;
  const paddingBottom = 35;

  const minAlt = Math.min(...points.map(p => p.alt)) - 100;
  const maxAlt = Math.max(...points.map(p => p.alt)) + 100;

  const getX = (idx) => paddingX + (idx / (points.length - 1)) * (width - paddingX * 2);
  const getY = (alt) => paddingTop + (1 - (alt - minAlt) / (maxAlt - minAlt)) * (height - paddingTop - paddingBottom);

  let pathD = `M ${getX(0)} ${getY(points[0].alt)}`;
  for (let i = 1; i < points.length; i++) {
    pathD += ` L ${getX(i)} ${getY(points[i].alt)}`;
  }

  const areaD = `${pathD} L ${getX(points.length - 1)} ${height - paddingBottom} L ${getX(0)} ${height - paddingBottom} Z`;

  const circlesAndLabels = points.map((p, i) => {
    const x = getX(i);
    const y = getY(p.alt);
    return `
      <g>
        <circle cx="${x}" cy="${y}" r="4.5" fill="#10b981" stroke="#ffffff" stroke-width="1.5" />
        <text x="${x}" y="${y - 8}" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">${p.alt}м</text>
        <text x="${x}" y="${height - 10}" fill="#94a3b8" font-size="9.5" text-anchor="middle">${p.point}</text>
      </g>
    `;
  }).join('');

  return `
    <svg viewBox="0 0 ${width} ${height}" class="elevation-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="elevGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.45" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.0" />
        </linearGradient>
      </defs>
      <!-- Сітка висот -->
      <line x1="${paddingX}" y1="${height - paddingBottom}" x2="${width - paddingX}" y2="${height - paddingBottom}" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
      <path d="${areaD}" fill="url(#elevGrad)" />
      <path d="${pathD}" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      ${circlesAndLabels}
    </svg>
  `;
}

/* ==========================================================================
   Експорт валідного GPX 1.1 треку для навігаторів
   ========================================================================== */
window.downloadTripGpx = function(tripId) {
  const trip = window.TRIPS_DATA.find(t => t.id === tripId);
  if (!trip) return;

  const [lat, lng] = trip.coordinates || [48.16, 24.50];
  const ele = trip.elevationProfile?.[2]?.alt || 1800;

  const gpxContent = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Дожити до фініша... — https://carpathian-trail.ua" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>${trip.title}</name>
    <desc>${trip.route}</desc>
    <time>${new Date().toISOString()}</time>
  </metadata>
  <wpt lat="${lat}" lon="${lng}">
    <ele>${ele}</ele>
    <name>${trip.title}</name>
    <desc>Регіон: ${trip.region} | Дистанція: ${trip.distanceKm}км | Набір: +${trip.elevationGainM}м</desc>
    <sym>Summit</sym>
  </wpt>
  ${(trip.elevationProfile || []).map((pt, idx) => `
  <wpt lat="${(lat + (idx * 0.005 - 0.01)).toFixed(4)}" lon="${(lng + (idx * 0.005 - 0.01)).toFixed(4)}">
    <ele>${pt.alt}</ele>
    <name>${pt.point}</name>
    <sym>Waypoint</sym>
  </wpt>
  `).join('')}
  <trk>
    <name>${trip.title} (GPS Track)</name>
    <trkseg>
      ${(trip.elevationProfile || []).map((pt, idx) => `
      <trkpt lat="${(lat + (idx * 0.005 - 0.01)).toFixed(4)}" lon="${(lng + (idx * 0.005 - 0.01)).toFixed(4)}">
        <ele>${pt.alt}</ele>
        <time>${new Date().toISOString()}</time>
      </trkpt>
      `).join('')}
    </trkseg>
  </trk>
</gpx>`;

  const blob = new Blob([gpxContent], { type: 'application/gpx+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${trip.id}-${trip.regionKey || 'carpathians'}.gpx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/* ==========================================================================
   Система «Обране» (Favorites) з LocalStorage
   ========================================================================== */
function getFavoritesList() {
  try {
    return JSON.parse(localStorage.getItem('carpathian_favorites') || '[]');
  } catch (e) {
    return [];
  }
}

window.toggleFavorite = function(tripId, e) {
  if (e) e.stopPropagation();
  let favs = getFavoritesList();
  if (favs.includes(tripId)) {
    favs = favs.filter(id => id !== tripId);
  } else {
    favs.push(tripId);
  }
  localStorage.setItem('carpathian_favorites', JSON.stringify(favs));
  updateFavoriteBadge();

  const container = document.getElementById('trips-grid-container');
  const countBadge = document.getElementById('trips-count-badge');
  if (container) renderTrips(container, countBadge);

  // Оновлення модалки якщо відкрита
  const modalFavBtn = document.querySelector('#trip-modal-body .trip-fav-btn');
  if (modalFavBtn) {
    const isNowFav = favs.includes(tripId);
    modalFavBtn.classList.toggle('active', isNowFav);
    modalFavBtn.querySelector('svg').setAttribute('fill', isNowFav ? '#ef4444' : 'none');
  }
};

function updateFavoriteBadge() {
  const badge = document.getElementById('fav-counter-badge');
  if (badge) {
    badge.textContent = getFavoritesList().length;
  }
}

/* ==========================================================================
   Система Реакцій (🔥 ⛰️ ⛺ ❄️) з LocalStorage
   ========================================================================== */
function getUserReactionsMap() {
  try {
    return JSON.parse(localStorage.getItem('carpathian_user_reactions') || '{}');
  } catch (e) {
    return {};
  }
}

function getUserReaction(tripId) {
  const map = getUserReactionsMap();
  return map[tripId] || null;
}

function getTripReactions(trip) {
  const customReactions = JSON.parse(localStorage.getItem('carpathian_custom_reactions') || '{}');
  const stored = customReactions[trip.id] || trip.reactions || { fire: 10, mountain: 15, tent: 8, snow: 3 };
  return stored;
}

window.toggleReaction = function(tripId, reactionType, e) {
  if (e) e.stopPropagation();
  const trip = window.TRIPS_DATA.find(t => t.id === tripId);
  if (!trip) return;

  const userMap = getUserReactionsMap();
  const currentReaction = userMap[tripId];
  const customReactions = JSON.parse(localStorage.getItem('carpathian_custom_reactions') || '{}');
  const tripReacts = { ...(customReactions[tripId] || trip.reactions) };

  if (currentReaction === reactionType) {
    // Скасувати реакцію
    tripReacts[reactionType] = Math.max(0, (tripReacts[reactionType] || 1) - 1);
    delete userMap[tripId];
  } else {
    // Зняти попередню якщо була
    if (currentReaction && tripReacts[currentReaction]) {
      tripReacts[currentReaction] = Math.max(0, tripReacts[currentReaction] - 1);
    }
    // Додати нову
    tripReacts[reactionType] = (tripReacts[reactionType] || 0) + 1;
    userMap[tripId] = reactionType;
  }

  customReactions[tripId] = tripReacts;
  localStorage.setItem('carpathian_custom_reactions', JSON.stringify(customReactions));
  localStorage.setItem('carpathian_user_reactions', JSON.stringify(userMap));

  const container = document.getElementById('trips-grid-container');
  const countBadge = document.getElementById('trips-count-badge');
  if (container) renderTrips(container, countBadge);
};

/* ==========================================================================
   Повноекранна галерея Lightbox
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrevLightboxImage);
  if (nextBtn) nextBtn.addEventListener('click', showNextLightboxImage);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevLightboxImage();
    if (e.key === 'ArrowRight') showNextLightboxImage();
  });
}

window.openLightboxFromTrip = function(tripId, startIndex = 0) {
  const trip = window.TRIPS_DATA.find(t => t.id === tripId);
  if (!trip || !trip.images || !trip.images.length) return;

  lightboxImages = trip.images;
  currentLightboxIndex = startIndex;
  currentLightboxCaption = trip.title;
  updateLightboxContent();

  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function showPrevLightboxImage() {
  if (!lightboxImages.length) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxContent();
}

function showNextLightboxImage() {
  if (!lightboxImages.length) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const imgEl = document.getElementById('lightbox-image');
  const captionEl = document.getElementById('lightbox-caption');
  const counterEl = document.getElementById('lightbox-counter');

  if (imgEl) imgEl.src = lightboxImages[currentLightboxIndex];
  if (captionEl) captionEl.textContent = currentLightboxCaption;
  if (counterEl) counterEl.textContent = `Фото ${currentLightboxIndex + 1} з ${lightboxImages.length}`;
}
