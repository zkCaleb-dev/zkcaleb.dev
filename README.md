# zkcaleb.dev

Sitio personal de Caleb: perfil, proyectos y build log.

- Astro 5 estático, inglés, dark. Fuentes self-hosted (fontsource).
- Entradas del log: `src/content/log/NNN-slug.md` (frontmatter: title, date, tags, summary).
- Deploy: Coolify (Dockerfile → nginx) detrás de Cloudflare Tunnel, en el homelab.

## Dev

```bash
npm install
npm run dev
```
