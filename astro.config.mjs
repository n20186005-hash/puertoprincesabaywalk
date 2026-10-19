import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config';

const integrations = [sitemap({ filter: page => page !== `${siteConfig.baseUrl}/` })];
if (!siteConfig.baseUrl) {
  // sitemap 仅在 site 有值时启用，域名缺失时优雅降级
  integrations.length = 0;
}

export default defineConfig({
  site: siteConfig.baseUrl || undefined,
  trailingSlash: 'always',
  integrations,
  vite: {
    plugins: [tailwindcss()],
  },
});
