# Principles

**Status:** Phase 2 complete. Confirmed by the owner.

## Vocabulary (use in copy and section labels)

postmortem, reliability, handoff, tradeoff, scope, accessibility, fair/balanced, inquisitive, passionate, collaborative

## We will

- Keep every section short, scannable, and split into small chunks.
- Make text easy to read: plain language, generous line height, clear hierarchy.
- Design for accessibility first. Meet WCAG AA at minimum.
- Use solid colors only.
- Use minor, subtle CSS animations, each with a graceful fallback under `prefers-reduced-motion`.
- Mark the rainbow fern as decorative (`alt=""` or `aria-hidden`). Never use color alone to convey meaning.
- Use the owner's own photos (self-portrait, Shadow the dog, nature photos) wherever possible.

## We will not

- **Overly complex animation.** Motion must be minor and subtle.
- **Overly complex visuals.** Keep layouts and decoration simple.
- **Dense text.** No walls of copy.
- **Gradients.** Solid colors only, including placeholders and overlays.
- **Pure black (#000) or pure gray.** Tint all neutrals.
- **Stock or random placeholder photos** in the final site.
- **Skill bars**, stock hero imagery, and animated blobs, as a default. These are typical of the category, not rejected by the owner, so treat them as strong suggestions to avoid.

## Signature elements

1. **Rainbow fern icon** (`src/assets/projects/fern-colors-web.svg`). Six solid fills: red, orange, yellow, green, blue, purple. Used as the logo and as a recurring icon.
2. **Accent colors** carry the rainbow and purple identity.
3. **Small quirks and icons** across the site.
4. **Personal imagery:** self-portrait, Shadow the dog, and nature photos. These carry the themes of nature, queerness, dogs, and inclusiveness.

Queerness and inclusiveness appear through imagery, accent colors, and copy. They are not decorative symbols that need explaining.

## Color rules

- **Light:** ink black on off-white paper. Tinted neutrals, not `#fff` and not zero-chroma gray.
- **Dark:** terminal-style near-black background, not `#000`. Purple accents.
- **Accent text on light:** use the deep purple (`purple-700`) for text and links. Lighter lavender is for decoration and fills only.
- Verify contrast ratios when tokens are set.

## Anti-slop

Default strictness is `strict`. See `references/foundations/anti-patterns.md` in the skill for the full list. Violations need explicit owner confirmation.

Related: [[audience]], [[direction]], [[system]]
