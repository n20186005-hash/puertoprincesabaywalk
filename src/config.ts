/**
 * Puerto Princesa City Baywalk Park — Site Configuration
 *
 * 全站唯一域名/URL 配置入口。astro.config.mjs、BaseLayout、所有组件
 * 中的 canonical / Open Graph / JSON-LD / sitemap 均从此派生。
 *
 * 域名可后配：baseUrl 为空时，所有绝对 URL 标签优雅降级（相对路径或省略），
 * sitemap 集成不启用，保证缺失域名时仍能正常构建。
 *
 * 部署时通过环境变量 CURRENT_SITE_DOMAIN（不含协议）注入正式域名，
 * 或直接修改下方 fallback 字符串。
 */

function resolveBaseUrl(): string {
  const raw =
    (typeof process !== 'undefined' ? process.env.CURRENT_SITE_DOMAIN : undefined) ||
    (import.meta.env.CURRENT_SITE_DOMAIN as string | undefined) ||
    '';
  const host = String(raw).replace(/^https?:\/\//, '').replace(/\/+$/, '');
  return host ? `https://${host}` : '';
}

export const siteConfig = {
  name: 'Puerto Princesa City Baywalk Park',
  baseUrl: resolveBaseUrl(),
  ga4Id: 'G-HXM22WWPKP',
} as const;

export default siteConfig;

/** Google Maps — one public short link used everywhere */
export const mapsUrl = 'https://maps.app.goo.gl/BmGvov5YFV3swqKSA';

/** Google Maps embed iframe — language/region set to English (Philippines) */
export const mapsEmbedSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.45!2d118.7298754!3d9.744029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b563da85c65913%3A0xe6d0811e3e40862f!2sPuerto%20Princesa%20City%20Baywalk%20Park!5e0!3m2!1sen!2sph!4v1';

/** Attraction data — single source of truth for JSON-LD, OG, etc. */
export const attraction = {
  name: 'Puerto Princesa City Baywalk Park',
  nameLocal: 'Puerto Princesa City Baywalk Park',
  tagline: 'Where the city meets the sea — Palawan\'s favorite sunset promenade',
  description:
    'A scenic waterfront promenade along Sandoval Street in Puerto Princesa City, Palawan. Lined with palm trees, food stalls, and ocean views, the Baywalk comes alive at sunset with live music, fresh seafood, and a vibrant local atmosphere. Free and open to all, it\'s the heartbeat of the city\'s evening life.',
  rating: '4.0',
  reviewCount: '1000',
  lat: 9.744029,
  lng: 118.7322572,
  plusCode: 'FRVJ+JW Puerto Princesa, Palawan, Philippines',
  address: 'Sandoval St, Puerto Princesa City, Palawan, Philippines',
  hours: {
    open: '14:00',
    close: '00:00',
    display: 'Daily 2:00 PM – 12:00 AM',
  },
  phone: '+63484331746',
  priceRange: 'Free',
} as const;
