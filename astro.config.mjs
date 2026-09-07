import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change this to your real domain once you connect one in Netlify.
// It is used to generate the sitemap and canonical URLs.
export const SITE_URL = 'https://maths-made-clearer.netlify.app';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  output: 'static',
});
