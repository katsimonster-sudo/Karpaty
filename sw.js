/* ==========================================================================
   Service Worker для сайту «Дожити до фініша...»
   Забезпечує роботу в горах без мобільного зв'язку (Офлайн-режим)
   ========================================================================== */

const CACHE_NAME = 'carpathian-trail-v2.5';

const STATIC_ASSETS = [
  './',
  './index.html',
  './trips.html',
  './gear.html',
  './community.html',
  './donate.html',
  './manifest.json',
  './css/main.css',
  './css/components.css',
  './css/responsive.css',
  './js/main.js',
  './js/trips.js',
  './js/gear.js',
  './js/community.js',
  './js/chat.js',
  './js/data/trips-data.js',
  './js/data/gear-data.js',
  './js/data/community-data.js'
];

// 1. Встановлення Service Worker та кешування основних ресурсів
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Кешування статичних ресурсів для офлайн-режиму v2.5');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. Активація та очищення застарілих кешів
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[SW] Очищення старого кешу:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Перехоплення запитів (Стратегія Network-First для HTML навігації)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const isHtml = event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html');

  if (isHtml) {
    // Для HTML сторінок — завжди спочатку беремо свіжий файл з мережі/сервера
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          // Якщо немає мережі — шукаємо в кеші точний збіг
          return caches.match(event.request).then((cached) => {
            return cached || caches.match('./index.html');
          });
        })
    );
    return;
  }

  // Для CSS, JS, зображень — Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

