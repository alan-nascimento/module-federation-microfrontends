import { createApp } from 'vue';

import Dashboard from './pages/dashboard.vue';

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
