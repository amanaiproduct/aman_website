# Aman Khan Website Explorations — Design Plan

## Who Visits amank.ai?

### Personas & Their Jobs-to-Be-Done
1. **PM from Lenny's podcast** — "Who is this guy? Is he legit? Should I take his course?" → Needs: credentials, social proof, easy path to courses/subscribe
2. **Conference organizer** — "Can I book him? What has he spoken at?" → Needs: talks list, topics, credibility signals fast
3. **AI practitioner** — "This writing is good, what else has he written?" → Needs: writing archive, subscribe CTA, depth of content
4. **Recruiter/hiring manager** — "What's his background?" → Needs: career trajectory, impact signals, professional presence
5. **Maven course student** — "Is this course worth $500+?" → Needs: ratings, who else teaches with him, O'Reilly book = authority

**Primary CTA across all versions: SUBSCRIBE (to AI Product Playbook)**
**Secondary CTAs: Course enrollment, Book**

---

## V1: "Midnight Terminal" — Dark Mode Hacker

### Best serves: AI practitioners (#3) and PMs who code (#1)
These users self-identify as technical. A terminal aesthetic says "this person is one of us — he ships, not just talks."

### Emotion: Respect + Intrigue
"This person is deeply technical AND a product leader. Rare combo."

### Design Rationale

**Typography: IBM Plex Mono**
- Why: More refined than JetBrains Mono but still monospace. IBM Plex has wider counters and better readability at body sizes. It says "I care about craft" vs raw hacker energy.
- Headers in IBM Plex Mono Bold, body in Regular.

**Color: Deep navy (#0a0e1a) + Electric cyan (#00e5ff) + Muted green (#6fca7a)**
- Navy over pure black because pure black is harsh and amateur. Navy has depth.
- Cyan accent = energy, precision, technical confidence. Not green (too Matrix cliché).
- Muted green for secondary elements (dates, labels) — evokes terminal without being on-the-nose.

**Layout: Vertical terminal flow**
- Single column, tight. Content feels like scrolling through command output.
- Section headers styled as CLI prompts: `$ aman --section talks`
- Items feel like log entries or command responses.
- No cards or grids — pure vertical flow like a terminal session.

**Animations:**
- Typing cursor blink on hero name — purposeful, establishes the metaphor immediately.
- Subtle scanline overlay — very faint, atmospheric not gimmicky (opacity 0.03).
- Section fade-in on scroll — content "renders" as you scroll down.

**What makes it memorable:** The hero feels like you've SSH'd into Aman's brain. The entire page is one continuous terminal session.

**Primary CTA treatment:** Subscribe button styled as a command: `$ subscribe --newsletter` with a blinking cursor.

---

## V2: "Editorial Luxe" — Magazine/Editorial

### Best serves: Conference organizers (#2) and recruiters (#4)
Authority and gravitas. This design says "thought leader" before you read a word. Conference organizers need to justify their speaker budget — this design makes Aman look like a keynote, not a breakout session.

### Emotion: Trust + Aspiration
"This person is an authority. I want to learn from them."

### Design Rationale

**Typography: Cormorant Garamond (headers) + DM Sans (body)**
- Why Cormorant: It's a free Garamond with gorgeous italics and high contrast strokes. It screams editorial quality — think NYT Magazine or Monocle. It has personality that Playfair lacks.
- Why DM Sans body: Geometric, clean, high x-height for readability. Doesn't compete with the serif headers. Modern enough to not feel stuffy.

**Color: Warm ivory (#FAF7F2) + Deep wine (#722F37) + Charcoal (#2a2a2a)**
- Ivory over white: warmth, paper feel, approachability despite the formality.
- Wine/burgundy: sophistication, maturity, depth. It's the color of leather-bound books and good restaurants. Communicates "seasoned professional."
- Charcoal body text (not black): easier on the eyes, more editorial.

**Layout: Editorial grid with intentional asymmetry**
- Hero: massive name in Cormorant with a thin rule underneath. Lots of whitespace. Drop cap on the bio.
- Two-column grid for featured/courses sections — magazine spread feel.
- Pull quotes extracted from his writing — breaks up the flow like a real magazine.
- Generous margins (120px+ on desktop) — whitespace IS the luxury.

**Animations:**
- Minimal and purposeful. Fade-in on scroll with slight upward drift (8px).
- Hover on links: wine-colored underline slides in from left.
- No flashy effects — restraint IS the animation philosophy here.

**What makes it memorable:** The typography. One look and you know this isn't a template. The Cormorant headers at large sizes are genuinely beautiful and rare on the web.

**Primary CTA treatment:** Elegant "Subscribe to the newsletter" with an arrow, wine-colored. Understated but clear.

---

## V3: "Neon Gradient" — Modern/Bold

### Best serves: PMs considering courses (#1, #5) and students
This is the most "tech product" of the three. It looks like a modern SaaS landing page — which is exactly what course students expect. It communicates "cutting edge" and "worth paying for."

### Emotion: Excitement + Energy
"This person is at the frontier. I need to keep up."

### Design Rationale

**Typography: Clash Display (headers) + Satoshi (body)** — from Fontshare (free)
- Why Clash Display: Geometric display sans with character. The 'K' and 'A' have distinctive cuts. It's bold without being Heavy. Perfect for oversized hero text.
- Why Satoshi: Clean geometric sans that pairs well. Better than Inter/DM Sans — slightly warmer with more personality in the 'g' and 'a'.
- Fallback to system sans if Fontshare CDN is slow.

**Color: Near-black (#0c0c0c) + Gradient (coral #FF6B6B → violet #845EC2 → electric blue #00C9FF)**
- Dark base: makes the gradients pop. Creates "app" feel vs "website" feel.
- Coral-to-violet gradient: energetic, modern, but not the cliché purple-to-pink. The coral grounds it in warmth (Aman's personality), violet adds depth.
- Used sparingly: gradient on borders, hover states, hero accent. Not everywhere — that's amateur.

**Layout: Card-based with glassmorphism**
- Hero: full-width dark with oversized Clash Display name, gradient text on tagline.
- Content in frosted-glass cards (backdrop-filter: blur) with subtle gradient borders.
- Grid layout: 2-3 columns for courses/talks. Dense but organized.
- Cards have depth via subtle shadows and border gradients.

**Animations:**
- Gradient border animation on cards (slow rotation via conic-gradient + animation).
- Hero text: gradient shift animation (background-position moving).
- Hover on cards: slight scale + glow effect.
- Staggered entrance animations on scroll.

**What makes it memorable:** The glassmorphism cards with animated gradient borders. It looks like a premium product landing page, not a personal site. This is the version that makes people say "who designed this?"

**Primary CTA treatment:** Gradient-bordered button with glow effect on hover. Unmissable.

---

## Content Hierarchy (All Versions)

1. **Hero** — Name + tagline + Subscribe CTA (this is the #1 action)
2. **About** — One paragraph, establishes credibility
3. **Book** — O'Reilly = instant authority signal. Elevated in all versions.
4. **Courses** — Revenue driver, social proof via ratings
5. **Featured** — Lenny's = massive credibility for PM audience
6. **Talks** — Depth of speaking experience
7. **Writing** — Content library, drives subscribe
8. **Open Source** — Technical credibility
9. **Contact** — Standard footer-level

Note: I'm moving Open Source lower than the original site. For most visitors, the book/courses/featured carry more weight. OSS matters for technical credibility but isn't the primary draw.

---

## Toggle Design
- Floating pill in bottom-right corner
- Three options: "Terminal" / "Editorial" / "Neon"
- Semi-transparent background with blur
- Smooth 400ms fade transition between versions
- Persists scroll position on switch
- Z-index above everything
