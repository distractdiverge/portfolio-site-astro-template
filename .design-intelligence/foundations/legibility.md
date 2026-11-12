# Legibility for AI agents and crawlers

**Status:** New 2026-11-12, proposed from [[case-study-2026-11]]. It supports the owner's goal of a static or server-rendered site that AI agents can find and read.

## Bottom line

Semantic HTML, plain-language service pages and JSON-LD do the real work. `llms.txt` is a cheap extra, not a strategy.

## Checklist

- [ ] **One `<h1>` per page that states the offer.** Use real `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` elements, and descriptive link text (no "click here"). Astro's static output fits this well.
- [ ] **A literal first paragraph on Home and on every offer page.** It's what both a referred human and an AI summarizer will quote.
- [ ] **JSON-LD `Person`:** name "Astrid Lapinski" (no `alternateName` for "Alex"; that name is being phased out), `jobTitle`, `alumniOf` (Drexel University), `knowsAbout` (software architecture, legacy code documentation, systems thinking, ethical AI adoption, accessibility, mentoring), `sameAs` (Substack, LinkedIn, GitHub, fediverse).
- [ ] **JSON-LD `ProfessionalService`:** Rainbowfern LLC, `founder`, `areaServed` (remote, plus the Philadelphia region), and offers with prices that match `/pricing`. Namaste Data's `knowsAbout` markup is a working example.
- [ ] **`/llms.txt`:** a short file linking to `/work`, `/pricing`, `/cases`, `/cv` and `/press`.
- [ ] **`sitemap.xml` and an RSS feed.**
- [ ] **Canonical writing on rainbowfern.com,** with Substack as the syndication copy.
- [ ] **`/press`:** a third-person bio that summarizers can quote directly.
- [ ] **No ads, trackers or tag managers.** Basic privacy-respecting analytics only. This is also a values signal.
- [ ] **`robots.txt`: allow all crawlers,** including AI search and training crawlers (decided below).

## Evidence on `llms.txt`

- SE Ranking (Nov 2025, about 300,000 domains): about 10% of sites have one, and they found no correlation with AI citations.
- Ahrefs (June 2026, 137,210 domains): 97% of `llms.txt` files got zero traffic in May 2026. Of the fetches that did happen, 19.5% came from named AI tools, with Claude Code the second most common.
- Google Search Central (May 2026): you don't need AI text files to appear in its generative AI search.
- **Why ship it anyway:** coding agents, which are part of Astrid's audience, do read it, and it takes about ten minutes.

## Decision (2026-11-12)

**Allow AI crawlers in, for both search and training data.** Don't block them for now. `robots.txt` stays open. Revisit if the stance changes; it's tracked in [[OUTSTANDING-CONSIDERATIONS]].

Related: [[content-strategy]], [[audience]], [[system]]
