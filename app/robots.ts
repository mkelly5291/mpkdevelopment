import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/web-development/example'],
    },
    sitemap: 'https://www.mpkdevelopment.com/sitemap.xml',
  };
}
