---
title: "feat: Visual Identity Explorations for amank.ai"
type: feat
status: active
date: 2026-02-28
---

# Visual Identity Explorations for amank.ai

## Overview

Create 3 distinct visual explorations of Aman's personal site, deployed as a single page with a toggle switcher on Surge. Purpose: let Aman experience different design directions with real content before committing to a redesign.

## User Personas & Stories

### Who visits amank.ai?
1. **PM from Lenny's podcast** — wants to learn more, maybe take a course. Needs: credibility signals, clear path to courses/writing
2. **Conference organizer** — evaluating a speaker. Needs: credentials fast, video samples, contact
3. **AI practitioner** — discovered his writing. Needs: subscribe, explore more content
4. **Student** — considering Maven courses. Needs: social proof, course ratings, free samples
5. **Recruiter** — checking him out. Needs: resume highlights, scope of influence

### What should visitors FEEL?
"This person is a serious builder who also teaches generously. I trust their expertise and want to learn from them."

## Research Synthesis

### Brand DNA (from research)
- Aman's aesthetic instinct: monospace, dark, warm accents. Already chose Instrument Serif + Space Mono + coral #FF6B35 for his carousel work
- He's a **practitioner-educator**: builds real things AND teaches. Not a guru, not a consultant
- Current site communicates "builder who codes" well but lacks human warmth and clear conversion paths
- The O'Reilly book is the highest-credibility asset but sits below open source repos

### Design Principles (all 3 explorations must follow)
1. **Content-forward** — the work IS the brand. No decorative fluff
2. **Book elevated** — O'Reilly book should be prominent (it's the #1 credibility asset)
3. **Clear CTA hierarchy** — Subscribe should have a value prop, not just a button
4. **Builder credibility** — technical signals (monospace accents, code-like elements)
5. **Educator warmth** — approachable enough that a junior PM feels welcome

### Current Site Gaps to Address
- No headshot (hard for conference organizers, course buyers)
- Subscribe CTA has no value prop
- No "start here" for new visitors
- Book buried below open source
- No testimonials or social proof beyond ratings

## The 3 Explorations

### V1: "Midnight Workshop" — Dark Technical Builder

**User story served best:** AI practitioner, technical PM, developer exploring AI PM content
**Emotion:** "This person lives in the terminal AND writes beautifully"

**Design rationale:**
- **Colors:** Deep charcoal (#0F1117) base, electric teal (#00D4AA) accent, warm gray text (#B8B8B8). Dark mode signals technical credibility. Teal is distinctive (avoids green=hacker cliche)
- **Typography:** IBM Plex Mono for headers (technical, IBM heritage = enterprise credibility), Inter for body (legibility in dark mode). NOT JetBrains Mono (that's the current site)
- **Layout:** Terminal-inspired sections with `$` prompts and typing animations. Sections flow like command output. Dense information, minimal chrome
- **Animation:** Typing effect on hero tagline. Subtle cursor blink. Smooth fade-in on scroll
- **Hero treatment:** Dark full-bleed with terminal-style intro. Name rendered as if typed
- **What makes it memorable:** The whole site feels like an elegant terminal session. Code-comment section labels (`// SECTION`) carried forward but in context of a dark terminal

### V2: "The Editorial" — Magazine/Publication Quality

**User story served best:** Conference organizer, PM from Lenny's, someone evaluating thought leadership
**Emotion:** "This is someone who belongs in The New Yorker or Wired"

**Design rationale:**
- **Colors:** Warm cream (#FAF7F2) background, rich burgundy (#722F37) accent, charcoal (#2D2D2D) text. Wine/burgundy = sophistication, authority, warmth. NOT cold blue corporate
- **Typography:** Playfair Display for headlines (editorial authority, beautiful italic), DM Sans for body (modern, readable, warm). Serif headlines = magazine quality
- **Layout:** Magazine grid with pull quotes, drop caps on first paragraph, generous whitespace. Asymmetric hero. Content in editorial columns
- **Animation:** Subtle parallax on scroll. Elegant hover states. No flashy effects — restraint IS the design
- **Hero treatment:** Large editorial headline with Aman's tagline as a pull quote. Asymmetric layout
- **What makes it memorable:** Feels like a beautifully designed feature article. Every section reads like a curated editorial spread

### V3: "Signal" — Modern Bold with Aman's Own Palette

**User story served best:** Student evaluating courses, newsletter subscriber, someone who needs energy and clarity
**Emotion:** "This person is at the cutting edge and makes complex things feel exciting"

**Design rationale:**
- **Colors:** Dark base (#0D0D0D), coral accent (#FF6B35) — Aman's own chosen palette from his carousel. Deep navy (#1A1B3A) for cards. This is HIS palette, validated by his own design choices
- **Typography:** Instrument Serif for headlines (he already uses this), Space Grotesk for body. His actual preferred fonts elevated to a bolder treatment
- **Layout:** Bold oversized headlines, card-based sections with subtle glassmorphism, gradient borders on hover. Modern SaaS-inspired but personal
- **Animation:** Gradient border animations, smooth card hover lifts, staggered section reveals on scroll
- **Hero treatment:** Oversized name with coral gradient accent. Bold, confident, modern
- **What makes it memorable:** It's Aman's actual aesthetic instincts turned up to 11. His carousel palette and fonts, but applied to a full site with premium interactions

## Shared Elements (All 3 Versions)

- Floating pill-shaped version toggle (top-right corner)
- Smooth crossfade transition between versions (300ms)
- All content from current site (talks, courses, writing, book, open source, etc.)
- Mobile responsive
- Section order optimized: Hero → About → Book → Featured → Courses → Open Source → Talks → Writing → Contact
- headshot.jpg from /Users/aman-remote/clawd/aman_website/public/headshot.jpg included where appropriate

## Technical Spec

- Single index.html, pure HTML/CSS/JS
- Google Fonts CDN for typography
- CSS custom properties for theme switching
- LocalStorage to remember selected version
- Deploy to: aman-explorations.surge.sh
- Source: /Users/aman-remote/clawd/aman_website/explorations/index.html

## Acceptance Criteria

- [ ] 3 visually distinct versions, each with different layout, typography, colors, animations
- [ ] Toggle switcher works smoothly with crossfade
- [ ] All content sections present in each version
- [ ] Mobile responsive (test at 375px width)
- [ ] Each version feels like a real, shippable site
- [ ] Deployed and accessible at aman-explorations.surge.sh
- [ ] Visual QA: screenshot each version, verify no layout bugs
- [ ] Book section elevated above open source in all versions

## Quality Gates

1. Build all 3 versions
2. Deploy to Surge
3. Screenshot each version via browser
4. QA check: typography loading, color consistency, layout, animations, mobile
5. Fix issues found
6. Redeploy + re-screenshot
7. Verify all acceptance criteria met
