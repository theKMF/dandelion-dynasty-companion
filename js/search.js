// Search engine and name index for OCR matching
const Search = {
  nameIndex: {},  // lowercased name -> { type, id, displayName }

  init() {
    // Build index from characters
    CHARACTERS.forEach(c => {
      this._addToIndex(c.name, 'character', c.id, c.name);
      if (c.aliases) {
        c.aliases.forEach(alias => {
          this._addToIndex(alias, 'character', c.id, c.name);
        });
      }
    });

    // Build index from places
    PLACES.forEach(p => {
      this._addToIndex(p.name, 'place', p.id, p.name);
      if (p.aliases) {
        p.aliases.forEach(alias => {
          this._addToIndex(alias, 'place', p.id, p.name);
        });
      }
    });
  },

  _addToIndex(name, type, id, displayName) {
    const key = name.toLowerCase().trim();
    if (key.length > 1) {  // Skip single-char entries
      this.nameIndex[key] = { type, id, displayName };
    }
  },

  // General search for the search bar
  query(text) {
    if (!text || text.length < 1) return [];
    const q = text.toLowerCase().trim();
    const results = [];

    CHARACTERS.forEach(c => {
      const score = this._matchScore(q, c.name, c.aliases);
      if (score > 0) {
        results.push({
          type: 'character',
          id: c.id,
          name: c.name,
          aliases: c.aliases,
          subtitle: c.occupation ? c.occupation.join(', ') : '',
          score
        });
      }
    });

    PLACES.forEach(p => {
      const score = this._matchScore(q, p.name, p.aliases);
      if (score > 0) {
        results.push({
          type: 'place',
          id: p.id,
          name: p.name,
          aliases: p.aliases,
          subtitle: p.type || p.category || '',
          score
        });
      }
    });

    results.sort((a, b) => b.score - a.score);
    return results;
  },

  _matchScore(query, name, aliases) {
    const lName = name.toLowerCase();
    if (lName === query) return 100;
    if (lName.startsWith(query)) return 80;
    if (lName.includes(query)) return 60;

    if (aliases) {
      for (const alias of aliases) {
        const lAlias = alias.toLowerCase();
        if (lAlias === query) return 90;
        if (lAlias.startsWith(query)) return 70;
        if (lAlias.includes(query)) return 50;
      }
    }

    // Search by words (first/last name)
    const words = lName.split(/\s+/);
    for (const word of words) {
      if (word.startsWith(query)) return 65;
    }

    return 0;
  },

  // OCR name matching - find all known names in extracted text
  findNamesInText(text) {
    const normalizedText = text.toLowerCase();
    const matches = [];
    const seen = new Set();

    // Sort by name length descending (prefer longer matches)
    const sortedNames = Object.keys(this.nameIndex)
      .sort((a, b) => b.length - a.length);

    for (const name of sortedNames) {
      let searchFrom = 0;
      while (true) {
        const idx = normalizedText.indexOf(name, searchFrom);
        if (idx === -1) break;

        // Word boundary check - ensure we match whole words
        const before = idx > 0 ? normalizedText[idx - 1] : ' ';
        const after = idx + name.length < normalizedText.length
          ? normalizedText[idx + name.length] : ' ';

        const isWordBoundary = /[\s.,;:!?'"()\-\n]/.test(before) &&
                               /[\s.,;:!?'"()\-\n]/.test(after);

        if (isWordBoundary) {
          // Check not already covered by a longer match
          const alreadyCovered = matches.some(m =>
            idx >= m.start && idx < m.end
          );

          if (!alreadyCovered) {
            const entry = this.nameIndex[name];
            if (!seen.has(entry.id)) {
              matches.push({
                name,
                start: idx,
                end: idx + name.length,
                type: entry.type,
                id: entry.id,
                displayName: entry.displayName
              });
              seen.add(entry.id);
            }
          }
        }
        searchFrom = idx + 1;
      }
    }

    return matches.sort((a, b) => a.start - b.start);
  }
};
