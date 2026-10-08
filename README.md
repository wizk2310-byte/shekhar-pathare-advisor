# Shekhar Pathare Realty

Build a premium, luxury-feeling single-page real estate website for "Shekhar Pathare", a real estate broker/advisor based in Pune, India.

DESIGN DIRECTION (very important — this defines the entire feel):
- Palette: warm off-white/cream background (e.g. #F7F4EE), deep charcoal text (#2B2826), and a single gold accent (#B8964A or similar muted antique gold) used sparingly for CTAs, dividers, icons, and hover states. No other colors. No blue/orange corporate real-estate clichés.
- Typography: an elegant serif (like Playfair Display or Fraunces) for headlines to signal premium/trust, paired with a clean modern sans (like Inter or Manrope) for body text and UI.
- Generous whitespace, restrained subtle animations (fade/slide on scroll is fine), no loud gradients, no stock "real estate template" look. Think boutique advisory / private wealth aesthetic, not a listings portal.
- Rounded-but-minimal cards, thin gold-line dividers, lots of breathing room between sections.

BUSINESS CONTEXT — Shekhar runs two distinct lines of business, keep them visually and structurally separate:

1. LEASING (rents out spaces) — categories: Shops, Offices, Showrooms, Banks, Clothing Stores, Hospitals, Plots, Sports Facilities
2. SALES (sells property) — categories: Pre-Leased Properties, Flats/Apartments, ROI Properties (investment properties)

PAGE STRUCTURE:
1. Hero section — "Shekhar Pathare" name as the brand, a premium tagline positioning him as a trusted Pune real estate advisor for both leasing and sales, primary CTA button "Enquire on WhatsApp" (placeholder number +91 98765 43210), secondary CTA "Call Now"
2. A clear two-path navigation/intro section right under hero: "Spaces for Lease" vs "Properties for Sale" — two large clickable panels/cards that scroll down to their respective sections. These two business lines should never blend into one grid.
3. LEASE section: section heading "Spaces for Lease", then a clean 8-item icon grid for Shops, Offices, Showrooms, Banks, Clothing, Hospital, Plots, Sports — each as a card with an icon, the category name, and a small "Available" tag and placeholder short description.
4. SALE section: section heading "Properties for Sale", then 3 premium feature cards: Pre-Leased Property (passive income angle), Flats (home-buyer angle), ROI Properties (investor angle) — each with a short value-prop line.
5. Trust/About section: placeholder content about years of experience, number of properties handled, areas served in Pune, with a few stat counters (placeholder numbers like "10+ Years", "200+ Properties", "Pune-wide Coverage").
6. Contact section: WhatsApp click-to-chat button, phone number, email placeholder, and a simple enquiry form (Name, Phone, Interested In dropdown with the categories above, Message). Include a placeholder Pune map area.
7. Simple footer with name, tagline, and placeholder social links.

Use placeholder text clearly marked as placeholder where real content (photos, logo, testimonials, exact numbers) isn't available yet — but keep the layout fully premium and demo-ready, not looking unfinished. Make it fully responsive and mobile-friendly since client will likely view on phone too.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://shekhar-pathare-advisor.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5ddafcda-929f-47ae-8790-b7416e60bb36).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
