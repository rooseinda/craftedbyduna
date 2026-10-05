# CraftedByDuna

Complete company profile website for a Jakarta Interior + Architecture + Build studio. Editorial layouts, neutral tokens, local responsive photography, accessible navigation, project filters, structured SEO, and a deployment-safe inquiry form.

## Stack and setup

Next.js 16.3.8 (latest stable registry release checked during creation), React 19, TypeScript 6, Tailwind CSS 4. Safe local Georgia / Arial typography avoids network font dependencies and font shifts. Versions are locked in pnpm-lock.yaml; install with pnpm 11. TypeScript 6 is intentional because the lint ecosystem does not yet support TypeScript 7.

Use Node.js 22.9+ or 24 LTS and pnpm 11:

```sh
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

On Windows, copy with `Copy-Item .env.example .env.local`. Open http://localhost:3000. The initial build needs no API credentials.

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm check:export
```

Build creates optimized local WebP variants and a static site in `out/`. All images use next/image with a local custom loader. No server image optimizer is required. Run the build before the first development session if generated variants were removed.

## Folder structure

```text
app/                  Home, About, Services, Projects, detail, Process, Contact
  globals.css         Shared palette, typography, responsive layout, motion
  sitemap.ts          Static sitemap.xml
  robots.ts           Static robots.txt
components/           Header, Footer, editorial components, filters, form, analytics
config/site.ts        Brand, URL, contact, social links, editable flow story
data/                 Projects, services, process, approved testimonials
lib/                  Metadata helper and responsive image loader
public/images/
  projects/           Project originals and generated WebP variants
  process/            Real site/workshop/construction photography goes here
  team/               Approved team portraits go here
scripts/              Image optimization and exported-link verification
out/                  Built static website (ignored)
```

## Routes

`/`, `/about/`, `/services/`, `/projects/`, `/process/`, `/contact/` and `/projects/[slug]/`.

Initial slugs: de-mahjong, borobudur, jelambar, kelapa-gading, residential-project, retail-commercial-project. These are placeholders, with no invented location, year, project scope, materials, or client challenge. Generic residential/commercial samples are tagged only by the supplied generic titles. Unknown scopes yield honest empty filter results. Project structured CreativeWork data is emitted only after `placeholder` is false.

## Components

Header includes responsive hamburger navigation and Escape support. Footer handles configured or pending links. Photo uses next/image. ProjectCard and ProjectGallery read shared project data. Flow presents the six connected phases. Testimonials displays only verified entries. InquiryForm validates fields and provides honest sending/prepared/error states. FinalCTA, PageIntro, Breadcrumbs, JsonLd, and Analytics are reusable.

## Branding and content

Change the brand and contact defaults in `config/site.ts`. Change colors and fonts in `:root` in `app/globals.css`: paper, ink, stone, accent, muted, line, font-heading, and font-body. Pages retain a few brand editorial headings, so a full rename should also update metadata and prose. No river-name etymology is asserted; the editable flow story is a design metaphor.

Services live in `data/services.ts`, process phases in `data/process.ts`, and testimonials in `data/testimonials.ts`. Add only approved real quotes and set `verified: true`. About's team placeholder should be replaced with confirmed names, biographies, roles, and portraits.

### Add a project

Edit `data/projects.ts` and add a Project record with a unique URL-safe slug. The interface documents every field: title, location, year, category, scope, status, placeholder, description, challenge, solution, decisions, materials, coverImage, gallery, beforeImages, processImages, afterImages, drawings. Use null/empty arrays for unconfirmed facts. Set category tags from verified scope. Set `placeholder: false` only when the record and photographs are confirmed. All slugs are exported by generateStaticParams at build time.

ProjectCard labels and image descriptions adapt to the placeholder flag. Rebuild to add routes, change metadata, or publish content updates.

### Replace images

Put original JPEG/PNG files into:
- `public/images/projects/<project-slug>/cover.jpg` and gallery files;
- `public/images/process/<project-slug>/` for survey, drawings, renders, workshop, construction, and installation;
- `public/images/team/` for approved team portraits.

Use root-relative paths such as `/images/projects/jelambar/cover.jpg` in the data. The build generates `<name>-<width>.webp` next to each original. Supply meaningful alt descriptions when composing new image sections. Existing placeholders reuse three licensed stock references; `public/images/credits.json` records exact source pages and the Unsplash license. These photos never represent actual studio work. To refresh stock references deliberately, run `node scripts/download-references.mjs`; routine builds work offline using the bundled originals.

### Environment variables

All `NEXT_PUBLIC_` values are public and baked into the export. Never put secret API keys in them.

| Variable | Purpose |
| --- | --- |
| NEXT_PUBLIC_SITE_URL | Actual deployed HTTPS origin, without trailing slash. Set before build for correct canonical URLs and sitemap. |
| NEXT_PUBLIC_WHATSAPP_NUMBER | Confirmed international digits, e.g. country code + number; no invented default. |
| NEXT_PUBLIC_EMAIL | Confirmed public studio email. |
| NEXT_PUBLIC_INSTAGRAM_URL | Confirmed full HTTPS profile URL. |
| NEXT_PUBLIC_TIKTOK_URL | Confirmed full HTTPS profile URL. |
| NEXT_PUBLIC_FACEBOOK_URL | Confirmed full HTTPS profile URL. |
| NEXT_PUBLIC_FORMSPREE_ENDPOINT | Optional public Formspree endpoint, e.g. https://formspree.io/f/your-confirmed-form-id. |
| NEXT_PUBLIC_GA_ID | Optional G-... GA4 measurement ID. Blank means no GA4 loads. |
| NEXT_PUBLIC_META_PIXEL_ID | Optional numeric Pixel ID. Blank means no Meta code loads. |
| NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION | Optional Search Console HTML verification token. |

Rebuild after changing any public variable. WhatsApp links include the requested prefilled greeting; form messages include the validated brief. Without a number, WhatsApp affordances lead to clearly marked pending contact details.

### Form handling

Default: native client validation checks email, phone, required fields, message length, and consent. Submission prepares a message, then shows a WhatsApp link when configured, plus a copyable draft. The form never falsely says it sent anything. No inquiry is stored in local storage or on a server.

Formspree: create and verify your form/account, set the public endpoint, and redeploy. A successful HTTP response shows a sent confirmation. Errors preserve the brief and expose the fallback. Apply the provider's spam protection and test delivery before launch.

Resend or another private API: add a server-side endpoint using a Worker/Pages Function or convert to a hosted Next.js server deployment. Keep RESEND_API_KEY (or equivalent) only in server-side hosting secrets, validate the fields again, rate-limit, and add spam protection. Change InquiryForm's fetch destination to that endpoint. A Pages static export cannot contain a Next.js server action or secret-backed route.

### Analytics

Optional trackers load only with valid IDs. This is basic page-load tracking, not a consent-management system or SPA conversion-tracking configuration. Before enabling IDs, implement any applicable consent preferences and agree the tracking plan. Search Console verification itself loads no tracker. No analytics IDs are supplied or active in this version.

## Deployment

See DEPLOYMENT.md. Preferred: Cloudflare Pages static export. Fallback: Vercel static output. Temporary subdomains are subject to availability and provider terms. A custom .com normally costs money and is not automatically included. Nothing has been purchased or deployed to a hosting account.

## Before public launch

Supply the real WhatsApp number, public email/social URLs, project photographs and verified facts, site/process records, team profiles, and approved testimonials. Confirm the actual site URL, test a real inquiry end-to-end, and replace stock photographs. Run the checks above and evaluate Lighthouse against the deployed production site. Performance scores depend on hosting, device, and future content; no unmeasured score is claimed.

