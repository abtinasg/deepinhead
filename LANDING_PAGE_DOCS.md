# Deepin Landing Page

A premium enterprise landing page for Deepin's flagship products: **Deepin Finance** and **Deepin Research**, plus the shared identity layer **Deepin ID**.

## Design System

### Color Palette
- **Base**: `#0B0F14` (dark charcoal, not pure black)
- **Surfaces**: `#111827` / `#0F172A`
- **Text**: `#E5E7EB` (primary), `#94A3B8` (muted)
- **Accent Orange** (Finance): `#F59E0B`
- **Accent Blue** (Research): `#60A5FA`

### Typography
- **Font**: Inter (modern neo-grotesk)
- **Headline**: 64–80px
- **Subhead**: 18–20px
- **Body**: 15–16px
- Generous line-height, crisp rendering

### Layout
- 12-column grid system
- Max width: 1200–1280px
- Section paddings: 96–140px (py-24 to py-40)

### Visual Style
- Dark charcoal base with soft radial gradients
- Subtle noise texture overlay
- Thin 1px dividers
- Glassy cards with backdrop blur
- Restrained glow effects
- Lots of whitespace

## Page Structure

### 1. Hero Section
- Large headline with italic emphasis on "independent"
- Two CTAs: Primary (Open Finance), Secondary (Explore Research)
- Product preview module showing Finance UI and Research UI
- Three proof points below CTAs

### 2. Products Overview
- Two glassy cards for Finance and Research
- Clear differentiation with accent colors
- Hover effects with subtle glows

### 3. Deepin Finance Section
- **Light surface** (white background) for contrast
- Left: Feature descriptions with icons
- Right: Portfolio dashboard preview
- Institutional-grade metrics showcase

### 4. Deepin Research Section
- **Dark surface** for consistency
- Right: Content descriptions
- Left: Latest papers list module with tags
- Methodology-focused copy

### 5. Ecosystem Section
- Visual flow: Deepin → Deepin ID → Products
- Explanation of how components connect
- Privacy by design messaging

### 6. Principles Section
- Three principle cards:
  - Methodology over marketing
  - Clarity over speed
  - Long-term by design
- Dark surface with gradient spotlights

### 7. Footer
- Resources and company links
- Security & Privacy note (prominent)
- Legal links

### 8. Navbar
- Sticky with blur background on scroll
- Products dropdown (Finance, Research)
- Links: Research, Approach, Resources
- Right: Sign in + CTA "Open Finance"

## Key Features

### Responsive Design
- Desktop-first with mobile breakpoints
- Grid layouts adapt to smaller screens
- Touch-friendly interactive elements

### Smooth Interactions
- Scroll-based navigation
- Hover states with subtle transitions
- Glassy card effects
- Gradient overlays

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Focus states on interactive elements
- Sufficient color contrast

## Copy Tone

- Calm and precise
- Non-marketing, non-hype
- Emphasis on methodology and clarity
- Professional yet approachable
- Focus on long-term value

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Components

- `Hero.tsx` - Hero section with product previews
- `Navbar.tsx` - Sticky navigation with dropdown
- `ProductsOverview.tsx` - Two-column product cards
- `FinanceSection.tsx` - Light surface Finance showcase
- `ResearchSection.tsx` - Dark surface Research showcase
- `EcosystemSection.tsx` - System architecture diagram
- `PrinciplesSection.tsx` - Three principles cards
- `Footer.tsx` - Footer with security note
- `Logo.tsx` - Brand logo component

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Typography**: Inter font family
- **Icons**: Lucide React
- **Language**: TypeScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Deepin. All rights reserved.
