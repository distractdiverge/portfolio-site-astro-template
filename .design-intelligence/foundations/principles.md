# Principles

**Status:** Phase 2 rules are confirmed by the owner (unchanged below). Anti-capitalism is a confirmed core value (2026-11-12), expressed subtly. See [[voice]]. The sections marked *Proposed 2026-11-12* come from [[case-study-2026-11]] and [[example-sites-observations]], and need owner confirmation. The previous version is in `archive/2026-11-08/principles.md`.

## Vocabulary (use in copy and section labels)

postmortem, reliability, handoff, tradeoff, scope, accessibility, fair/balanced, inquisitive, passionate, collaborative

Proposed additions and words to avoid are in [[voice]].

## We will

- Keep every section short, scannable, and split into small chunks.
- Make text easy to read: plain language, generous line height, clear hierarchy.
- Design for accessibility first. Meet WCAG AA at minimum.
- Use solid colors only.
- Use minor, subtle CSS animations, each with a graceful fallback under `prefers-reduced-motion`.
- Mark the rainbow fern as decorative (`alt=""` or `aria-hidden`). Never use color alone to convey meaning.
- Use the owner's own photos (self-portrait, Shadow the dog, nature photos) wherever possible.

### Proposed 2026-11-12: trust and contact

- **Say what Astrid fixes, and for whom, in the first screen,** as one `<h1>` and one literal paragraph.
- **Put a price or price range on every offer,** linked to one canonical `/pricing` page.
- **End every offer page with the three doors:** free intro call, paid session, plain email.
- **Show values as policies:** sliding scale, capacity, open-source defaults, AI use. See [[voice]].
- **Keep availability honest and dated** on `/now`. Remove offers Astrid no longer takes.
- **Keep the main nav to 7 items at most.** Secondary pages go in the footer.
- **No ads. No third-party trackers or tag managers.** Basic, privacy-respecting site analytics only: cookieless, no personal data, and ideally self-hosted or from a small values-aligned provider (for example GoatCounter, Plausible or Umami). Say so on `/privacy`. *Confirmed by the owner 2026-11-12 as part of the anti-capitalist core value.*
- **Include a skip link, landmarks and one `<h1>` per page.** Only half the sample does.
- **Use SVG icons with `aria-hidden` for quirks,** not emoji.
- **Keep the body measure at 550 to 700px.**

## We will not

- **Overly complex animation.** Motion must be minor and subtle.
- **Overly complex visuals.** Keep layouts and decoration simple.
- **Dense text.** No walls of copy.
- **Gradients.** Solid colors only, including placeholders, overlays and images used as backgrounds.
- **Pure black (#000) or pure gray.** Tint all neutrals.
- **Stock or random placeholder photos** in the final site.
- **Skill bars**, stock hero imagery, and animated blobs, as a default. These are typical of the category, not rejected by the owner, so treat them as strong suggestions to avoid.

### Proposed 2026-11-12: conversion anti-patterns

- **Abstract or visionary heroes** that delay saying what Astrid does.
- **Pop-up modals,** newsletter interstitials, countdowns, or false scarcity.
- **Autoplaying video or background motion,** glows and particle effects.
- **Long forms before any human contact.** At most three optional questions.
- **Emoji in headings or buttons.**
- **Phone-only or scheduler-only contact.** Always offer plain email.
- **Values as slogans** with no mechanism behind them.
- **Placeholder pages** with no offer, proof or contact (see Mentrix in [[example-sites-observations]]).

## Signature elements

1. **Rainbow fern icon** (`src/assets/fern-colors-web.svg`). Six solid fills: red, orange, yellow, green, blue, purple. Used as the logo and as a recurring icon.
2. **Accent colors** carry the rainbow and purple identity.
3. **Small quirks and icons** across the site.
4. **Personal imagery:** self-portrait, Shadow the dog, and nature photos. These carry the themes of nature, queerness, dogs, and inclusiveness.

Queerness and inclusiveness appear through imagery, accent colors, and copy. They are not decorative symbols that need explaining.

## Color rules

- **Light:** ink black on off-white paper. Tinted neutrals, not `#fff` and not zero-chroma gray. Jacob Kaplan-Moss's, Philip Morgan's and Sara Soueidan's sites are working examples.
- **Dark:** terminal-style near-black background, not `#000`. Purple accents. Mandy Brown's fee page shows lavender-on-purple at 8.25:1.
- **Accent text on light:** use the deep purple (`purple-700`) for text and links. Lighter lavender is for decoration and fills only.
- **Body text:** avoid light gray body copy, even when it passes AA. Philip Morgan's `#6c6c6c` at about 5:1 reads faint.
- Verify contrast ratios when tokens are set.

## Anti-slop

Default strictness is `strict`. See `references/foundations/anti-patterns.md` in the skill for the full list. Violations need explicit owner confirmation.

Related: [[audience]], [[direction]], [[voice]], [[system]]
