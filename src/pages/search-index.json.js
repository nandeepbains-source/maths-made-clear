import { resources } from '../data/resources.js';
import { getTopic } from '../data/topics.js';

export const prerender = true;

export async function GET() {
  const index = [];

  resources.forEach((r) => {
    const topic = getTopic(r.topic);
    r.resourceType.forEach((type) => {
      const typeLabel = { guide: 'One Minute Guide', tutorial: 'Video Tutorial', practice: 'Practice' }[type];
      const urlBase = { guide: '/guides/', tutorial: '/tutorials/', practice: '/practice/' }[type];
      index.push({
        slug: r.slug,
        title: r.title,
        topic: topic?.name || r.topic,
        type,
        typeLabel,
        url: `${urlBase}${r.slug}/`,
        keywords: [r.title.toLowerCase(), ...r.keywords.map((k) => k.toLowerCase())],
      });
    });
  });

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
