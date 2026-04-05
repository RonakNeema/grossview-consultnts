# Component Structure

This directory contains reusable React components for the GrossView Consultants website.

## Components

### Navigation.tsx
- **Mobile-responsive navigation** with hamburger menu
- Sticky header that stays at top on scroll
- Mobile menu opens/closes with smooth animation
- Auto-closes menu when clicking links
- Responsive logo sizing

### ContactForm.tsx
- **Comprehensive contact form** with client-side validation
- Collects: Name, Business Name, Business Details, Service Needed, Contact Number, Best Time to Call, Timezone, and Comments
- Service dropdown with all 11 GrossView services
- Timezone selector for scheduling calls
- Required field validation (marked with *)
- Mobile-responsive 2-column layout on desktop, stacks on mobile
- Opens user's email client with pre-filled data (mailto)
- Success message confirmation
- Includes quick contact links (email & phone) below form

## Mobile Responsiveness

The entire website is fully mobile-responsive using Tailwind CSS breakpoints:

- **sm**: 640px and up (mobile landscape / small tablets)
- **md**: 768px and up (tablets)
- **lg**: 1024px and up (desktops)

### Responsive Features:
1. **Navigation**: Hamburger menu on mobile, full nav on desktop
2. **Hero Section**: Text sizes adjust, padding optimized for mobile
3. **Real Estate Fields**: 4-column on desktop → 2-column on tablet → 1-column on mobile
4. **Services Grid**: 3-column → 2-column → 1-column
5. **Software Logos**: Flex-wrap allows logos to stack on smaller screens
6. **About Section**: 2-column layout → single column on mobile
7. **Footer**: 4-column grid → stacked columns on mobile
8. **All CTAs and buttons**: Touch-friendly sizing on mobile

## Future Component Extraction

Additional components that could be extracted from page.tsx:
- HeroSection.tsx
- RealEstateFields.tsx  
- ServicesSection.tsx
- FinancialAnalysis.tsx
- SoftwareExpertise.tsx
- AboutSection.tsx
- CTASection.tsx
- Footer.tsx

This would make the codebase more modular and easier to maintain.
