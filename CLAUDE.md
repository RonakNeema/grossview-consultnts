@AGENTS.md

# GrossView Consultants - Project Context

## Project Overview
GrossView Consultants is a **static marketing website** for a real estate KPO and outsourcing firm specializing in property accounting, real estate bookkeeping, and financial analysis. The site showcases their comprehensive services, software expertise across 6 platforms, and global support for property management companies and real estate professionals.

## Tech Stack
- **Framework**: Next.js 16.2.1 (App Router)
- **React**: 19.2.4
- **Styling**: Tailwind CSS 4 with PostCSS
- **TypeScript**: 5.x with strict mode
- **Font**: Inter (via `next/font/google`)
- **Deployment**: Static export to GitHub Pages with basePath `/grossview-consultnts`

## Project Structure
```
/
├── app/
│   ├── page.tsx                      # Main landing page (single-page site)
│   ├── layout.tsx                    # Root layout with metadata
│   ├── globals.css                   # Global styles, CSS vars, Tailwind
│   ├── favicon.ico
│   ├── lib/
│   │   └── utils.ts                  # getImagePath() utility for basePath handling
│   └── components/
│       ├── Navigation.tsx            # Sticky nav with hamburger menu (mobile)
│       ├── ContactForm.tsx           # Modal contact form with multi-select services
│       ├── ScrollToTop.tsx           # Auto-scroll to top on page load
│       └── README.md                 # Component documentation
├── public/
│   └── images/
│       ├── logo.jpeg                 # Cropped company logo (705x698px)
│       ├── logo-original.jpeg        # Original logo backup
│       ├── cover photo.jpeg
│       ├── yardi-logo.png
│       ├── appfolio-logo.png
│       ├── quickbooks-logo.png
│       ├── entrata-logo.png
│       ├── buildium-logo.png
│       └── realpage-logo.png
├── .github/workflows/
│   └── nextjs.yml                    # GitHub Pages deployment
├── next.config.ts                    # Static export + basePath config
├── tsconfig.json                     # TypeScript strict mode
├── eslint.config.mjs                 # ESLint + Next.js rules
└── postcss.config.mjs                # PostCSS + Tailwind
```

## Key Commands
```bash
npm run dev     # Start dev server on port 3001
npm run build   # Build static export to /out
npm run start   # Production server on port 3001
npm run lint    # Run ESLint
```

## Design System

### Colors (CSS Variables in globals.css)
- `--primary`: #1e3a5f (dark navy blue)
- `--secondary`: #2d4a6f (medium navy)
- `--accent`: #e91e8c (magenta/pink)
- `--purple`: #7c3aed (purple)
- `--gradient-start`: #e91e8c → `--gradient-end`: #7c3aed

### Custom Utilities
- `.gradient-text` - Gradient text effect (pink to purple)
- `.gradient-bg` - Gradient background (pink to purple)

## Site Sections (in page.tsx)
1. **Navigation** - Sticky header with logo and nav links, hamburger menu on mobile
2. **Hero** - Main headline emphasizing Real Estate Bookkeeping, Property Accounting & Financial Analysis
3. **Real Estate Fields** - 4 sectors: Commercial RE, HOA, Multifamily, Residential
4. **Services** - 10 comprehensive service cards + featured Yardi Implementation + Financial Analysis sections
5. **Software Expertise** - 6 platforms with logos: Yardi, AppFolio, QuickBooks, Entrata, Buildium, Real Page
6. **About** - KPO positioning, global support, skilled team, structured workflows
7. **Contact/CTA** - Email and call buttons
8. **Contact Form** - Modal form with multi-select services dropdown
9. **Footer** - Logo, services list, software platforms, contact info

## Services Offered
1. **Bookkeeping** - Accurate and timely bookkeeping services
2. **Property Accounting** - Full-service property accounting
3. **Bank Reconciliation** - Monthly reconciliation services
4. **Invoice Processing** - Efficient AP workflow management
5. **Accounts Payable** - Complete vendor payment management
6. **Accounts Receivable** - Cash flow optimization and collections
7. **Lease Administration & Abstraction** - Lease lifecycle management
8. **CAM Reconciliation** - Tenant billing and expense allocation
9. **Financial Reporting** - Comprehensive property performance reports
10. **Financial Analysis** - Model Creation, Deal Underwriting, Asset Management
11. **Yardi Implementation & Data Transition Support** - Full setup and migration

## Software Expertise
India-based team with deep expertise in:
1. **Yardi** - Full implementation, training, and ongoing support
2. **AppFolio** - Complete setup and bookkeeping services
3. **QuickBooks** - Integration and real estate accounting
4. **Entrata** - Expert configuration and property management
5. **Buildium** - Setup, training, and comprehensive support
6. **Real Page** - Implementation and optimization

## Deployment Configuration
- **Output**: Static export (`output: "export"` in next.config.ts)
- **Base Path**: `/grossview-consultnts` in production (GitHub Pages)
- **Images**: Unoptimized for static export, paths use `getImagePath()` utility
- **CI/CD**: GitHub Actions workflow deploys to GitHub Pages on push to `main`
- **URL**: https://ronakneema.github.io/grossview-consultnts/

## Real Estate Fields Served
- **Commercial Real Estate** - Office buildings, retail centers, commercial properties
- **HOA** - Homeowners associations and community management
- **Multifamily** - Apartment complexes and multifamily residential
- **Residential** - Single-family homes and residential real estate

## Company Positioning
- **Real estate KPO and outsourcing firm**
- **Global support** for property managers and real estate businesses
- **8+ years** of industry experience
- **Skilled team** and structured workflows
- Strong industry knowledge and platform expertise
- Cost savings: **Save up to 65%**
- **Scalability** based on client requirements
- Focus on high-value business growth opportunities

## Recent Updates (Session: Image Deployment & Mobile Optimization)

### 1. GitHub Pages Image Loading Fix
**Problem**: Images not loading on deployed site due to basePath not being injected into image src attributes
**Solution**:
- Created `/app/lib/utils.ts` with `getImagePath()` utility function
- Function prepends `/grossview-consultnts` in production, returns plain path in development
- Updated Navigation.tsx and page.tsx to use `getImagePath()` for logo references
- Build output verified - images now correctly include basePath in generated HTML

### 2. Logo Cropping
- Original logo was 1024x1024px with excessive whitespace
- Used Python Pillow to auto-crop whitespace
- Reduced to 705x698px (31% size reduction)
- Updated Navigation dimensions to 240x238px
- Backup saved as logo-original.jpeg

### 3. Contact Form Implementation
**Features**:
- Modal popup with gradient header and close button
- Fields: Name, Business, Phone, Timezone, Services (multi-select), Business Details, Comments
- Multi-select dropdown for 12 services (stays collapsed, shows selected service names)
- Form reset on cancel
- mailto link generation with URL encoding
- Validation: requires at least one service selection

### 4. Mobile Responsiveness Fixes

#### Navigation
- Hamburger menu on mobile (sm breakpoint)
- Logo properly sized and visible
- Sticky positioning with z-50
- Scroll padding to prevent content hiding behind nav

#### Contact Form
- Modal positioning fixed: uses `min-h-full flex items-center justify-center p-4`
- Header always visible at top with "Request a Consultation" title
- Close button (X) increased to w-7 h-7 for better visibility
- Form fields responsive with proper touch targets
- Labels: text-sm on mobile
- Inputs: text-base for readability
- Button layout: stacked on mobile, side-by-side on desktop

#### Page-level
- Scroll padding: `scroll-padding-top: 6rem` prevents nav from covering anchored content
- Added ScrollToTop component: automatically scrolls to top on page load

### 5. Component Structure
```
/app/components/
├── Navigation.tsx      # Logo + nav links + hamburger menu
├── ContactForm.tsx     # Modal contact form
├── ScrollToTop.tsx     # Auto scroll to top on mount
└── README.md          # Component documentation
```

## Key Implementation Details

### Image Path Handling
```typescript
// app/lib/utils.ts
export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/grossview-consultnts' : '';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

// Usage in components:
<Image src={getImagePath("/images/logo.jpeg")} ... />
```

### Mobile Responsive Breakpoints
- `sm`: 640px (mobile - hamburger menu, single column forms)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop - multi-column layouts)

### Contact Form Modal Structure
- Outer: `fixed inset-0 overflow-y-auto` (scrollable backdrop)
- Inner wrapper: `min-h-full flex items-center justify-center p-4` (centers modal)
- Modal: `bg-white rounded-xl shadow-2xl max-w-2xl` (fixed width, responsive width)

## Development Notes
- Single-page static site - all content in `app/page.tsx`
- Tailwind CSS 4 with `@theme inline` syntax
- Uses Next.js Image component with `unoptimized: true`
- Smooth scroll via `scroll-behavior: smooth` in globals.css
- Dev server: port **3001**
- All styling: Tailwind utility classes
- Colors: CSS variables `text-[var(--primary)]`
- Navigation: hash-based anchors (`#services`, `#contact`)

## Important Conventions
- Image paths always use `getImagePath()` utility for GitHub Pages compatibility
- Modal/form components are 'use client' (client-side state)
- Responsive classes use Tailwind breakpoints (sm:, md:, lg:)
- All form fields include proper labels and validation
- Close buttons use aria-label for accessibility
- Gradient effects use `.gradient-text` and `.gradient-bg` utilities
