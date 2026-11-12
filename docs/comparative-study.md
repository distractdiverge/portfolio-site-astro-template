# What makes independent consultant sites drive paid inquiries: an 18-site case study for rainbowfern.com

The pages on solo-consultant sites that get people to make contact answer four questions quickly and in plain words: what you fix, who you fix it for, why you can be trusted, and what the next step costs. For Rainbowfern, that means leading with one concrete offer: making messy or poorly documented small codebases understandable and safe to change. Use the PPP delivery as the main proof point. Put prices or ranges on the page, and offer three low-friction ways in: a free intro call, a paid session you can book directly, and plain email. The values pages and the writing should back up that offer, not compete with it for the top of the homepage.

## TL;DR

- **Most of your visitors will arrive already referred, and they are checking you out before they decide whether to talk to you.** In Hinge Research Institute's "Beyond Referrals" survey of 1,028 buyers, 80.8% look at a provider's website. Hinge's "Referral Marketing for Professional Services Firms" study found 51.9% of buyers have ruled out firms without ever talking to them. The top reason, cited by 43.6%, was "a lack of clarity about the provider's services, expertise, or capabilities." A clear one-line offer and a specific case study matter more than visual polish or volume of content.
- **The sites in this sample that are closest to your values make their ethics concrete through pricing and access.** Examples are Mandy Brown's honor-system sliding scale ($800/month standard, $300/month minimum), Meena Das's rates tiered by client budget, and Jacob Kaplan-Moss's list of free help for underrepresented people. Values stated as policies read as credible. Values stated as slogans read as branding.
- **To make the site legible to AI, rely on semantic HTML, plain-language service pages and JSON-LD, not on llms.txt alone.** Four studies from late 2025 to mid-2026 (SE Ranking, Limy, Otterly, Ahrefs) found AI crawlers almost never request llms.txt. Google's AI optimization guide (15 May 2026) says you don't need machine-readable files or AI text files to appear in its generative AI search. Ship one anyway, because it costs almost nothing and coding agents do read it, but treat it as an extra.

## Key Findings

1. **The website is a verification step, not usually a discovery channel.** Hinge's 2013 "Inside the Buyer's Brain" study of 822 buyers found "Buyers first turn to friends and colleagues (71%)," with online search second at 11%. Hinge's 2018 follow-up found that under 60% of buyers ask for referrals, so referrals still lead but less than before. Philip Morgan, who writes on positioning for independent consultants, says bluntly that for most indie consultants the website "generates almost no lead flow anyway; leads tend to come from elsewhere." What the site does is turn a referral into a conversation, or quietly lose it. So design for the person who already got your name from a peer and is deciding in a few minutes whether to email you.
2. **Being understood beats being impressive.** NN/g's About Us research (three rounds, more than 70 users, 100 sites tested, 85 guidelines) found that "users in the most recent study were more skeptical than in the past." They "see right through complex corporate speak, jargon, and stock photography." Sites earned trust through storytelling, realistic photography, unbiased reviews and "multiple channels to connect with a real person." NN/g's four long-standing credibility factors are design quality, up-front disclosure, comprehensive and current content, and connection to the rest of the web.\[1\]
3. **The best-performing pattern for technical solos is "writing as proof, plus one clear service page."** Hillel Wayne, Nicolas Carlo and Jonathan Stark all put their writing first. Each still has an explicit page or block that says: here is what I'm paid to do, here is evidence, here is how to reach me. Julia Evans' jvns.ca, your style reference, is the clearest counter-example. It has no consulting offer at all, and her About page says most of her income comes from her zine business.\[2\] Copy its readability, not its business model.
4. **Specificity in proof beats breadth.** Hillel Wayne's consulting page names prior clients (Netflix, Cigna, NASA, Sandisk, Meta). It gives quantified case studies (e.g., two days of modeling at eSpark Learning tied to "200k/year in revenue") and marks which studies he personally worked on. That honesty marker is worth copying.
5. **Public pricing is common among the values-led sites and rare among the authority-led ones.** Three sites in the sample publish consulting prices: Namaste Data, Mandy Brown and PDX Nonprofit Consulting.\[3\]\[4\]\[5\] The architecture and sociotechnical consultants (Wayne, da Silva) publish none and route everything to email or a free call. Productized learning products (books, courses, zines) are almost always priced publicly.
6. **The proven low-friction contact pattern is a free 30-minute call plus direct email.** Eduardo da Silva offers both, plus social DMs.\[6\] Meena Das puts "Book time to chat" (Calendly) in the site header.\[7\] Mandy Brown uses a short application form.\[8\] prettyprettyprettygood's form asks one quietly brilliant qualifying question, "Funding preference," and tells people "Don't overthink it."\[9\]

## Comparison table (18 sites)

| # | Site | Person / practice | Category | Key strengths | CTA style | Pricing transparency | Proof type |
|---|---|---|---|---|---|---|---|
| 1 | hillelwayne.com/consulting | Hillel Wayne | Writing-forward engineer; formal methods / system design | Named clients, quantified case studies, talk samples, "studies I worked on" marker | Single mailto ("Contact me here") | None for services; book sold separately | Client logos-as-text, case studies, talks, book, newsletter |
| 2 | understandlegacycode.com | Nicolas Carlo | Legacy-code / codebase rescue | Owns a problem phrase ("legacy code is valuable code you're afraid to change"); Astro static site; free chapter lead magnet | Newsletter signup; book purchase; email in FAQ | Book $39; consulting not priced | Book, OSS tool (Abracadabra), blog, testimonials |
| 3 | jacobian.org/help | Jacob Kaplan-Moss | Engineering leadership / mentoring; values-led | "Ways I'm available to help" page, with an extra section for underrepresented people | Email; paid work routed to REVSYS | Free help listed explicitly; paid not priced | Career history (Django, 18F, Heroku), long-form writing |
| 4 | esilva.net/consulting | Eduardo da Silva | Sociotechnical / architecture consultant | Clear two-track offer (change facilitation vs. up-skilling), named products, "no silver bullets" stance | Email + free 30-min Calendly + social DMs | No prices | Team Topologies credential, bol.com history, talks, articles |
| 5 | mentrixgroup.com | Diana Montalion | Systems thinking / systems architecture | O'Reilly book *Learning Systems Thinking*; Economist and Wikimedia architect history | Not fully verified | Not observed | Book, talks, named past employers |
| 6 | wherewithall.com | Lara Hogan | Engineering-leadership coach | Services grouped by format (training, 1:1, group); named, titled testimonials; "one for me, one to donate" course option | Contact page; newsletter | Courses priced (e.g., $195 single course; $828.75 full program) | Testimonials with names and titles, book, VP Eng history |
| 7 | everythingchanges.us | Mandy Brown | Leadership/work coach; values-led; Philadelphia-based | Most thoughtful sliding-scale text in the sample; application form | Short application form | Standard $800/month (3-month commitment), minimum $300/month, honor system | Writing (A Working Library), former VP/CEO history |
| 8 | namastedata.org | Meena Das | Nonprofit data and AI-equity consultant | Rates by client budget, published fee allocation, annual research report, JSON-LD | "Book time to chat" (Calendly) in header + email | Hourly/day tiers by client budget (some versions conflict) | Original research (AI Equity Project), speaking, publications |
| 9 | techbetter.ai (ravitdotan.com) | Ravit Dotan | Responsible-AI advisor | "Find your way in" block segmenting visitors into four paths | Four audience-specific "Contact me" buttons + Substack | None observed | European Commission engagement, PhD, awards, media |
| 10 | tatianamac.com | Tatiana Mac | Independent engineer; ethics/accessibility; values-led | Single-sentence homepage, Eleventy + HTML/CSS, release notes, "people over profits" About | Email (inquiry@) | None | Speaking, writing, OSS (Self-Defined) |
| 11 | sarasoueidan.com | Sara Soueidan | Accessibility engineer / trainer | Press kit page, named in-house workshop clients | Course enrollment; newsletter | Course priced on its own site | Named clients (Netflix, Telus, Schiphol), course, book chapters |
| 12 | adrianroselli.com | Adrian Roselli | Accessibility consultant | Honest availability status: unavailable for consulting, available for speaking | Contact page | None | W3C work, 800+ posts, talks |
| 13 | jonathanstark.com | Jonathan Stark | Widely cited exemplar (pricing for solos) | "Three ways I can help" ladder: daily email, then book, then private help | Daily email is the primary CTA | Productized offers on a separate page | Many testimonials, named past clients, 3,600+ emails |
| 14 | philipmorgan.net | Philip Morgan | Positioning advisor (exemplar) | Gives away deep guides; contrarian, evidence-minded | Guides, then contact | Not observed | Books, guides |
| 15 | jvns.ca | Julia Evans | Writing-forward reference (her style model) | Readable, plain, generous; no sales layer at all | None for consulting; zines link | Zines priced; corporate tiers on wizardzines | Writing itself |
| 16 | rainbowforge.dev | Rainbow Forge (solo QTPOC web dev) | Queer/values-led solo | Explicit "I will always offer sliding scale," free first consult | Contact page / consult booking | Sliding scale, no dollar figures | Values plus portfolio |
| 17 | prettyprettyprettygood.org | Solo web dev, "woman-owned & queer-friendly" | Queer/values-led solo | "Funding preference" form field; candid capacity status | Short form + email | Sliding scale; "at capacity for fully free projects" | Values, client types |
| 18 | pdxnpc.com/rates | PDX Nonprofit Consulting | Nonprofit tech/ops consultancy (LGBTQ-affiliated) | Clear dollar range explained by type of work | Free first hour + contact page | $50–$125/hr sliding scale | Affiliations (Oregon Pride in Business, Q Center) |

## Per-site case notes

**Hillel Wayne** (hillelwayne.com/consulting). *Borrow:* the structure of Services, then outcome bullets ("Catch complex bugs… before you start writing code"; "Better understand, document, and modify existing legacy systems"), then named clients, then case studies with numbers, then talks with samples and durations.\[10\] Also borrow the footnote marking which case studies he personally worked on.\[10\] That is exactly the kind of honesty a skeptical engineer-buyer rewards. *Avoid:* depending on a single mailto with no booking option. Also note that his About page now says he works as a developer educator at Antithesis.\[11\] A consulting page that outlives your availability quietly erodes trust.

**Nicolas Carlo** (understandlegacycode.com). This is the closest analog to your codebase-rescue line, and it is built on Astro. *Borrow:* he owns a problem phrase and a reframe ("legacy code is valuable code you're afraid to change").\[12\]\[13\] He writes the sales page in the reader's own pain language ("It's an undocumented tangled mess… But it has no test!"). He offers a free chapter in exchange for an email.\[14\] *Avoid:* the heavy emoji and the long, emotional sales-letter style. It works for a $39 book but would feel salesy for a consulting engagement, and emoji in headings are read aloud by screen readers.

**Jacob Kaplan-Moss** (jacobian.org/help). *Borrow this page almost wholesale as a model for your mentoring track.* It is a plain list of what he will do for free for anyone, then an extra list "if you're someone from a background traditionally underrepresented in tech," then one line routing paid work elsewhere.\[15\] It states boundaries without coldness ("the worst I'll do is not reply or say 'no'. I certainly won't be a jerk.").\[15\] *Avoid:* splitting paid work to a different domain. He can do that because REVSYS exists; you should keep everything on rainbowfern.com.\[15\]

**Eduardo da Silva** (esilva.net/consulting). This is the best structural model for your systems-thinking positioning. *Borrow:* a one-sentence mission and the stance "There are no silver bullets or magic frameworks." Also borrow the two clearly separated service types: change facilitation (assessments, multi-session programs) and up-skilling (workshops, coaching, talks). The contact block offers email, a "Free 30 minutes check-in," and social DMs. *Avoid:* no prices at all, which suits enterprise buyers but adds friction for small businesses.\[6\]

**Diana Montalion** (mentrixgroup.com). This is the reference point for "systems thinking for software people." Her authority comes from an O'Reilly book and named architect roles (The Economist, Wikimedia).\[16\] *Borrow:* the framing that systems are communication structures, which is close to your technical-social-legal framing.\[17\] *Note:* I verified only her talks page, so her contact mechanics are not assessed here.

**Lara Hogan** (wherewithall.com). *Borrow:* services grouped by format (training, one-on-one, group), each with one plain paragraph, and testimonials carrying full names and titles (e.g., "Steve Lloyd, VP of Engineering at Strava").\[18\] Also borrow the "one for me and one to donate" purchase option, an elegant equity mechanism that doesn't require a sliding-scale conversation.\[19\] *Avoid:* it reads as a small firm ("Our Team"), which is a tone you don't need to imitate as a company of one.

**Mandy Brown** (everythingchanges.us). She is a Philadelphia-based ex-tech leader turned coach, so this is the closest identity and values match in the sample.\[20\]\[21\] *Borrow:* her fee page, which states two principles (sustainability for her; respect for varied circumstances shaped by "systems of oppression"). It sets a standard rate ($800/month, three-month commitment) and a floor ($300/month). It promises "the same level of time and attention" at any rate and refuses to ask about "income or identity."\[3\] *Avoid:* nothing major. An application form ("What would you like to practice with me?") adds a little friction, which is appropriate for coaching but too much for a quick paid session.\[8\]

**Meena Das / Namaste Data** (namastedata.org). *Borrow:* tiers keyed to client budget (≤$500K, $500K–$5M, >$5M), with a note that the lowest tier is prioritized for social-justice organizations.\[4\] Also borrow the published split of each fee (50% salary, 15% health benefits, 10% operations, 15% pro-bono pool, 10% learning), which is radical transparency that fits your anti-capitalist-leaning values.\[4\] Her About page carries Person and Organization JSON-LD with `knowsAbout` lists, a good AI-legibility model.\[22\] *Avoid:* the navigation. It has roughly 15 items plus nested menus on a heavy Wix build with tag-manager scripts, which is the opposite of the jvns.ca simplicity you want.\[7\]\[22\] Note too that two versions of her rates page disagree on the lowest tier ($120–150/hr vs. $150–180/hr), a reminder to keep one canonical pricing page.\[4\]

**Ravit Dotan / TechBetter** (techbetter.ai). *Borrow:* the "Find your way in" block. It tells visitors "Different people come here for different reasons" and offers four doors (stay connected, lead AI adoption, reinvent your work, invite me to speak).\[23\] That is a clean answer to a multi-audience site like yours. *Avoid:* an abstract hero ("For the first time in history, workers can build the tools…") that doesn't say what she does until you scroll, and several features marked "currently under renovation."\[23\]

**Tatiana Mac** (tatianamac.com). *Borrow:* the build ethic: "Built with HTML & CSS… atop Eleventy," public release notes, an RSS feed, and a "people over profits" About section that states values as beliefs about the work.\[24\]\[25\] *Avoid for your situation:* a homepage that is one sentence plus an email address.\[24\] It works for a well-known speaker but would fail NN/g's basic "explain what you do" test for a new consultancy.

**Sara Soueidan** (sarasoueidan.com). *Borrow:* a press kit page with a ready-to-paste bio and a list of in-house workshop clients.\[26\] It also helps event organizers and AI summarizers, because it is a canonical third-person description of you.

**Adrian Roselli** (adrianroselli.com). *Borrow:* the explicit availability line, "I am currently unavailable for consulting engagements, but am available for speaking."\[27\] A dated availability or "now" line prevents wasted inquiries and signals honesty.

**Jonathan Stark** (jonathanstark.com). This is the most widely cited solo-consultant exemplar. *Borrow:* the "three ways I can help" ladder (free daily email, then book, then private help), which gives every visitor a next step sized to their readiness. *Avoid:* the testimonial tone ("Jonathan should have a warning label on his head") and the hard-sell copy.\[28\] They clash with your anti-hype voice.

**Philip Morgan** (philipmorgan.net). This is an advice source rather than a template. His guides argue that specialization is "the antidote to marketing failures and commoditization."\[29\] He also warns against trying to "perfectly qualify clients on your site by having a long checklist."\[29\]

**Julia Evans** (jvns.ca). Copy the readability, the plain titles, the generosity and the "here is what I learned" voice. Do not copy the business model. Her About page says "Most of my income comes from my programming zines business," and there is no consulting path.\[2\] Wizard Zines shows one priced-tier idea worth stealing: the same product at personal, team, startup and corporate rates, with nonprofits allowed to buy one personal copy and distribute freely.\[30\]\[31\]

**Rainbow Forge** (rainbowforge.dev). *Borrow:* the candor ("I will always offer sliding scale rates"), the explicit pay-what-you-can for "fellow QPOC," and the ask that better-resourced clients pay more.\[32\]\[33\] *Avoid:* no dollar anchors at all. The owner publicly wonders whether to add a pricing page, and the evidence below suggests yes.\[33\]

**prettyprettyprettygood** (prettyprettyprettygood.org). *Borrow:* the required "Funding preference" field ("We need this to be fully free right now" / "sliding scale" / "We have a real budget" / "Not sure yet"). It qualifies leads without shame. Also borrow the line "I can't take everything - but I read every message."\[9\]

**PDX Nonprofit Consulting** (pdxnpc.com/rates). *Borrow:* the best plain explanation in the sample of why a sliding scale has a range ($50–$125/hr). Facilitation and basic consulting sit at the lower end; strategic plans and policy writing sit at the upper end. The first hour is free.\[5\]

## Audience map

| Visitor | What they're deciding | Content that answers it | Priority for Rainbowfern |
|---|---|---|---|
| Small-business owner / nonprofit leader (often referred) | "Can this person help with my specific mess, will I understand her, and can I afford it?" | Plain-language service page, a before/after example, posted price range and sliding-scale policy, a free intro call | **1** |
| Founder / eng manager / CTO with a messy or vibe-coded codebase | "Is she senior enough, does she know my stack, how fast will I see value?" | Codebase-map offer with deliverables, PPP case study, stack list (JS/TS/Python/.NET), sample artifact (redacted diagram or doc) | **1** |
| Peers who refer work | "Can I describe her in one sentence and send a link without risk?" | One-line positioning, "who this is not for," a shareable services URL | **2** |
| Prospective mentees (queer, women, POC, non-traditional) | "Is this safe, will I be judged, what does it cost, is my privacy protected?" | Mentoring page with explicit privacy practices, sliding scale, free/low-cost options, pseudonymous booking allowed | **2** |
| Hiring managers / recruiters (TPO / architect roles) | "Does her experience match the role, and is she available?" | /cv page: role history, PayPal Credit architecture, PPP, degrees, downloadable résumé, "open to" line | **3** (deliberately kept off the main nav) |
| AI agents / LLM crawlers / assistants | "What does this entity do, for whom, where, and how to contact?" | Semantic HTML, a first paragraph that says it plainly, JSON-LD (Person + ProfessionalService with `knowsAbout`, `areaServed`), sitemap, RSS, llms.txt | **3** (cheap to do well) |
| Procurement / ops at larger orgs | "Is this a legitimate entity we can contract with?" | Legal name (Rainbowfern LLC, PA), invoicing/payment methods, insurance status if any, a contract summary | **4** |

The NN/g About Us research explicitly lists job seekers and professionals vetting vendors as About-page users.\[34\]\[35\] Both of your tracks therefore converge on the About page, which is why it carries more weight than usual.

## Cross-site patterns (frequency across the 18 sites)

Counts reflect what I observed on pages I fetched or that appeared in search results. Several sites were not crawled exhaustively, so treat these numbers as lower bounds.

**Must-haves (present on most sites):**
- A clear statement of what they do, in the first screen or first paragraph: about 15 of 18. The weakest were Tatiana Mac (minimal by design) and TechBetter (abstract hero).
- Writing, a newsletter or RSS as an ongoing proof engine: about 14 of 18.
- A direct human contact path (email address or simple form): about 15 of 18.
- Named employers, clients or institutions: about 11 of 18.
- Talks or speaking pages: about 9 of 18.

**Common but not universal:**
- A book, course or zine (a productized expertise artifact): 8 of 18 (Wayne, Carlo, Montalion, Soueidan, Hogan, Stark, Evans, Morgan).
- Explicit equity, sliding-scale or free-help mechanisms: 7 of 18 (Namaste Data, Brown, Rainbow Forge, prettyprettyprettygood, PDX NPC, Hogan's donate option, Kaplan-Moss's help page).
- Testimonials with names: about 6 of 18.

**Differentiators (rare, and effective where present):**
- Consulting prices published in dollars: 3 of 18 (Namaste Data, Brown, PDX NPC).
- A free intro call bookable via a scheduling link: 2–3 of 18 (da Silva, Namaste Data; Hogan probable).
- Explicit availability or capacity status: 4 of 18 (Roselli, Kaplan-Moss, prettyprettyprettygood, Namaste Data's "space for only 5 nonprofits").\[4\]\[9\]\[27\]
- Audience-segmented "choose your path" entry: 2 of 18 (TechBetter, Stark's three-ways ladder).
- Structured data describing expertise (`knowsAbout`): confirmed on 1 of 18 (Namaste Data). Other sites were not inspected for it.
- Original research as proof: 1 of 18 (Namaste Data's AI Equity Project, 880 responses in 2026).\[36\]

**What this means:** the baseline that every credible site has is clarity, writing and a human contact path. What separates sites is transparency mechanics: prices, capacity and equity policy. That is good news for you, because transparency is cheap for a company of one and fits your values.

## Recommended content inventory and sitemap for rainbowfern.com

### Narrow the five service lines to two offers, one people track and one on-ramp

- **Offer A (flagship): "Codebase Map."** A fixed-scope engagement for small JS/TS/Python/.NET projects. You reverse-engineer an undocumented or AI-generated codebase into an architecture overview, dependency and data-flow diagrams, a risk list, and a prioritized "safe to change" plan. This is your most legible, most defensible offer, and the one the PPP story supports.
- **Offer B: "Small-business systems."** Ethical, self-hostable tooling (CRM, hosting, monitoring) plus a regulated-AI adoption review, with optional ongoing support. This is where the sliding scale and cooperative clients mostly live.
- **People track: Mentoring and career coaching** for underrepresented and non-traditional engineers, privacy-protected and sliding-scale. Give it its own page modeled on jacobian.org/help and Mandy Brown's fee page.
- **On-ramp: Bookable paid sessions** (your "vibe coder sessions"), framed as "Unstuck sessions": 60 or 90 minutes, pay at booking. This is the lowest-friction way to buy and a natural doorway into Offer A.
- **Ethical-AI advocacy** becomes a stance that runs through the writing and the "How I work" page, not a separate service line. Advisory requests can come in through Offer B. This is the narrowing you asked for.

### Sitemap (nav order in bold)

1. **Home** `/`
2. **Work with me** `/work` (overview of the offers, with links to `/work/codebase-map`, `/work/small-business`, `/sessions`)
3. **Mentoring** `/mentoring`
4. **Case studies** `/cases` (PPP; Rainbowfern's own self-hosted stack; one codebase-map example as soon as you have one)
5. **Writing** `/writing` (full posts on your own domain, with Substack as a syndication copy)
6. **About** `/about` (includes "How I work" and values)
7. **Contact** `/contact`

Footer only: `/pricing` (also linked from every offer page), `/now`, `/cv`, `/press` (bio and headshot), `/accessibility`, `/privacy`, RSS, `/llms.txt`, `sitemap.xml`.

### Homepage copy (suggested wording, in your voice; edit freely)

> **I help small teams understand the software and systems they already have — and make them safer to change.**
>
> I'm Alex Lapinski. I spent 15+ years at PayPal as an engineer, manager and architect, including as one of three architects on the PayPal Credit platform. Now I run Rainbowfern, a one-person consultancy in northwest Philadelphia, working remotely and occasionally in person nearby.
>
> **Ways to work with me**
> - **Codebase Map:** you have code nobody fully understands. I turn it into documentation, diagrams and a plan you can act on. *From $X.*
> - **Small-business systems:** ethical, self-owned tools and careful AI adoption, set up and supported. *From $X; sliding scale available.*
> - **Unstuck sessions:** 60 minutes, one problem, booked and paid online. *$X.*
> - **Mentoring:** for engineers from underrepresented and non-traditional paths. *Sliding scale.*
>
> [Book a free 30-minute intro call] · or email alex@rainbowfern.com

Keep the first paragraph literal. It does double duty: it is what a referred human skims, and it is what an AI summarizer will quote.

### Presenting the PPP proof point

Write it as a short case study using the same structure Hillel Wayne uses: context, constraint, what you did, outcome, and what it teaches.

- **Context:** the pandemic Paycheck Protection Program; small businesses needed loans processed under extreme time pressure.
- **Constraint:** two weeks from start to working system, inside a regulated financial company.
- **What you did:** your role, the architecture decisions, and the people work: who you had to align, what you cut, how you made it safe.
- **Outcome:** only figures you can verify and are allowed to disclose. If you can't publish volumes, say so ("volumes are confidential"). Saying so is itself a credibility signal.
- **Why it matters to a client:** "I've designed systems under regulatory, time and coordination pressure at the same time. That is what a messy codebase with a deadline feels like at small scale."

Tie it explicitly to systems thinking: the hard part wasn't only code. It was the technical, social and legal system around the code. That one paragraph does more for the "systems-thinking consultant" positioning than any abstract definition. Confirm with PayPal what you may disclose before publishing details.

### Systems-thinking positioning without abstraction

Follow Eduardo da Silva's model. Pair one stance sentence ("There are no silver bullets…") with concrete inputs and outputs.\[6\] For example: "I work from what's already there — the codebase, the architecture diagrams (if any), the meetings, and conversations with the people who keep it running — and I hand back documentation, diagrams and a plan people actually agree on." Name the domains (technical, social, legal) once, then show them through the case studies.

### Pricing and sliding scale

- Publish a single canonical `/pricing` page. Namaste Data's conflicting versions show the risk of having pricing in more than one place.\[4\]
- Use "from $X" for the fixed-scope offers and a fixed price for sessions. Jonathan Stark's school argues for fixed or value-based prices over hourly; Morgan and Stark agree that positioning has to come first.
- For the sliding scale, adapt Mandy Brown's honor-system language. Set a standard rate and a floor, promise the same quality at any rate, ask no income or identity questions, and invite better-resourced clients to pay above standard.\[3\]
- Optionally adapt Meena Das's budget tiers for organizations (e.g., cooperatives and orgs under $500K budget at the solidarity tier) and her fee-allocation transparency.\[4\]
- Calibration points from the sample:
  - Namaste Data: $120–$200+/hr and $900–$1,800+/day by client budget.\[4\]
  - Mandy Brown: $800/month standard, $300/month floor.\[3\]
  - PDX NPC: $50–$125/hr.\[5\]
  - These are different services, so use them for structure, not as rate benchmarks.
- State capacity honestly, e.g., "I take two solidarity-rate projects at a time; currently 1 open."

### Values statement: put it in "How I work," as practices

The values-forward sites that stay hireable state values as operating policies. Examples:

- "I'm neurodivergent and queer, and I build that into how I work: written agendas before calls, async-friendly communication, no surprise video."
- "I use AI tools as collaborators and tell you where and how."
- "I default to open-source, self-hostable, data-sovereign vendors and explain trade-offs when I don't."
- "Sliding-scale pricing for cooperatives and social-justice organizations."

Mandy Brown, Meena Das and Tatiana Mac each name systems of oppression directly and still sell to companies.\[3\]\[4\]\[25\] The working pattern is to be explicit about whom you prioritize, not about whom you exclude. "Anti-capitalist in spirit" lands better shown (pricing, fee allocation, open-source defaults) than stated. Whether to say it outright is a values decision; the evidence here can't settle it.

### Contact and booking flow (three doors, all on `/contact` and repeated at the end of each offer page)

1. **Free 30-minute intro call** (scheduler). Ask at most three optional questions: what's going on, timeline, and funding preference using prettyprettyprettygood's four options. Send a written agenda and confirmation, and offer a text-only option on request.
2. **Book an Unstuck session**: pay at booking via Stripe. This removes the back-and-forth for buyers who already know they want help.
3. **Plain email** for anyone who doesn't want to use a scheduler. Promise a response time ("within two working days") and keep it.

For mentees, allow a pseudonym and a non-work email, and state what you keep and delete. You use Calendly today; if open-source alignment matters, an open-source scheduler is worth evaluating, though I did not assess options in this research.

### Dual track: consulting plus job search

Keep `/cv` in the footer and link it once from About ("Looking for my résumé? It's here."). Include role titles, the PayPal Credit architecture role, PPP, Swift Financial and Razorfish, the Drexel degrees, a downloadable PDF, and an "Open to Technical Product Owner / architect roles" line. The trade-off: positioning advice (Morgan, Stark) implies that a prominent "also job-hunting" signal weakens a consulting offer, while recruiters need a fast path. The footer-plus-About placement serves both without the homepage carrying mixed messages. This is a judgment call, not a research finding.

### AI and agent legibility checklist

- **Semantic HTML.** One `<h1>` per page stating the offer, real `<nav>`/`<main>`/`<article>`, and descriptive link text. Astro static output suits this.
- **JSON-LD.** Use `Person` (Alex Lapinski, `jobTitle`, `alumniOf` Drexel, `knowsAbout`, `sameAs` Substack, LinkedIn, GitHub) and `ProfessionalService` (Rainbowfern LLC, `areaServed` remote plus the Philadelphia region, `founder`, offers with prices). Namaste Data's `knowsAbout` markup is a working example.
- **llms.txt.** Publish a short one linking your services, pricing, cases and CV pages. Set expectations accordingly:
  - SE Ranking (published 7 Nov 2025) found 10.13% adoption across ~300,000 domains and "no correlation between AI citations and LLMs.txt."
  - Limy logged 408 llms.txt requests out of 500M+ AI bot visits.\[37\]
  - Otterly logged 84 out of 62,100+.\[38\]
  - Ahrefs (Louise Linehan and Xibeijia Guan, 15 June 2026, 137,210 domains) found "97% of those files received zero traffic in May 2026."
  - Google Search Central's AI optimization guide (15 May 2026), in its "Mythbusting generative AI search" section, says you don't need machine-readable files or AI text files to appear in generative AI search. Days later, Chrome's Lighthouse added an experimental llms.txt audit, so Google's tooling is not fully consistent.
  - It is still worth shipping because coding agents, an audience you actually have, do read it. The same Ahrefs study found "19.5% of fetches came from named AI tools… GPTBot is top and Claude-Code is second." It costs you ten minutes.
- **Canonical writing on your own domain.** If your case studies live only on Substack, crawlers attribute the expertise to Substack's page about you rather than to rainbowfern.com.
- **robots.txt.** Make a deliberate choice about which AI crawlers you allow. Ethical-AI values may argue for blocking training crawlers while allowing search/answer crawlers. That is a values decision with a visibility cost.

## Anti-patterns to avoid

- **Abstract or visionary heroes** that delay the plain statement of what you do (seen on TechBetter). NN/g's research consistently shows that users who can't tell what an organization does leave or distrust it.\[34\]
- **Hype and AI-sounding copy:** "unlock," "leverage," "transform your business," "cutting-edge," tidy triads of abstractions, and testimonials about how life-changing you are. Your positioning depends on rigor, so write like an engineering design doc with warmth.
- **Long qualification forms** before any human contact. Philip Morgan warns specifically against long checklists on your site. Three optional questions is the ceiling.
- **Stale availability or stale offers.** A consulting page for work you no longer take, or "under renovation" features, quietly erodes trust. A dated `/now` page fixes this.
- **Navigation sprawl and heavy builders.** Namaste Data runs about 15 nav items on Wix with tag-manager scripts.\[7\] Keep 5–7 nav items, static HTML, no trackers. That is both an accessibility and a values signal.
- **Emoji in headings and buttons** (common on developer sites). Screen readers announce them, which is noisy and sometimes confusing.
- **Neurodivergent-unfriendly patterns:** autoplay or motion (respect `prefers-reduced-motion`), pop-up newsletter modals, countdowns or false scarcity, walls of undifferentiated text (use headings and short paragraphs as jvns.ca does), and phone-only contact.
- **Values-as-slogan.** Values stated without a mechanism (prices, policies, capacity) read as branding. Values stated with a mechanism read as integrity.
- **Bloat by service line.** Five equal-weight services spread across a homepage make referrers unable to summarize you. Positioning advice from Morgan and Stark is unanimous on narrowing, even where they differ on pricing.

## Caveats

- **Where the buyer evidence comes from.** The Hinge statistics come from surveys of professional-services buyers broadly, not specifically buyers of solo technical consultants. The NN/g findings concern About Us content on organizational sites.\[35\]\[39\] Both transfer well but not perfectly to a company of one.
- **Sample limits.** The sample has no verified fractional-CTO site. Some sites (Montalion, Soueidan, Roselli, Morgan) were assessed from partial pages, and frequency counts are lower bounds from what was observed, not full crawls.
- **Conflicting or unconfirmed details.** Namaste Data's rates page exists in conflicting versions.\[4\] I could not retrieve its "projects with care" page.
- **Snippet-only evidence.** Pricing details for wizardzines.com and the PDX NPC tier table come from search snippets rather than full fetches.
- **Gaps in the AI-crawler evidence.** The llms.txt studies are vendor-run (SEO and GEO tool companies), though they agree with each other and with Google's stated position. One agency reports OpenAI and Microsoft crawlers fetching llms.txt, so the picture isn't uniform.\[38\]
- **Advice from people who sell advice.** Jonathan Stark and Philip Morgan sell consulting advice. Their claims are experience-based rather than controlled research, and they disagree on emphasis: Stark leads with pricing, Morgan with specialization.
- **Your own judgment calls.** How explicit to be about anti-capitalist politics, whether to block AI training crawlers, and how prominently to signal the job search are values and strategy decisions. The evidence informs them but can't make them for you.

## Sources

1. [Trustworthiness in Web Design: 4 Credibility Factors - NN/G](https://www.nngroup.com/articles/trustworthy-design/)
2. [About](https://jvns.ca/about/)
3. [Fee model.](https://everythingchanges.us/coaching/fees)
4. [Nonprofit Consulting Pricing & Rates](https://www.namastedata.org/rates)
5. [Rates](https://pdxnpc.com/rates/)
6. [Consulting](https://esilva.net/consulting/)
7. [Collabs| Namaste Data](https://www.namastedata.org/collabs)
8. [Let’s talk.](https://everythingchanges.us/contact/)
9. [prettyprettyprettygood | Sliding-Scale Web Design for Good People](https://www.prettyprettyprettygood.org/)
10. [Consulting](https://www.hillelwayne.com/consulting/)
11. [About](https://www.hillelwayne.com/about/)
12. [Sponsor @nicoespeon on GitHub Sponsors · GitHub](https://github.com/sponsors/nicoespeon)
13. [SE Radio 602: Nicolas Carlo on Improving Legacy Code](https://se-radio.net/2024/02/se-radio-602-nicolas-carlo-on-improving-legacy-code/)
14. [Legacy Code: First Aid Kit - Change Messy Software Without Breaking It](https://understandlegacycode.com/first-aid-kit/)
15. [Ways I'm available to help - Jacob Kaplan-Moss](https://jacobian.org/help/)
16. [Diana Montalion's Speaker Profile @ Sessionize](https://sessionize.com/dianamontalion/)
17. [Domain-Driven Design Europe 2020](https://dddeurope.com/2020/speakers/diana-montalion)
18. [Management Training, Offsite Design, and Coaching Services | Wherewithall](https://wherewithall.com/services/)
19. [Now Live: The Complete Demystifying Management Program Digital Course](https://larahogan.me/blog/new-manager-video-training/)
20. [How Mandy Brown cultivates community with her newsletter](https://buttondown.com/blog/mandy-brown)
21. [mandy brown (@aworkinglibrary@mstdn.social) - Mastodon 🐘](https://mstdn.social/@aworkinglibrary)
22. [Meena Das](https://www.namastedata.org/about)
23. [TechBetter | Home](https://www.ravitdotan.com/)
24. [engineer, writer, speaker](https://www.tatianamac.com/)
25. [about me » Tatiana Mac](https://www.tatianamac.com/about)
26. [Press Kit](https://www.sarasoueidan.com/press-kit/)
27. [Contact — Adrian Roselli](https://adrianroselli.com/contact)
28. [Ready to get off the hourly hamster wheel? | Jonathan Stark](https://jonathanstark.com/)
29. [GUIDE: A Complete Guide To Specializing And Positioning An Independent Consulting Business - Books And Guides On Positioning, Point Of View, Small-Scale Research, And Lead Generation For Developers And Digital Agencies](https://philipmorgan.net/books-and-guides/specialization-guide/)
30. [FAQ](https://store.wizardzines.com/pages/faq)
31. [wizard zines: Bite Size zine pack!](https://wizardzines.com/zines/bite-size-pack/)
32. [Rainbow Forge, Queer Web Developer And Designer](https://rainbowforge.dev/)
33. [Services Offered by Rainbow Forge, A Queer Web Developer And Designer](https://rainbowforge.dev/services)
34. ['About Us' Information on Corporate Websites - User Research Findings](https://www.nngroup.com/articles/about-us-information-on-websites/)
35. [Presenting Company Information on Corporate Websites](https://www.nngroup.com/reports/about-us-presenting-company-information/)
36. [AI Equity Project releases 2026 report on nonprofit AI adoption, accountability, and community voice](https://www.namastedata.org/post/ai-equity-project-releases-2026-report-on-nonprofit-ai-adoption-accountability-and-community-voice)
37. [LLMs.txt in 2026: The Full Guide](https://limy.ai/blog/llms-txt-in-2026-the-full-guide)
38. [LLMs.txt: The Complete Guide for SEO and AI Search (2026)](https://derivatex.agency/blog/llms-txt-guide/)
39. [Sales - How Buyers Evaluate Professional Services Providers](https://www.marketingprofs.com/charts/2014/24457/how-buyers-evaluate-professional-service-providers)
