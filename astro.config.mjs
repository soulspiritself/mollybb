import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mollybb.com',
  integrations: [
    sitemap({
      // /study is unlisted: reachable by link, never listed or indexed.
      filter: (page) => !page.includes('/study'),
    }),
  ],
  build: {
    format: 'directory'
  }
});
