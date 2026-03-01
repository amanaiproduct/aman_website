# Personal Site Redesign Progress

## Status: V1 DEPLOYED

### Preview URL
https://amank-preview.surge.sh

### What's Built
- Single-page static HTML with WebGL dithering shader hero
- Simplex noise-based grid dithering with 4 density levels (dots, crosses, hollow boxes, solid blocks)
- Flowing animation with horizontal drift and wavy vertical movement
- Center fade for text readability in hero
- All 9 sections: Hero, About, Book, Featured, Courses, Talks, Writing, Open Source, Contact
- Sticky nav that appears on scroll
- Responsive layout
- Monospace typography (JetBrains Mono), uppercase aesthetic, cream background
- No em dashes

### File Location
`/Users/aman-remote/clawd/aman_website/preview/index.html`

### Design Decisions
- Used mix-blend-mode: screen on hero name for knockout effect against dithering
- Vignette edges on shader to frame the effect
- Data-table style layouts for talks and writing sections
- Grid cards for open source repos
- Company names as subtle pill row under about text

### Next Steps
- Get feedback on design
- Port to Next.js repo structure if approved
- Set up Vercel/custom domain deployment
