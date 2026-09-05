import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zkcaleb.dev',
  redirects: {
    '/log': '/',
    '/log/001-homelab': '/',
  },
});
