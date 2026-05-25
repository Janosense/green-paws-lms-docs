# Green Paws LMS — Documentation site

Ukrainian-language end-user documentation for the Green Paws LMS platform, built with
[VitePress](https://vitepress.dev/). Covers the WordPress admin panel (instructor/admin
guide) and the student-facing frontend.

## Local development

```bash
cd documentation
npm install
npm run docs:dev      # http://localhost:5173
```

## Build & preview

```bash
npm run docs:build    # output → .vitepress/dist
npm run docs:preview
```

## Loom videos

Each page embeds a Loom walkthrough via the global `<LoomEmbed id="..." />` component
(`.vitepress/theme/LoomEmbed.vue`). Pages ship with `id=""`, which renders a placeholder
box — paste the Loom share id (the part after `loom.com/share/`) once a video is recorded.

## Deploy to Vercel

Import the repository into Vercel and set **Root Directory = `documentation`**. The
`vercel.json` here pins `buildCommand` and `outputDirectory`, so the build works regardless
of framework auto-detection.

## Content layout

- `guide/` — intro (logging in, roles).
- `admin/` — instructor/admin panel guide (courses, lessons, quizzes, groups, settings, …).
- `student/` — student guide (enrolling, learning, certificates, webinars).
