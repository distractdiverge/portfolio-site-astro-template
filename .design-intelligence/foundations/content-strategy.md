# Content strategy

**Status:** Confirmed by the owner 2026-11-12, with open items tracked in [[OUTSTANDING-CONSIDERATIONS]]. Offer names are kept for now and will be re-reviewed. Prices are `[PRICE TBD]` placeholders until the Rainbowfern Rate Sheet is final. See [[003-owner-decisions-2026-11-12]].

## Positioning

**Name on the site:** Astrid Lapinski, everywhere. "Alex" is being phased out and appears only on legal paperwork that requires it (contracts, invoices), never on the site or in structured data.

**One line:** Astrid helps small teams understand the software and systems they already have, and make them safer to change.

**Systems thinking, shown rather than defined.** Pair one stance sentence with concrete inputs and outputs (Eduardo da Silva's pattern):

> There are no silver bullets. I work from what's already there: the codebase, the architecture diagrams (if any), the meetings, and the people who keep it running. I hand back documentation, diagrams and a plan people actually agree on.

Name the three domains (technical, social, legal) once. Let the case studies show them.

## Offers: two offers, one people track, one on-ramp

| Offer | What it is | Who it's for | Price display |
|---|---|---|---|
| **Codebase Map** (flagship) | Fixed scope. Astrid reverse-engineers an undocumented or AI-generated codebase into an architecture overview, dependency and data-flow diagrams, a risk list, and a prioritized "safe to change" plan. Small JS/TS/Python/.NET projects. | Founders, eng managers, small teams with code nobody fully understands | "From [PRICE TBD]" |
| **Small-business systems** | Ethical, self-hostable tools (CRM, hosting, monitoring) plus a review of regulated AI adoption, with optional ongoing support. | Small businesses, co-ops, nonprofits | "From [PRICE TBD]," sliding scale |
| **Mentoring and coaching** (people track) | Privacy-protected mentoring for engineers from underrepresented and non-traditional paths. | Queer, women, POC and career-changing developers | Sliding scale: standard [PRICE TBD], floor [PRICE TBD] |
| **Unstuck sessions** (on-ramp) | 60 or 90 minutes, one problem, booked and paid online. This is the planned "vibe coder sessions" offer. It leads naturally into a Codebase Map. | Anyone who already knows they want help | [PRICE TBD] for 60 min, [PRICE TBD] for 90 min, paid at booking |

**Ethical AI is a stance, not a service line.** It runs through the writing and the "How I work" section. Advisory requests come in through Small-business systems.

## Sitemap

Main nav, 5 to 7 items, in this order:

1. **Home** `/`
2. **Work with me** `/work`, linking to `/work/codebase-map`, `/work/small-business`, `/sessions`
3. **Mentoring** `/mentoring`
4. **Case studies** `/cases` (this replaces the current "Projects" page)
5. **Writing** `/writing`
6. **About** `/about` (includes "How I work")
7. **Contact** `/contact`

Footer only: `/pricing` (also linked from every offer page), `/now`, `/cv`, `/press`, `/accessibility`, `/privacy`, RSS, `/llms.txt`, `sitemap.xml`.

## Page inventory

### Home `/`

1. **H1 plus one literal paragraph.** What Astrid fixes, for whom, where. This paragraph is also what AI summarizers will quote.
2. **Short intro with the self-portrait.** 15+ years at PayPal as engineer, manager and architect, including one of three architects on the PayPal Credit platform. Now runs Rainbowfern, a one-person practice in northwest Philadelphia, remote-first.
3. **Ways to work with me.** Four short blocks, one per offer, each with a single sentence and a price line.
4. **One proof point.** A two-sentence teaser of the PPP case study, linking to `/cases`.
5. **Three doors** (see Contact flow below).
6. Optional: latest two pieces of writing. Shadow or a nature photo as the warmth beat.

Draft copy, to edit in Astrid's voice:

> **I help small teams understand the software and systems they already have, and make them safer to change.**
>
> I'm Astrid Lapinski. I spent 15+ years at PayPal as an engineer, manager and architect, including as one of three architects on the PayPal Credit platform. Now I run Rainbowfern, a one-person practice in northwest Philadelphia. I work remotely, and occasionally in person nearby.

### Offer pages `/work/*` and `/sessions`

Structure, borrowed from Hillel Wayne's consulting page:

1. The problem, in the reader's own words ("Nobody fully understands this code, and you're afraid to change it.")
2. What you get: a list of deliverables
3. How it works: steps, rough timeline, what Astrid needs from the client
4. Proof: a linked case study or sample artifact
5. Price line and a link to `/pricing`
6. Who it's not for
7. The three doors

### Mentoring `/mentoring`

Modeled on jacobian.org/help and Mandy Brown's fee page:

- What Astrid offers, with a separate list for people from backgrounds underrepresented in tech.
- **Privacy practices stated plainly:** pseudonyms and non-work emails are welcome, plus what Astrid keeps and what gets deleted.
- Sliding scale on the honor system: no questions about income or identity.
- Boundaries without coldness, e.g. "the worst I'll do is say no, kindly."

### Case studies `/cases`

Use this structure for each: context, constraint, what Astrid did, outcome, why it matters to a client. Mark which parts Astrid personally did; Hillel Wayne's honesty marker earns trust with skeptical engineers.

1. **PPP loan system (lead case).** Small businesses needed loans processed fast. The constraint was two weeks from start to a working system inside a regulated financial company. Then cover Astrid's role, the architecture choices, and the people work: who had to align, what got cut, how it was made safe. Use only figures Astrid is allowed to publish; "volumes are confidential" is itself a credibility signal. Close with: "The hard part wasn't only the code. It was the technical, social and legal system around it." **Disclosure is TBD.** If the details can't be shared, keep PPP to a short mention on `/cv` and About, and lead `/cases` with another project instead (see fallback below).
2. **Rainbowfern's own self-hosted stack.** Dogfooding the Small-business systems offer.
3. **First Codebase Map.** Add as soon as one exists, redacted.

**Fallback lead cases if PPP can't be detailed.** Astrid already has write-ups for these in the Independent Contracting project:

- Swift Financial acquisition integration: the Salesforce and architecture transition. Strongest fit for systems thinking across technical, social and legal lines.
- API performance optimization at PayPal. Strongest fit for Codebase Map.
- Architectural conflict resolution and engineer management. Strongest fit for mentoring and coaching.
- Razorfish and J&J global Drupal template system. An early-career breadth example.
- Global team coordination and hiring at PayPal. The coalition-building story.

Check each for confidentiality the same way as PPP.

Use Astrid's own images for case studies. No stock photos and no `picsum.photos` placeholders.

### Writing `/writing`

- Full posts live on rainbowfern.com. Substack is the syndication copy. If posts live only on Substack, crawlers credit the expertise to Substack rather than to this site.
- Each post can end with one quiet line pointing to the relevant offer.

### About `/about`

- Story, photos (self-portrait, Shadow, nature) and the personality words.
- **How I work:** values written as practices. See [[voice]].
- One line: "Looking for my résumé? It's here." linking to `/cv`.

### Contact `/contact`: three doors

These appear on `/contact` and repeat at the end of every offer page.

1. **Free 30-minute intro call** through a scheduler. At most three optional questions: what's going on, timeline, and funding preference. Use prettyprettyprettygood's four options: "Needs to be free right now," "Sliding scale," "We have a real budget," "Not sure yet." Send a written agenda before the call. Offer a text-only option on request.
2. **Book an Unstuck session.** Pay at booking through Stripe, so there's no back-and-forth.
3. **Plain email** to **contact@rainbowfern.com** for anyone who doesn't want a scheduler. Promise a response time (e.g. "within two working days") and keep it. The generic address keeps spam away from astrid@, which Astrid uses for direct replies.

### Pricing `/pricing` (one canonical page)

- Keep pricing in one place only. Namaste Data's pricing pages contradict each other, which shows the risk of spreading prices around.
- "From [PRICE TBD]" for fixed-scope offers. A fixed price for sessions. Every price on the site uses the `[PRICE TBD]` placeholder until the Rate Sheet is final, so a search for it finds every spot to fill.
- Sliding scale: a standard rate and a floor, the same quality at every rate, no income or identity questions, and better-resourced clients invited to pay above standard (Mandy Brown's pattern).
- Frame the scale in a way people who know will recognize (see "Hidden in plain sight" in [[voice]]). For example: "Pay what your situation allows. You'll get the same work either way." Name the lowest tier the **solidarity rate**.
- Optional organization tiers by budget (Meena Das's pattern), e.g. co-ops and orgs under $500K at the solidarity tier.
- Optional fee-allocation transparency: what each dollar pays for.
- Honest capacity, e.g. "I take two solidarity-rate projects at a time; 1 open now."

### Footer pages

- `/now`: a dated availability line and current focus. This keeps offers from going stale (Adrian Roselli's pattern).
- `/cv`: role titles, the PayPal Credit architecture role, PPP, Swift Financial, Razorfish, the Drexel degrees, a PDF download, and "Open to Technical Product Owner and architect roles."
- `/press`: a ready-to-paste third-person bio and headshot (Sara Soueidan's pattern). It also serves AI summarizers.
- `/accessibility`, `/privacy`: short and real. State that the site runs no ads and no third-party trackers, only basic privacy-respecting analytics, and name the analytics tool.
- `/colophon` (optional): how the site is built and hosted, with open-source tools and independent hosting. It's a quiet values signal. See [[voice]].

## Decided 2026-11-12

- Clients-first audience: confirmed.
- Offer names: kept for now and to be re-reviewed. See [[OUTSTANDING-CONSIDERATIONS]].
- Prices: TBD, with `[PRICE TBD]` placeholders.
- PPP: disclosure TBD. Fall back to other projects if needed.
- Anti-capitalist stance: subtle, hidden in plain sight. See [[voice]].
- Name: Astrid Lapinski. Published email: contact@rainbowfern.com.

Full record: [[003-owner-decisions-2026-11-12]].

Related: [[audience]], [[voice]], [[legibility]], [[system]]
