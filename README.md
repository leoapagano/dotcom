# leoapagano.com

A personal website that is hosted on Cloudflare Pages at leoapagano.com. Uses Astro for static site generation.

## Finished Site Layout

```text
/
├── 404
├── about
├── contact
├── index
├── blog/
│   ├── index
│   └── all blog pages
└── projects/
    ├── index
    └── all project pages
```

## Project Structure

Note that I have yet to implement most of this, as of March 2024.

```text
/
├── public/
│   ├── fonts/
│   │   └── ALL FONT FAMILIES (folder)
│   │       ├── Font.css (called by src/styles/global.css)
│   │       └── Font.woff
│   │
│   ├── images/
│   │   └── ALL IMAGES (any image format)
│   │
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── footer.astro
│   │   └── navbar.astro
│   │
│   ├── content/
│   │   ├── blog/
│   │   │   └── ALL BLOG POSTS (.md)
│   │   └── projects/
│   │       └── ALL PROJECT PAGES (.md)
│   │
│   ├── layouts/
│   │   └── template.astro
│   │
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   │
│   └── styles/
│       └── global.css
|
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

A few notes:
- Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
- Any static assets, i.e. images, PDFs, and whatnot, can be placed in the `public/` directory.
- All blog posts are stored in `src/content/blog/`. Similarly, all project posts are stored in `src/content/projects/`.

## Commands

Just getting set up? Run the following:

```bash
$ cd /wherever/you/want
$ git clone https://github.com/leoapagano/dotcom.git
$ cd dotcom
$ npm install
$ npm run dev
```
Then, in a browser, type localhost:4321 and the site should come up. Do not switch branches unless the devserver has been stopped with `Ctrl+C` first. Definitely do not deploy directly to main.

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

This site is best viewed with Microsoft Internet Explorer 6.