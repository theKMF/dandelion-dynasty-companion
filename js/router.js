// Hash-based SPA router
const Router = {
  routes: {},
  currentRoute: null,

  add(pattern, handler) {
    this.routes[pattern] = handler;
  },

  resolve() {
    const hash = location.hash || '#/';
    const path = hash.replace('#', '') || '/';

    for (const [pattern, handler] of Object.entries(this.routes)) {
      const paramNames = [];
      const regexStr = pattern.replace(/:(\w+)/g, (_, name) => {
        paramNames.push(name);
        return '([^/]+)';
      });
      const match = path.match(new RegExp('^' + regexStr + '$'));
      if (match) {
        const params = {};
        paramNames.forEach((name, i) => params[name] = decodeURIComponent(match[i + 1]));
        this.currentRoute = { pattern, params };
        handler(params);
        return;
      }
    }

    // Default to home
    location.hash = '#/';
  },

  init() {
    window.addEventListener('hashchange', () => this.resolve());
    this.resolve();
  }
};
