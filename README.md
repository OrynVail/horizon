# Horizon

A dark portfolio for writing, work and pictures. SvelteKit, no CSS framework, self-hosted
type, no client-side JavaScript beyond what SvelteKit ships.

One idea holds it up. Home shows the whole object. Every other page shows a fragment of
its limb.

The index is a threshold. One rendered shape, a nav, nothing else. Interior pages carry an
arc of that same shape under the masthead — the same object, too close to take in at once.

I built it for my own site. Everything personal came out. What is left is the structure.

```
npm install
npm run dev
```

Everything you change lives in `src/lib/content/`. Nothing outside it needs touching.

## What's in it

| Route                   | What it is                                                             |
| ----------------------- | ---------------------------------------------------------------------- |
| `/`                     | The threshold. One shape, the nav, nothing else. No scroll, no footer. |
| `/projects`             | Work, banded by heat rather than sorted by date.                       |
| `/blog`, `/blog/[slug]` | Writing, sorted by time. Markdown via mdsvex.                          |
| `/art`                  | A balanced masonry for pictures.                                       |
| `/about`                | A statement, a worldline, a list, a way to reach you.                  |
| `/sitemap.xml`          | Generated at build from your routes and posts.                         |

## Making it yours

```
src/lib/content/
  site.ts       name, url, nav, footer, contact, social
  about.ts      the about page, top to bottom
  projects.ts   the work list
  art.ts        the picture list
  posts/*.md    writing
```

**Set `site.url` before you deploy.** It feeds every canonical link, every `og:url`, the
sitemap. Leave it and search engines index the placeholder. `static/robots.txt` cannot read
`site.ts`, so change its `Sitemap:` line by hand.

Replace `static/og.jpg`. It is the share card behind every link to your home page.

Replace `static/art/plate-*.webp` with your own pictures. Each wants two files, `name.webp`
and `name-800.webp`. The `w`/`h` in `art.ts` must match the full-size image, or the page
jumps as it loads.

`static/favicon.svg` is the limb at 16px, a placeholder like the rest. Its colours are
literal hex: a favicon is its own document and cannot read `tokens.css`. Change them there
if you reramp.

Posts are markdown with frontmatter. `title`, `date` and `slug` are required. A post missing
`title` or `date` is skipped, not half-rendered. `description` is optional. `type: poem`
switches the body to verse and preserves your line breaks.

## Two rules to keep

Every motif here is derived from real physics rather than decorated with it. Each one has to
work even if no one notices.

**Heat is the hierarchy.** One ramp replaces a palette: `--k0` is the void, `--k5` is the
photon ring. Current things burn. Finished things cool and recede. `/projects` sorts by heat
rather than by date, and that is the only thing keeping it from being `/blog` with different
nouns.

**No glow. Anywhere.** An event horizon is the darkest thing in the universe. No
`text-shadow`, no bloom, no neon. Light comes from contrast against the void, never from
spilling. The previous version of my site glowed on every hover; it was the least honest
choice available.

Hover is the one exception, and it obeys the same rule. Approaching something is what makes
it brighter, so a hovered title moves up the ramp. Take that with you if you add a component.
It is most of why this reads as quiet rather than dead.

## Type

Three faces, one job each. **Fraunces** for display. **Newsreader** for prose. **Spline Sans
Mono** for data — dates, labels, counts — and never for reading.

They are subset and self-hosted in `static/fonts`. The site makes no third-party requests.

**None of them carries U+2192 or U+2713.** A typed arrow or tick falls back to a system font
and looks wrong. Draw both as inline SVG masks instead — `.more a::after` on the about page
is the reference.

## Layout, if you extend it

`--page` is 44rem, the outer column. `--measure` is 35rem, the reading width. Headings and
rules take the page. Text takes the measure, **centred inside it**.

Left-align the measure instead and every paragraph sits a fixed distance left of a centred
nav, at every width, on every page. Each box is correctly centred on its own; the
relationship between the two widths is what breaks. Cap any block you add at `--measure` and
give it `margin-inline: auto`.

## Deploying

Configured for `@sveltejs/adapter-netlify`. There is no `netlify.toml`. The publish directory
is `build`; functions land in `.netlify/functions-internal`. Swap the adapter in
`svelte.config.js` for any other host.

## Licence

**MIT.** Build what you like on it, open or closed. Keep the copyright notice and you are
done.

The typefaces are licensed separately, under the SIL Open Font License.
`static/fonts/OFL.txt` must travel with them.
