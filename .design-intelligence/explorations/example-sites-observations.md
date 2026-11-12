# Example sites: observations

**Captured:** 2026-11-12 in the Claude desktop browser pane, at an 800×609 desktop viewport. Measurements come from computed styles in the live page. Content notes come from page reads the same day.
**Screenshots:** `examples/<site>-desktop.jpg`, above the fold only. Mobile layouts were not captured.
**Caveat:** The pane ran in dark color scheme, so sites with dark-mode CSS (everythingchanges, Jonathan Stark, prettyprettyprettygood) show their dark theme.

These are the sample from [[case-study-2026-11]], seen as design references. Each entry notes what to borrow and what conflicts with [[principles]].

## Measurements

| Site | Body type | Size / line-height | Measure | Nav items | Third-party scripts | JSON-LD | Reduced-motion CSS | Skip link |
|---|---|---|---|---|---|---|---|---|
| hillelwayne.com/consulting | System stack | 18px / 1.5 | 700px | 5 | X embeds, GoatCounter | none | no | yes |
| understandlegacycode.com | Space Grotesk, Montserrat display | 16px / 1.65 | 603px | 4 + theme toggle | none | none | yes | yes |
| jacobian.org/help | Merriweather, Roboto Condensed | 16px / 1.75 | 672px | 3 + search | Cloudflare Insights | none | yes | no |
| esilva.net/consulting | System stack | 16px / 1.5 | 700px | 11 (two rows) | Google Tag Manager | WebPage | no | no |
| everythingchanges.us/coaching/fees | Inter | 18.5px / 1.5 | 645px | 5 | none | none | no | yes |
| namastedata.org/rates | Wix web fonts | 16px / normal | 323px | 11 visible | GTM, Hotjar, Google Ads, Sentry, Mailmunch (101 scripts) | Person, ProfessionalService, Service | yes | no |
| techbetter.ai | Wix web fonts | — | 615px | 5 + login | Sentry, CommonNinja (89 scripts) | WebSite | yes | no |
| tatianamac.com | Calibre, Domaine Display | 20.5px | — | 5 | none | none | no | yes |
| jonathanstark.com | Merriweather, Oswald | 17.6px / 2.0 | 562px | 4 | Fathom, Hotjar | Article | no | no |
| rainbowforge.dev | Anonymous Pro, Courier Prime | 16px / normal | 707px | 5 + a11y menu | PostHog, Cloudflare Insights | none | yes | no |
| prettyprettyprettygood.org | DM Sans, Fraunces | 18px / 1.63 | 441px | 5 | Cloudflare Turnstile only | Organization, WebSite, FAQPage | yes | yes |
| pdxnpc.com/rates | Noto Serif | 16.8px / 1.6 | 969px | 4 + contact button | WordPress stats | BreadcrumbList | yes | yes |
| wherewithall.com/services | Libre Franklin | 16px / 1.75 | 605px | 5 | Google Tag Manager | none | no | no |
| sarasoueidan.com | System stack | intro 35px | 452px | 5 | Fathom | none | yes | yes |
| jvns.ca | PT Serif, PT Sans | 16px | 556px | 10 | Heap, Plausible | none | no | yes |
| philipmorgan.net | Geist | 15.4px / 1.55 | 434px | 4 | none | none | no | no |
| mentrixgroup.com | Serif display | — | — | none | — | — | — | — |
| adrianroselli.com | Not captured (page timed out) | | | | | | | |

Rainbowfern's tokens for comparison: 17px body, 1.6 line height (see `decisions/001`).

## What the sample says about design

1. **Warm paper is common among the most trusted text-first sites.** jacobian.org (`rgb(242 236 222)`, black text, 17.8:1), philipmorgan.net (`#faf9f6`), sarasoueidan.com (warm gray) and Mentrix (off-white) all use it. This supports the confirmed "crisp warm paper" direction.
2. **A deep purple dark theme can work.** Mandy Brown's fee page uses lavender text on deep purple (`rgb(213 206 229)` on `rgb(59 41 96)`, 8.25:1). It's a working precedent for Rainbowfern's purple-accented dark theme, with one difference: Rainbowfern uses a near-black base and keeps purple as an accent.
3. **Body text sits at 16 to 18px with line height 1.5 to 1.75 and a measure of 550 to 700px.** Rainbowfern's 17px / 1.6 is in the middle. The outliers read worse: pdxnpc's 969px lines are tiring, and Namaste Data's 323px column feels cramped.
4. **A portrait beside the intro is the common personal pattern.** Sara Soueidan and Philip Morgan both use it, and it matches rainbowfern.com's current layout. Keep the self-portrait there.
5. **Site builders bring trackers.** The two Wix sites load 89 and 101 scripts, including Hotjar and ad tags. The rest load 2 to 15. Several values-led sites still run analytics (Rainbow Forge uses PostHog, Jonathan Stark uses Hotjar). Only about a third of the sample loads no third-party scripts at all, so "no trackers" is a real, checkable differentiator for Rainbowfern.
6. **Structured data describing the person or service is rare.** Namaste Data (Person and ProfessionalService) and prettyprettyprettygood (Organization and FAQPage) are the only two with it. Easy to stand out. See [[legibility]].
7. **Basic accessibility is inconsistent even on accessibility-minded sites.** Skip links appear on 8 of 16 measured sites, and reduced-motion CSS on 8 of 16. Doing both is cheap and visible to the people who check.
8. **Emoji are used as icons** (understandlegacycode, esilva). They look quirky but are read aloud by screen readers. For Rainbowfern's "small quirks and icons," use SVG icons with `aria-hidden`.
9. **Motion and imagery that break Rainbowfern's rules turn up even on values-aligned sites.** Rainbow Forge uses an autoplaying background video and glowing text. TechBetter puts a swirl-gradient image behind the portrait. Values alignment doesn't make these right for Rainbowfern.

## Per-site notes

### hillelwayne.com/consulting
Text-first and system font, with a single yellow rule under the H1. Borrow the plain service list, quantified cases and "worked on officially" marker. Avoid: "Spec pairing and review" and "Retainer services" are listed with no section behind them. That kind of stale offer quietly erodes trust.

### understandlegacycode.com
Dark navy page with a magenta accent, a big two-tone wordmark, and a left-edge pattern. There's a dark/light toggle. The intro is a quoted note signed by Nicolas. It's the closest topical match to Codebase Map. Borrow the reader's pain words and the signed, personal intro. Avoid: emoji section icons, a long scroll of about 50 entries, and no direct contact path on the home page.

### jacobian.org/help
Warm paper body with an orange header band, a serif body and a condensed sans for headings. A one-line italic summary sits under the title ("want help? Email me"). Borrow the summary line, the numbered lists and the separate section for underrepresented people. It's the model for `/mentoring`.

### esilva.net/consulting
White page, system font, an 11-item two-row nav, and a light-green mission callout. Emoji serve as jump links. Borrow the stance sentence and the two clearly named service types. Avoid: the nav sprawl, emoji, jargon ("fast flow of value"), and Google Tag Manager.

### everythingchanges.us/coaching/fees
Deep purple background, lavender Inter text, a large light H1 ("Fee model."), and no images. Borrow the whole fee-page structure for `/pricing`, and use it as a contrast reference for the dark theme.

### namastedata.org/rates
Wix. Orange "Book time to chat" button in the header, a busy mural photo hero with a highlighted H1, and a monospace-style body. Borrow the budget tiers, fee allocation and JSON-LD. Avoid: the build (101 scripts, Hotjar, ad tags), the stock-style hero, the narrow column, and the nav sprawl.

### techbetter.ai
Wix. Dark header, a cyan italic display hero, and a swirl-gradient portrait background. The page's only H1 is "Foundations," not the hero. Borrow the "Find your way in" audience doors. Avoid: the abstract hero, the gradient imagery, and the heading structure.

### tatianamac.com
Dark page with a magenta logo and nav underlines, a large serif one-sentence H1, and a bright green chevron band. No third-party scripts. Borrow the build ethic (Eleventy, release notes, no trackers) and the confident one-sentence identity. A one-sentence homepage is too thin for a new practice.

### jonathanstark.com
Dark, centered. A circle portrait, an Oswald all-caps H1, one big pill CTA, then testimonials with headshots. Borrow the "three ways I can help" ladder. Avoid: the hard-sell testimonial tone, Hotjar, and the all-caps display heading.

### rainbowforge.dev
Black page, teal monospace text, an autoplaying particle-wave background video, glowing title text, and an accessibility menu. Borrow the candor about sliding scale and identity. Avoid: autoplay motion, glow effects and analytics. The accessibility menu is a nice gesture, but it doesn't replace accessible defaults.

### prettyprettyprettygood.org
Dark warm brown with a coral accent, a Fraunces serif H1 with one coral word, and two CTAs ("See the work" outlined, "Start a project" filled). The hero image placeholder was empty at capture. It has the strongest JSON-LD and no trackers. Borrow the literal audience-plus-sliding-scale-plus-capacity hero paragraph, the funding-preference field and the two-CTA pattern.

### pdxnpc.com/rates
White WordPress page with a blue title band and a purple "Contact" button. Short and plain. Borrow the dollar range explained by type of work and the free first hour. Avoid: lines that run the full content width.

### wherewithall.com/services
White with a blush title band, a centered thin serif heading, and small-caps section labels. Calm, but there's no CTA in the body, and it reads like a firm ("we"). Borrow the services grouped by format and the named, titled testimonials.

### sarasoueidan.com
Warm gray paper, a system font, a large intro paragraph, and the portrait on the right. A black banner admits the site is mid-redesign. The site states it was written without LLMs and asks that its content not be used for training. That's relevant to Rainbowfern's open AI-crawler decision. Borrow the layout (closest to rainbowfern.com today) and the "My people are…" audience line.

### jvns.ca
Orange wordmark with striped borders around the page (a pattern, not a gradient), white content on a gray field, and a dated post list. Borrow the plain titles, dated lists and generous intro. It has no paid-work path, and it runs Heap analytics.

### philipmorgan.net
Off-white page, a black-and-white portrait, and six contact channels in a bordered box. The tagline has a typo ("Profesionally"). Gray body text (`#6c6c6c`, about 5:1) passes AA but reads faint. Borrow the restraint. Avoid: too many contact channels with no offer attached, and the light gray body text.

### mentrixgroup.com
Now a "becoming Mentrix Studio" placeholder: big serif "Design Knowledge Systems," a teal circle logo, and no offer, proof or contact. A useful warning: a well-designed placeholder still converts nobody.

### adrianroselli.com
Not captured. The contact page now says he's open to speaking, writing and consulting, which reverses the earlier report's "unavailable." His contact form has been offline because of spam. This shows why availability lines need dates (`/now`).

## Changes since the case study report

- Mentrix is now a pre-launch placeholder.
- Adrian Roselli's availability has changed to open.
- Hillel Wayne lists services with no matching sections.
- Philip Morgan's offer is now an agency.

These changes all point the same way: a dated `/now` page and pruning stale offers matter.

Related: [[case-study-2026-11]], [[live-site-observations]], [[principles]], [[direction]]
