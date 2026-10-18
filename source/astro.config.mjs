import { defineConfig } from 'astro/config';

// Served from https://bludvikk.github.io/porfolio/
export default defineConfig({
  site: 'https://bludvikk.github.io',
  base: '/porfolio',
  build: { inlineStylesheets: 'always' },
});
