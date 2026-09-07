# Maths Made Clearer

A free, GCSE-focused maths support site for pupils aged 11–16 — quick guides, short video tutorials and practice questions for every skill, built around the same four steps: **Learn → Watch → Practise → Check**.

Built with [Astro](https://astro.build) as a static site: fast, no backend, cheap to host, and easy to extend by editing one data file.

---

## Why Astro

- **Static-first** — every page is plain HTML/CSS at build time, so it's fast, cheap (comfortably within Netlify's free tier) and doesn't need a database or server to maintain.
- **Content from data, not hand-built pages** — one file (`src/data/resources.js`) drives every guide, tutorial and practice page automatically via Astro's `getStaticPaths`. Add an object, get three pages and a search entry, without touching any HTML.
- **SEO-friendly by default** — clean URLs, sitemap, meta tags and structured data all work out of the box with static output.
- **Low maintenance for a non-developer** — there's no build pipeline to break, no CMS login to manage, and the one file you edit is plain, well-commented JavaScript objects (arrays of `{ title, description, ... }`), which an AI assistant like Claude or ChatGPT can extend for you just by editing text.

---

## Folder structure

```
src/
  data/
    resources.js      ← the main content file: every guide/tutorial/practice skill
    topics.js          ← the six topic areas used in nav, filters and breadcrumbs
    basics.js           ← the Maths Basics topic list
  components/           ← reusable pieces (nav, cards, search box, practice list...)
  layouts/
    BaseLayout.astro     ← shared <head>, SEO meta, header/footer wrapper
  pages/
    index.astro           ← homepage
    guides/[slug].astro     ← one guide page per skill, generated automatically
    tutorials/[slug].astro
    practice/[slug].astro
    topics/[slug].astro      ← one hub page per topic area
    gcse-revision/            ← Foundation/Higher revision hub
    maths-basics/
    request-help/               ← pupil "suggest a topic" form
    search/                       ← search results page
    search-index.json.js           ← generates the search index at build time
public/                            ← robots.txt, favicon, social-share image
astro.config.mjs                    ← site URL + sitemap integration
netlify.toml                         ← Netlify build settings
```

---

## Running it locally

You'll need [Node.js](https://nodejs.org) (v18 or later) installed.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:4321`). Changes to any file are reflected instantly.

To build and preview the production version:

```bash
npm run build
npm run preview
```

---

## Adding a new maths resource (guide / tutorial / practice)

Everything lives in **`src/data/resources.js`**. Open it and copy an existing entry — for example `percentage-increase` — as your starting point. The file has detailed comments at the top explaining every field, but the short version:

1. Give it a unique `slug` (lowercase, hyphenated) — this becomes the URL for all three page types automatically:
   - `/guides/your-slug/`
   - `/tutorials/your-slug/`
   - `/practice/your-slug/`
2. Set `topic` to one of the slugs in `src/data/topics.js` (`number`, `fdp`, `ratio`, `algebra`, `geometry`, `stats`).
3. Set `resourceType` to whichever of `'guide'`, `'tutorial'`, `'practice'` you have content for — you don't need all three from day one. Only pages for the types you've included will be built.
4. Fill in `guide.paragraphs` (plain explanation), an optional `guide.workedExample`, `commonMistake`, and `practiceQuestions` (an array of `{ q, a }` — the first one doubles as the "Your Turn" question, the rest become the practice set).
5. Save the file. That's it — the next `npm run dev` or `npm run build` will pick it up, and it's automatically searchable.

You do **not** need to touch any `.astro` page file to add a new skill.

---

## Adding a YouTube tutorial

Find the resource's entry in `src/data/resources.js` and paste the YouTube video ID (the part of the URL after `watch?v=`, e.g. `dQw4w9WgXcQ`) into the `videoId` field:

```js
videoId: 'dQw4w9WgXcQ',
```

Leave it as an empty string (`videoId: ''`) if you don't have a video yet — the site will show a "Video coming soon" placeholder instead of a broken embed. Videos are embedded via `youtube-nocookie.com` and are never hosted on the site itself.

---

## Deploying to Netlify

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. In Netlify, click **Add new site → Import an existing project** and connect the repository.
3. Netlify should auto-detect the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy**. Netlify will give you a `*.netlify.app` URL immediately.
5. From then on, every push to your main branch redeploys the site automatically.

### How Request Help submissions are stored

The form on `/request-help/` uses [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) — Netlify detects it automatically from the `data-netlify="true"` attribute the first time you deploy. No extra setup is needed. Submissions appear under **Site settings → Forms** in the Netlify dashboard. No pupil names, emails or other personal details are collected — only the topic requested, year group and preferred format.

---

## Connecting a custom domain

1. In Netlify, go to **Site settings → Domain management → Add a custom domain**.
2. Follow Netlify's instructions to point your domain's DNS at Netlify (either by changing nameservers or adding the DNS records it shows you).
3. Once it's verified, Netlify issues a free HTTPS certificate automatically.
4. Update `SITE_URL` at the top of `astro.config.mjs` to your real domain, so the sitemap and canonical URLs are correct:

   ```js
   export const SITE_URL = 'https://your-domain.co.uk';
   ```

5. Also update the `Sitemap:` line in `public/robots.txt` to match.
6. Commit and push — Netlify will redeploy with the new URLs.

---

## Adding Google Analytics (GA4) later

1. Create a GA4 property and get your Measurement ID (looks like `G-XXXXXXX`).
2. Open `src/layouts/BaseLayout.astro` and find the commented `<!-- GOOGLE ANALYTICS 4 -->` block in the `<head>`. Uncomment it and paste in your Measurement ID.
3. Most interactive elements across the site already carry `data-track="..."` attributes (searches, guide/video/practice opens, answer reveals, topic selections, resource requests) with `data-resource` or `data-topic` values alongside. Once GA4 is loaded, add a small script that listens for clicks on `[data-track]` and reports them, e.g.:

   ```html
   <script>
     document.addEventListener('click', (e) => {
       const el = e.target.closest('[data-track]');
       if (el && window.gtag) {
         gtag('event', el.dataset.track, {
           resource: el.dataset.resource,
           topic: el.dataset.topic,
         });
       }
     });
   </script>
   ```

   This gives you reporting on which maths areas pupils search for, open and struggle with most, without any further changes to the page markup.

No analytics implementation is included by default — nothing is tracked until you add this yourself.

---

## Notes for future development

- **No CMS yet, by design.** All content lives in `src/data/resources.js`, `src/data/topics.js` and `src/data/basics.js` — plain, well-commented JavaScript, which is easy for a non-developer to edit directly or with AI help. If the site grows large enough to need a proper editing interface, these files could later be swapped for a headless CMS (e.g. Decap CMS, which works well with Git-based static sites) without changing how any page is built.
- **The social-share image** at `public/og-default.svg` is a placeholder — swap it for a real 1200×630 PNG/JPG before relying on link previews on social media, as some platforms don't render SVG Open Graph images.
- **Difficulty and GCSE tier tagging** on each resource (`difficulty`, `gcseTier`) already power the Foundation/Higher filter on the GCSE Revision page — keep these accurate as you add content.
