const CACHE_NAME = 'dandelion-dynasty-v2';

// Core app files – small, must all succeed
const CORE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/app.js',
  './js/data.js',
  './js/search.js',
  './js/ui.js',
  './js/ocr.js',
  './js/router.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// Tesseract files – large, cached individually so one failure doesn't break everything
const OPTIONAL_URLS = [
  './lib/tesseract/tesseract.min.js',
  './lib/tesseract/worker.min.js',
  './lib/tesseract/tesseract-core.wasm.js',
  './lib/tesseract/tesseract-core-simd.wasm.js',
  './lib/tesseract/tesseract-core-lstm.wasm.js',
  './lib/tesseract/tesseract-core-simd-lstm.wasm.js',
  './lib/tesseract/eng.traineddata.gz',
];

// Install: precache core files atomically, then optional files individually
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Core files must all succeed
      await cache.addAll(CORE_URLS);
      console.log('[SW] Core files cached');

      // Optional files cached individually – failures logged but don't block install
      for (const url of OPTIONAL_URLS) {
        try {
          await cache.add(url);
          console.log('[SW] Cached:', url);
        } catch (err) {
          console.warn('[SW] Failed to cache (will retry on fetch):', url, err.message);
        }
      }

      console.log('[SW] Install complete');
      return self.skipWaiting();
    })
  );
});

// Activate: remove old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(
        names.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    ).then(() => {
      console.log('[SW] Activated, claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch: cache-first, fallback to network (and cache the network response)
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // For navigation requests, always serve index.html from cache
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html').then(cached => cached || fetch(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      // Not in cache – fetch from network and cache for next time
      return fetch(request).then(response => {
        // Only cache successful responses
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      });
    })
  );
});
