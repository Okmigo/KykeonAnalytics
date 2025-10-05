# Kykeon Analytics - Design System

## Design Philosophy

### Visual Language
**Scientific Precision Meets Human-Centered Design**
- Clean, clinical aesthetic reflecting laboratory precision
- Dark theme with strategic use of scientific blue and safety green
- Typography that balances technical authority with accessibility
- Data-first approach with clear information hierarchy

### Color Palette
**Primary Colors:**
- Background: #0B0D10 (Deep space black for scientific authority)
- Primary: #5B8CFF (Scientific blue for trust and precision)
- Secondary: #2FCB89 (Safety green for positive actions)
- Accent: #FFB020 (Warning amber for alerts)

**Semantic Colors:**
- Success: #2FCB89 (Safe substances, positive results)
- Warning: #FFB020 (Caution alerts, moderate risk)
- Danger: #F46363 (High risk substances, critical warnings)
- Info: #5B8CFF (Informational content, neutral data)

### Typography
**Display Font:** Inter (Clean, modern sans-serif for headings)
- H1: 48px, font-weight: 700, line-height: 1.2
- H2: 36px, font-weight: 600, line-height: 1.3
- H3: 24px, font-weight: 600, line-height: 1.4

**Body Font:** Inter (Consistent with display for cohesion)
- Body Large: 18px, font-weight: 400, line-height: 1.6
- Body Regular: 16px, font-weight: 400, line-height: 1.6
- Body Small: 14px, font-weight: 400, line-height: 1.5

**Monospace:** JetBrains Mono (For data, codes, technical information)
- Code/Data: 14px, font-weight: 400, line-height: 1.4

## Visual Effects & Animation

### Core Libraries Integration
1. **Anime.js** - Smooth micro-interactions and state transitions
2. **ECharts.js** - Interactive data visualizations and charts
3. **Splitting.js** - Advanced text animations for headings
4. **Typed.js** - Typewriter effects for dynamic content
5. **Splide.js** - Image carousels and content sliders
6. **p5.js** - Particle systems for background effects
7. **Shader-park** - Subtle background visual effects

### Animation Principles
**Micro-interactions:**
- Duration: 150-250ms for immediate feedback
- Easing: cubic-bezier(0.4, 0.0, 0.2, 1) for natural motion
- Hover states: Subtle scale (1.02x) and shadow elevation
- Loading states: Skeleton screens with pulse animation

**Page Transitions:**
- Fade-in animations for content sections
- Staggered reveals for data tables and cards
- Smooth scrolling with momentum
- Progressive image loading with blur-to-sharp effect

### Background Effects
**Primary Background:** Subtle particle system using p5.js
- Slow-moving molecular connections
- Low opacity (0.1) to maintain readability
- Responsive to user scroll and mouse movement

**Section Backgrounds:** Clean gradients and geometric patterns
- Consistent with dark theme aesthetic
- No competing visual noise
- Focus on content legibility

## Component Design System

### Cards & Containers
- Border radius: 8px for modern feel
- Box shadows: Layered shadows for depth
- Padding: 24px for comfortable content spacing
- Borders: 1px solid with low opacity for subtle definition

### Data Tables
- Zebra striping for row readability
- Sortable headers with clear indicators
- Responsive design with horizontal scroll
- Sticky headers for long tables

### Forms & Inputs
- Clean, minimal styling
- Clear focus states with primary color
- Real-time validation feedback
- Accessible error messaging

### Buttons & CTAs
- Primary: Solid background with hover elevation
- Secondary: Outlined with hover fill
- Destructive: Warning colors for dangerous actions
- Disabled: Clear visual feedback for unavailable states

## Layout & Grid System

### Grid Structure
- 12-column grid system with 24px gutters
- Responsive breakpoints: 320px, 768px, 1024px, 1440px
- Consistent 8px baseline grid for vertical rhythm
- Container max-width: 1200px for optimal reading

### Spacing Scale
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px
- Consistent application across all components
- Generous whitespace for scientific content clarity

## Accessibility & Performance

### Accessibility Standards
- WCAG 2.2 AA compliance
- 4.5:1 minimum contrast ratio for all text
- Keyboard navigation for all interactive elements
- Screen reader optimized data tables
- Focus indicators clearly visible

### Performance Optimization
- Lazy loading for images and heavy components
- Optimized asset delivery
- Minimal JavaScript for core functionality
- Progressive enhancement approach
- Fast initial page load (< 2.5s LCP)

## Brand Expression

### Scientific Authority
- Clean, precise visual language
- Evidence-based design decisions
- Professional color palette
- High-quality imagery and iconography

### Human-Centered Approach
- Warm, approachable tone despite technical content
- Clear information hierarchy
- Intuitive navigation and interaction patterns
- Empathetic messaging around harm reduction