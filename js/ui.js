// UI rendering functions
const UI = {
  app: null,

  init() {
    this.app = document.getElementById('app');
  },

  // === Navigation state ===
  updateNav(tab) {
    document.querySelectorAll('.nav-tab').forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tab);
    });

    const back = document.getElementById('header-back');
    const searchBar = document.getElementById('search-bar-container');
    const title = document.getElementById('header-title');

    const isDetail = tab === 'character-detail' || tab === 'place-detail';
    const showSearch = tab === 'home' || tab === 'characters' || tab === 'places';

    back.classList.toggle('hidden', !isDetail);
    document.getElementById('header-spacer').classList.toggle('hidden', isDetail);
    searchBar.classList.toggle('hidden', !showSearch);

    if (tab === 'scan') {
      title.textContent = 'Page Scanner';
    } else if (isDetail) {
      title.textContent = '';
    } else {
      title.textContent = 'Dandelion Dynasty';
    }
  },

  // === Home ===
  renderHome() {
    this.updateNav('home');
    this.app.innerHTML = `
      <div class="home-container">
        <div class="home-title">Dandelion Dynasty</div>
        <div class="home-subtitle">
          Spoiler-free companion for the series by Ken Liu.<br>
          Covers books 1-3 only. No Speaking Bones content.
        </div>
        <div class="home-stats">
          <div class="home-stat">
            <div class="home-stat-number">${CHARACTERS.length}</div>
            <div class="home-stat-label">Characters</div>
          </div>
          <div class="home-stat">
            <div class="home-stat-number">${PLACES.length}</div>
            <div class="home-stat-label">Places</div>
          </div>
        </div>
        <div class="home-quick-links">
          <a href="#/characters" class="home-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/></svg>
            Browse Characters
            <svg class="home-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </a>
          <a href="#/places" class="home-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Browse Places
            <svg class="home-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </a>
          <a href="#/scan" class="home-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
            Scan a Book Page
            <svg class="home-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </a>
        </div>
      </div>
    `;
  },

  // === Character Index ===
  renderCharacterIndex(filter) {
    this.updateNav('characters');
    filter = filter || 'all';

    const books = ['all', 'The Grace of Kings', 'The Wall of Storms', 'The Veiled Throne'];
    const bookLabels = { 'all': 'All', 'The Grace of Kings': 'Grace of Kings', 'The Wall of Storms': 'Wall of Storms', 'The Veiled Throne': 'Veiled Throne' };

    let chars = CHARACTERS;
    if (filter !== 'all') {
      chars = chars.filter(c => c.books && c.books.includes(filter));
    }

    const filtersHTML = books.map(b =>
      `<button class="filter-chip ${b === filter ? 'active' : ''}" onclick="UI.renderCharacterIndex('${b}')">${bookLabels[b]}</button>`
    ).join('');

    const cardsHTML = chars.map(c => `
      <a href="#/characters/${c.id}" class="card">
        <div class="card-avatar character">${c.name.charAt(0)}</div>
        <div class="card-info">
          <div class="card-name">${this._esc(c.name)}</div>
          <div class="card-subtitle">${this._esc((c.occupation || []).join(', '))}</div>
        </div>
        <svg class="card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </a>
    `).join('');

    this.app.innerHTML = `
      <div class="index-container">
        <div class="index-filters">${filtersHTML}</div>
        <div class="index-count">${chars.length} characters</div>
        <div class="card-grid">${cardsHTML}</div>
      </div>
    `;
  },

  // === Character Detail ===
  renderCharacterDetail(id) {
    this.updateNav('character-detail');
    const c = CHARACTERS.find(ch => ch.id === id);
    if (!c) {
      this.app.innerHTML = '<div class="empty-state"><div class="empty-state-text">Character not found</div></div>';
      return;
    }

    document.getElementById('header-title').textContent = c.name;

    // Build bio box rows
    const bioRows = [];
    if (c.aliases && c.aliases.length) bioRows.push({ label: 'Aliases', value: c.aliases.join(', ') });
    if (c.occupation && c.occupation.length) bioRows.push({ label: 'Occupation', value: c.occupation.join(', ') });
    if (c.placeOfBirth) bioRows.push({ label: 'Birthplace', value: c.placeOfBirth });
    if (c.gender) bioRows.push({ label: 'Gender', value: c.gender });
    if (c.statusSafe && c.status) bioRows.push({ label: 'Status', value: c.status });
    if (c.significantOther && c.significantOther.length) bioRows.push({ label: 'Partner(s)', value: c.significantOther.join(', ') });
    if (c.relatives && c.relatives.length) {
      bioRows.push({
        label: 'Relatives',
        value: c.relatives.map(r => `${r.name} (${r.relation})`).join(', ')
      });
    }
    if (c.affiliation && c.affiliation.length) bioRows.push({ label: 'Affiliation', value: c.affiliation.join(', ') });
    if (c.nationality) bioRows.push({ label: 'Nationality', value: c.nationality });
    if (c.firstAppeared) bioRows.push({ label: 'First Appeared', value: c.firstAppeared });
    if (c.lastAppearedSafe && c.lastAppeared) bioRows.push({ label: 'Last Appeared', value: c.lastAppeared });
    if (c.books && c.books.length) bioRows.push({ label: 'Books', value: c.books.join(', ') });

    const bioHTML = bioRows.map(r =>
      `<div class="bio-row"><div class="bio-label">${r.label}</div><div class="bio-value">${this._esc(r.value)}</div></div>`
    ).join('');

    // Build history accordion
    let historyHTML = '';
    if (c.history) {
      const bookOrder = ['The Grace of Kings', 'The Wall of Storms', 'The Veiled Throne'];
      historyHTML = bookOrder.map(book => {
        if (!c.history[book]) return '';
        const sections = c.history[book];
        const subsHTML = sections.map(s => `
          <div class="accordion-sub">
            ${s.subtitle ? `<div class="accordion-sub-title">${this._esc(s.subtitle)}</div>` : ''}
            <div class="accordion-sub-text">${this._esc(s.text)}</div>
          </div>
        `).join('');

        return `
          <div class="accordion-item" onclick="this.classList.toggle('open')">
            <div class="accordion-header">
              ${this._esc(book)}
              <svg class="accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
            <div class="accordion-body">${subsHTML}</div>
          </div>
        `;
      }).join('');
    }

    // Appearance section
    let appearanceHTML = '';
    if (c.appearanceAndPersonality) {
      appearanceHTML = `
        <div class="section">
          <div class="section-title">Appearance & Personality</div>
          <div class="section-text">${this._esc(c.appearanceAndPersonality)}</div>
        </div>
      `;
    }

    this.app.innerHTML = `
      <div class="detail-container">
        <div class="detail-header">
          <div class="detail-avatar character">${c.name.charAt(0)}</div>
          <div class="detail-name">${this._esc(c.name)}</div>
          ${c.aliases && c.aliases.length ? `<div class="detail-aliases">${this._esc(c.aliases.join(' / '))}</div>` : ''}
        </div>
        <div class="bio-box">${bioHTML}</div>
        ${appearanceHTML}
        ${historyHTML ? `<div class="section"><div class="section-title">History</div>${historyHTML}</div>` : ''}
      </div>
    `;
    this.app.scrollTop = 0;
  },

  // === Place Index ===
  renderPlaceIndex(filter) {
    this.updateNav('places');
    filter = filter || 'all';

    const categories = ['all', 'state', 'city', 'island', 'landmark', 'foreign', 'other'];
    const catLabels = { all: 'All', state: 'States', city: 'Cities', island: 'Islands', landmark: 'Landmarks', foreign: 'Foreign', other: 'Other' };

    let places = PLACES;
    if (filter !== 'all') {
      places = places.filter(p => p.category === filter);
    }

    const filtersHTML = categories.map(cat =>
      `<button class="filter-chip ${cat === filter ? 'active' : ''}" onclick="UI.renderPlaceIndex('${cat}')">${catLabels[cat]}</button>`
    ).join('');

    const cardsHTML = places.map(p => `
      <a href="#/places/${p.id}" class="card">
        <div class="card-avatar place">${p.name.charAt(0)}</div>
        <div class="card-info">
          <div class="card-name">${this._esc(p.name)}</div>
          <div class="card-subtitle">${this._esc(p.type || p.category || '')}</div>
        </div>
        <svg class="card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </a>
    `).join('');

    this.app.innerHTML = `
      <div class="index-container">
        <div class="index-filters">${filtersHTML}</div>
        <div class="index-count">${places.length} places</div>
        <div class="card-grid">${cardsHTML}</div>
      </div>
    `;
  },

  // === Place Detail ===
  renderPlaceDetail(id) {
    this.updateNav('place-detail');
    const p = PLACES.find(pl => pl.id === id);
    if (!p) {
      this.app.innerHTML = '<div class="empty-state"><div class="empty-state-text">Place not found</div></div>';
      return;
    }

    document.getElementById('header-title').textContent = p.name;

    const bioRows = [];
    if (p.type) bioRows.push({ label: 'Type', value: p.type });
    if (p.location) bioRows.push({ label: 'Location', value: p.location });
    if (p.region) bioRows.push({ label: 'Region', value: p.region });
    if (p.continent) bioRows.push({ label: 'Continent', value: p.continent });
    if (p.rulers && p.rulers.length) bioRows.push({ label: 'Rulers', value: p.rulers.join(', ') });

    const bioHTML = bioRows.map(r =>
      `<div class="bio-row"><div class="bio-label">${r.label}</div><div class="bio-value">${this._esc(r.value)}</div></div>`
    ).join('');

    let descHTML = '';
    if (p.description) {
      descHTML = `<div class="section"><div class="section-title">Overview</div><div class="section-text">${this._esc(p.description)}</div></div>`;
    }

    let geoHTML = '';
    if (p.geography) {
      geoHTML = `<div class="section"><div class="section-title">Geography</div><div class="section-text">${this._esc(p.geography)}</div></div>`;
    }

    let cultureHTML = '';
    if (p.culture) {
      cultureHTML = `<div class="section"><div class="section-title">Culture</div><div class="section-text">${this._esc(p.culture)}</div></div>`;
    }

    let historyHTML = '';
    if (p.history) {
      historyHTML = Object.entries(p.history).map(([title, text]) => `
        <div class="accordion-item" onclick="this.classList.toggle('open')">
          <div class="accordion-header">
            ${this._esc(title)}
            <svg class="accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="accordion-body">
            <div class="accordion-sub-text">${this._esc(text)}</div>
          </div>
        </div>
      `).join('');

      if (historyHTML) {
        historyHTML = `<div class="section"><div class="section-title">History</div>${historyHTML}</div>`;
      }
    }

    this.app.innerHTML = `
      <div class="detail-container">
        <div class="detail-header">
          <div class="detail-avatar place">${p.name.charAt(0)}</div>
          <div class="detail-name">${this._esc(p.name)}</div>
          ${p.aliases && p.aliases.length ? `<div class="detail-aliases">${this._esc(p.aliases.join(' / '))}</div>` : ''}
        </div>
        <div class="bio-box">${bioHTML}</div>
        ${descHTML}
        ${geoHTML}
        ${cultureHTML}
        ${historyHTML}
      </div>
    `;
    this.app.scrollTop = 0;
  },

  // === Scanner ===
  renderScanner() {
    this.updateNav('scan');
    this.app.innerHTML = `
      <div class="scanner-container">
        <div class="scanner-video-wrapper">
          <video id="scanner-video" autoplay playsinline muted></video>
          <div class="scanner-overlay">
            <div class="scanner-frame"></div>
          </div>
        </div>
        <div class="scanner-status" id="scanner-status">Point camera at a book page</div>
        <div class="scanner-controls">
          <button class="upload-btn" onclick="OCR.uploadImage()">Upload Photo</button>
          <button class="scan-btn" id="scan-capture-btn" onclick="OCR.capture()">
            <div class="scan-btn-inner"></div>
          </button>
          <input type="file" id="scanner-file-input" accept="image/*" style="display:none" onchange="OCR.handleFileUpload(event)">
        </div>
      </div>
    `;
    OCR.startCamera();
  },

  renderOCRProgress(progress) {
    this.app.innerHTML = `
      <div class="progress-container">
        <div class="progress-label">Recognizing text...</div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width: ${Math.round(progress * 100)}%"></div>
        </div>
        <div class="progress-label">${Math.round(progress * 100)}%</div>
      </div>
    `;
  },

  renderOCRResults(text, matches) {
    this.updateNav('scan');

    const matchCardsHTML = matches.length > 0
      ? matches.map(m => `
        <a href="#/${m.type}s/${m.id}" class="ocr-match-card">
          <span class="ocr-match-type ${m.type === 'character' ? 'search-result-badge character' : 'search-result-badge place'}">${m.type}</span>
          <span class="card-name">${this._esc(m.displayName)}</span>
          <svg class="card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </a>
      `).join('')
      : '<div class="empty-state"><div class="empty-state-text">No character or place names found in the scanned text.</div></div>';

    // Highlight text
    const highlightedText = this._highlightText(text, matches);

    this.app.innerHTML = `
      <div class="ocr-results">
        <div class="ocr-results-header">
          <div class="ocr-results-title">${matches.length} Match${matches.length !== 1 ? 'es' : ''} Found</div>
          <button class="ocr-scan-again" onclick="location.hash='#/scan'">Scan Again</button>
        </div>
        <div class="ocr-matches">${matchCardsHTML}</div>
        <div class="section-title">Extracted Text</div>
        <div class="ocr-extracted-text">${highlightedText}</div>
      </div>
    `;
    this.app.scrollTop = 0;
  },

  _highlightText(text, matches) {
    if (!matches.length) return this._esc(text);

    const lowerText = text.toLowerCase();
    // Collect all occurrences of all matched names
    const highlights = [];
    for (const match of matches) {
      let from = 0;
      while (true) {
        const idx = lowerText.indexOf(match.name, from);
        if (idx === -1) break;
        highlights.push({ start: idx, end: idx + match.name.length, type: match.type, id: match.id });
        from = idx + 1;
      }
    }

    highlights.sort((a, b) => a.start - b.start);

    // Merge overlapping
    const merged = [];
    for (const h of highlights) {
      if (merged.length && h.start < merged[merged.length - 1].end) {
        merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, h.end);
      } else {
        merged.push({ ...h });
      }
    }

    let result = '';
    let cursor = 0;
    for (const h of merged) {
      result += this._esc(text.slice(cursor, h.start));
      result += `<a class="ocr-highlight" href="#/${h.type}s/${h.id}">${this._esc(text.slice(h.start, h.end))}</a>`;
      cursor = h.end;
    }
    result += this._esc(text.slice(cursor));
    return result;
  },

  // === Search Results (dropdown) ===
  renderSearchResults(results) {
    const container = document.getElementById('search-results');
    if (!results.length) {
      container.innerHTML = '<div class="empty-state" style="padding:16px"><div class="empty-state-text">No results</div></div>';
      container.classList.remove('hidden');
      return;
    }

    container.innerHTML = results.slice(0, 20).map(r => `
      <a href="#/${r.type}s/${r.id}" class="search-result-item" onclick="closeSearch()">
        <span class="search-result-badge ${r.type}">${r.type === 'character' ? 'CHR' : 'PLC'}</span>
        <span>
          <span class="search-result-name">${this._esc(r.name)}</span>
          ${r.subtitle ? `<span class="search-result-alias">${this._esc(r.subtitle)}</span>` : ''}
        </span>
      </a>
    `).join('');
    container.classList.remove('hidden');
  },

  _esc(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};
