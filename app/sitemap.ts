import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.mpkdevelopment.com';

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/web-development', priority: 1.0, changeFrequency: 'weekly' },
  { path: '', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects/software-engineering', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/projects/game-development', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/projects/game-development/blender', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/projects/game-development/game-mechanics', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/projects/game-development/level-design', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/projects/game-development/performance', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/projects/game-development/player-mechanics', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/projects/game-development/state-machines', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/projects/game-development/ui-ux', priority: 0.5, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
