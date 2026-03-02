// Main app controller
(function() {
  'use strict';

  // Initialize modules
  UI.init();
  Search.init();

  // Set up routes
  Router.add('/', () => UI.renderHome());
  Router.add('/characters', () => UI.renderCharacterIndex());
  Router.add('/characters/:id', (p) => UI.renderCharacterDetail(p.id));
  Router.add('/places', () => UI.renderPlaceIndex());
  Router.add('/places/:id', (p) => UI.renderPlaceDetail(p.id));
  Router.add('/scan', () => UI.renderScanner());

  // Global search
  const searchInput = document.getElementById('global-search');
  const searchClear = document.getElementById('search-clear');
  const searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    searchClear.classList.toggle('hidden', !q);
    if (q.length >= 1) {
      const results = Search.query(q);
      UI.renderSearchResults(results);
    } else {
      searchResults.classList.add('hidden');
    }
  });

  // Close search on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-bar-container')) {
      searchResults.classList.add('hidden');
    }
  });

  // Stop camera when navigating away from scanner
  window.addEventListener('hashchange', () => {
    const hash = location.hash || '#/';
    if (!hash.includes('/scan')) {
      OCR.stopCamera();
    }
  });

  // Start router
  Router.init();

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.warn('SW registration failed:', err));
  }
})();

// Global helpers for onclick handlers
function clearSearch() {
  const input = document.getElementById('global-search');
  input.value = '';
  document.getElementById('search-clear').classList.add('hidden');
  document.getElementById('search-results').classList.add('hidden');
  input.focus();
}

function closeSearch() {
  document.getElementById('search-results').classList.add('hidden');
  document.getElementById('global-search').value = '';
  document.getElementById('search-clear').classList.add('hidden');
}
