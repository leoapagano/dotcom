# leoapagano.com

A clean, minimalistic website with a blog, a portfolio, and a contact form that nobody uses and yet I still maintain.

The site is based on a modified version of [Erudite](https://github.com/jktrn/astro-erudite) v1.5.0 by [Enscribe](https://enscribe.dev).

## Features

- 🌓 Dark mode support
- 📱 Responsive design
- 📝 Markdown/MDX for content authoring
- 🔗 Social media buttons
- 🔍 SEO-friendly
- 📰 RSS feed & sitemap support
- 🎨 Transitions and animations
- ...and more!

## Building

To get started, install dependencies:

```shell
git clone https://github.com/leoapagano/dotcom
cd dotcom
npm install
```

To preview the site as it is, run the following command at the base of the repo:

```shell
npm run dev
```

Other NPM commands are as follows:

| Command                   | Action                                                                 |
| :------------------------ | :--------------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                                  |
| `npm update`              | Upgrades dependencies                                                  |
| `npm run dev`             | Starts local dev server at `localhost:4321`                            |
| `npm run broadcast`       | Broadcasts dev server at `localhost:4321`                              |
| `npm run build`           | Build production site to `./dist/`                                     |
| `npm run preview`         | Preview your build locally, before deploying                           |
| `npm run compile`         | Builds and previews the site exactly as it will appear in production   |
| `npm run compilecast`     | Builds and broadcasts the site exactly as it will appear in production |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`                       |
| `npm run astro -- --help` | Get help using the Astro CLI                                           |
| `npm run prettier`        | Blanket format all files using [Prettier](https://prettier.io/)        |

All CLI commands are run from the project's base directory.

## Tech Stack

This is a list of the various technologies used to build this template:

| Category   | Technology Name                                                                            |
| ---------- | ------------------------------------------------------------------------------------------ |
| Framework  | [Astro](https://astro.build/)                                                              |
| Styling    | [Tailwind](https://tailwindcss.com)                                                        |
| Components | [shadcn/ui](https://ui.shadcn.com/)                                                        |
| Content    | [MDX](https://mdxjs.com/)                                                                  |
| Codeblocks | [Expressive Code](https://expressive-code.com/), [Shiki](https://github.com/shikijs/shiki) |
| Graphics   | [Figma](https://www.figma.com/)                                                            |
| Deployment | [Vercel](https://vercel.com)     

## Customization

### Site Configuration

Edit the `src/consts.ts` file to update the site's metadata, navigation links, and social links:

```ts
export const SITE: Site = {
  title: 'astro-erudite',
  description: // ...
  href: 'https://astro-erudite.vercel.app',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  // ...
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/jktrn',
    label: 'GitHub',
  },
  // ...
]
```

### Color Palette

Colors are defined in `src/styles/global.css` in [OKLCH format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch), using the [shadcn/ui](https://ui.shadcn.com/) convention:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}

.dark {
  /* ... */
}
```

### Favicons

Favicons are generated using [RealFaviconGenerator](https://realfavicongenerator.net/). To adjust the favicons, replace the files in the `public/` directory (such as `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, etc.) with your own. After updating the favicon files, you'll also need to adjust the references in `src/components/Favicons.astro` to match your new favicon filenames and paths:

```html
<!-- Replace these with the generated meta tags -->
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="astro-erudite" />
<link rel="manifest" href="/site.webmanifest" />
```

## Adding Content

### Blog Posts

Add new blog posts as MDX files in the `src/content/blog/` directory. Use the following frontmatter structure:

```yml
---
title: 'Your Post Title'
description: 'A brief description of your post!'
date: 2024-01-01
tags: ['tag1', 'tag2']
image: './image.png'
authors: ['author1', 'author2']
draft: false
---
```

The blog post schema is defined as follows:

| Field         | Type (Zod)      | Requirements                                                                                                                                                                    | Required |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `title`       | `string`        | Should be ≤60 characters.                                                                                                                                                       | Yes      |
| `description` | `string`        | Should be ≤155 characters.                                                                                                                                                      | Yes      |
| `date`        | `coerce.date()` | Must be in `YYYY-MM-DD` format.                                                                                                                                                 | Yes      |
| `image`       | `image()`       | Should be exactly 1200px &times; 630px.                                                                                                                                         | Optional |
| `tags`        | `string[]`      | Preferably use kebab-case for these.                                                                                                                                            | Optional |
| `authors`     | `string[]`      | If the author has a profile, use the id associated with their Markdown file in `src/content/authors/` (e.g. if their file is named `jane-doe.md`, use `jane-doe` in the array). | Optional |
| `draft`       | `boolean`       | Defaults to `false` if not provided.                                                                                                                                            | Optional |

### Authors

Add author information in `src/content/authors/` as Markdown files. A file named `[author-name].md` can be associated with a blog post if `"author-name"` (the id) is added to the `authors` field:

```yml
---
name: 'enscribe'
pronouns: 'he/him'
avatar: 'https://gravatar.com/avatar/9bfdc4ec972793cf05cb91efce5f4aaaec2a0da1bf4ec34dad0913f1d845faf6.webp?size=256'
bio: 'd(-_-)b'
website: 'https://enscribe.dev'
twitter: 'https://twitter.com/enscry'
github: 'https://github.com/jktrn'
mail: 'jason@enscribe.dev'
---
```

The author schema is defined as follows:

| Field      | Type (Zod)                                 | Requirements                                                                                                                                                             | Required |
| ---------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `name`     | `string`                                   | n/a                                                                                                                                                                      | Yes      |
| `pronouns` | `string`                                   | n/a                                                                                                                                                                      | Optional |
| `avatar`   | `string.url()` or `string.startsWith('/')` | Should be either a valid URL or a path starting with `/`. Preferably use [Gravatar](https://en.gravatar.com/site/implement/images/) with the `?size=256` size parameter. | Yes      |
| `bio`      | `string`                                   | n/a                                                                                                                                                                      | Optional |
| `mail`     | `string.email()`                           | Must be a valid email address.                                                                                                                                           | Optional |
| `website`  | `string.url()`                             | Must be a valid URL.                                                                                                                                                     | Optional |
| `twitter`  | `string.url()`                             | Must be a valid URL.                                                                                                                                                     | Optional |
| `github`   | `string.url()`                             | Must be a valid URL.                                                                                                                                                     | Optional |
| `linkedin` | `string.url()`                             | Must be a valid URL.                                                                                                                                                     | Optional |
| `discord`  | `string.url()`                             | Must be a valid URL.                                                                                                                                                     | Optional |

> [!TIP]
> You can add as many social media links as you want, as long as you adjust the schema! Make sure you also support the new field in the `src/components/SocialIcons.astro` component.

### Projects

Add projects in `src/content/projects/` as Markdown files:

```yml
---
name: 'Project A'
description: 'This is an example project description! You should replace this with a description of your own project.'
tags: ['Framework A', 'Library B', 'Tool C', 'Resource D']
image: '/static/1200x630.png'
link: 'https://example.com'
startDate: '2024-01-01'
endDate: '2024-01-01'
---
```

The project schema is defined as follows:

| Field         | Type (Zod)      | Requirements                            | Required |
| ------------- | --------------- | --------------------------------------- | -------- |
| `name`        | `string`        | n/a                                     | Yes      |
| `description` | `string`        | n/a                                     | Yes      |
| `tags`        | `string[]`      | n/a                                     | Yes      |
| `image`       | `image()`       | Should be exactly 1200px &times; 630px. | Yes      |
| `link`        | `string.url()`  | Must be a valid URL.                    | Yes      |
| `startDate`   | `coerce.date()` | Must be in `YYYY-MM-DD` format.         | Optional |
| `endDate`     | `coerce.date()` | Must be in `YYYY-MM-DD` format.         | Optional |

## License

This project is open source and available under the [MIT License](LICENSE).

---

This site is best viewed with Microsoft Internet Explorer 6.