---
name: Architectural Elegance
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#7d5806'
  on-secondary: '#ffffff'
  secondary-container: '#fdca72'
  on-secondary-container: '#775300'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#858383'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdeab'
  secondary-fixed-dim: '#f1bf68'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5f4100'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  title-md:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-caps:
    fontFamily: Outfit
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-md:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system expresses a refined, architectural approach to premium civil construction, Italian marble laying, and bespoke tile craft. It addresses high-net-worth homeowners, architects, and luxury property developers who demand precision masonry, immaculate finishes, and proven local prestige.

The aesthetic fuses **Architectural Modernism** with subtle **Luxury Tactility**:
- **Structured Precision:** Grounded in razor-sharp grid structures that echo geometric tile layouts, clean grout lines, and structural beams.
- **Warm Prestige:** Replaces sterile industrial tropes with a curated palette of deep charcoal, warm alabaster, and refined construction gold.
- **Master-Craft Credibility:** Visual balance and restrained typography convey decades of mastery, eliminating clutter in favor of confident, spacious layouts that let craftsmanship speak.

## Colors

The palette leverages high-contrast tonal interplay reminiscent of luxury interior architecture: honed marble against dark cast iron and warm brushed brass.

- **Primary (`#171717` - Charcoal Black):** Anchors primary typographic hierarchy, high-impact CTA containers, and commanding framing elements.
- **Secondary (`#C89A48` - Construction Gold):** Reserved for high-value interactions, ratings, trust badges, key call-to-actions, and precision accent rules. Never applied to large body copy areas.
- **Tertiary (`#262626` - Muted Slate):** Provides soft structural depth for dark-themed showcase cards, footers, and inverted layout bands.
- **Neutral (`#FAF9F6` - Alabaster):** The luminous foundation for viewports, preventing the harsh optical glare of pure `#FFFFFF` and giving imagery a warm, natural stone context.
- **Border & Surface Infill (`#EEEEEA`):** Defines subtle perimeter grout lines, divider rules, and low-contrast surface card fills.

## Typography

Typography establishes an explicit dialogue between architectural structure and human-scale legibility:

- **Outfit (Headlines & Labels):** Sharp, geometric letterforms emulate drafting schematics and modern architectural wayfinding. Uppercase labels use exaggerated tracking (`0.12em`) to demarcate technical specifications, category headers, and credibility markers.
- **Inter (Body & Data):** Neutral, robust grotesque ensures effortless readability across long-form renovation proposals, service checklists, and site reports.
- **Dynamic Scale:** Headlines compress aggressively on mobile breakpoints to preserve layout density and avoid awkward line breaks in Punjabi municipal titles and terminology.

## Layout & Spacing

Layouts follow an architectural modular grid reminiscent of precision stonework:

- **Grid Architecture:** Desktop views utilize a 12-column fluid grid constrained to a maximum content width of `1280px`. Tablet transitions to an 8-column layout, while mobile relies on a 4-column framework.
- **Proportional Rhythm:** Negative space mirrors structural margins found in architectural blueprints. Section intervals use generous `space-xl` and `margin` distances to give full-bleed project imagery breathing room.
- **Masonry Alignment:** Cards and project portfolios follow strict vertical alignment markers, avoiding staggered or floating baselines to reinforce the brand's core offering: millimeter-perfect tile and slab installation.

## Elevation & Depth

Visual hierarchy uses low-profile, tactile depth rather than floating, multi-colored drop shadows:

- **Ghost Framing & Low-Contrast Outlines:** Surfaces are primarily separated by crisp `1px` borders colored in `#EEEEEA` on light backgrounds and `#333333` on dark surfaces.
- **Tonal Layering:** Depth is conveyed by contrasting `#FAF9F6` (Alabaster ground) with `#FFFFFF` (elevated work cards) and `#171717` (focal anchor modules).
- **Subtle Architectural Shadow:** Hover states and floating quote cards employ an ultra-soft, low-opacity shadow tinted in charcoal: `0 8px 30px rgba(23, 23, 23, 0.06)`. This creates a soft, natural illumination effect akin to light washing over an interior tile wall.

## Shapes

The shape system honors structural stone, fired ceramics, and cut tile:

- **Crisp Rectilinear Focus:** Standard UI elements use `0.25rem` (`roundedness: 1`) corner rounding. This creates a soft bevel that mimics honed marble edges while maintaining sharp structural lines.
- **Pill Exception:** Trust badges, verified rating labels, and micro-status tags use fully rounded pill geometry to distinguish metadata badges from architectural content cards.
- **Image Treatments:** Project photography and case study hero blocks use precise `0.25rem` corners with optional `1px` inset outlines to emulate framed showcase work.

## Components

### Buttons
- **Primary Action (Call to Action / Book Consultation):** Filled `#171717` Charcoal background with `#FAF9F6` text and an optional `#C89A48` accent bar or hover background. Uses `Outfit 14px SemiBold` (`label-md`), `space-sm` vertical and `space-lg` horizontal padding, with a `0.25rem` radius.
- **Secondary (Luxury Quote / Portfolio):** Inset `#C89A48` border (`1.5px`), transparent background, `#171717` text. On hover, fills with `#C89A48` and shifts text to `#FAF9F6`.
- **Tertiary / Text Link:** Uppercase `label-caps` in `#171717` with a permanent `1px` underline in `#C89A48` spaced `4px` beneath the baseline.

### Cards & Project Showcases
- **Surface Construction:** Pure `#FFFFFF` fill on `#FAF9F6` ground, wrapped in a uniform `1px` solid `#EEEEEA` perimeter border.
- **Dark Inverted Cards:** `#262626` background, `#FFFFFF` headlines, `#C89A48` key figure indicators (e.g., "15+ Years", "500+ Luxury Slabs Fitted").
- **Spacing:** Inner padding of `space-lg` (desktop) and `space-md` (mobile).

### Credibility Indicators & Badges
- **Justdial 5.0 Rating Chip:** Pill-shaped enclosure, `#FAF9F6` fill with a `1px` border in `#C89A48`. Displays a metallic `#C89A48` star icon, `label-caps` rating text, and verified review counts in `#171717`.
- **Experience Seal:** Circular or pill emblem reading `15 YEARS OF MASTERY`, utilizing tracked uppercase typography and gold detailing.

### Form Inputs & Quotation Fields
- **Fields:** `#FFFFFF` background, `1px` solid `#EEEEEA` default border.
- **Focus State:** `1.5px` border transition to `#C89A48` with zero outer fuzzy glow.
- **Labels:** Floated above fields using `label-caps` in `#262626`.
- **Tile Material Selectors:** Grid-based selector cards that feature high-resolution tile finish previews (e.g., Bookmatch Italian Marble, GVT Vitrified, Granite Slab) with selected indicators delineated by a `#C89A48` corner marker.

### Checkboxes & Radios
- **Geometry:** `0.25rem` radius for checkboxes; circular for radio buttons.
- **Selected State:** `#171717` boundary filled with a centered `#C89A48` precision checkmark or solid pip.