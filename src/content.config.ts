import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un archivo por update, en src/content/updates/<slug-del-proyecto>/YYYY-MM-DD-titulo.md
const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    project: z.string(),
    date: z.coerce.date(),
    title: z.string(),
  }),
});

export const collections = { updates };
