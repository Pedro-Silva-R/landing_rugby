---
name: Neobrutalist Chile Rugby
colors:
  surface: '#1f0f0e'
  surface-dim: '#1f0f0e'
  surface-bright: '#493432'
  surface-container-lowest: '#190a09'
  surface-container-low: '#281716'
  surface-container: '#2d1b1a'
  surface-container-high: '#382524'
  surface-container-highest: '#44302e'
  on-surface: '#fcdbd8'
  on-surface-variant: '#e6bdb9'
  inverse-surface: '#fcdbd8'
  inverse-on-surface: '#3f2b2a'
  outline: '#ad8885'
  outline-variant: '#5d3f3d'
  surface-tint: '#ffb3ad'
  primary: '#ffb3ad'
  on-primary: '#68000a'
  primary-container: '#ff5451'
  on-primary-container: '#5c0008'
  inverse-primary: '#c0001c'
  secondary: '#c6c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#66d8d8'
  on-tertiary: '#003737'
  tertiary-container: '#1ca0a1'
  on-tertiary-container: '#002f30'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930013'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#84f4f5'
  tertiary-fixed-dim: '#66d8d8'
  on-tertiary-fixed: '#002020'
  on-tertiary-fixed-variant: '#004f50'
  background: '#1f0f0e'
  on-background: '#fcdbd8'
  surface-variant: '#44302e'
typography:
  headline-xl:
    fontFamily: Lexend
    fontSize: 80px
    fontWeight: '900'
    lineHeight: 100%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 120%
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 150%
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 100%
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  border-width-thin: 2px
  border-width-thick: 4px
---

## Brand & Style

The design system for Wheelchair Rugby Chile is built on the raw power, mechanical intensity, and high-impact nature of the sport. It abandons soft aesthetics in favor of a **Neobrutalist** and **Industrial** approach that reflects the metallic, armored quality of the rugby chairs and the grit of the athletes.

The brand personality is aggressive, unapologetic, and highly structured. It aims to evoke a sense of urgency and athletic adrenaline through high-contrast visuals, thick structural lines, and a rigid adherence to a utilitarian grid. The target audience includes athletes, fans, and sponsors who value performance and the "no-nonsense" engineering behind the sport.

## Colors

The color palette is stripped down to three core pillars to maximize visual impact and readability. 

- **Primary Red (#FF3B3F):** A high-vibration sports red used for action triggers, highlights, and status indicators.
- **Deep Black (#000000):** Used as the primary background in Dark Mode and for all borders and primary text in Light Mode.
- **Industrial Gray/White (#F5F5F5):** The foundation for Light Mode, providing a clean, non-distracting surface that allows the bold black strokes and red accents to pop.

In both modes, the contrast ratio is kept at an absolute maximum to ensure accessibility and a "loud" visual presence.

## Typography

This design system utilizes a heavy-hitting typographic hierarchy. 

**Lexend** is employed for headlines; its athletic and bold character is pushed to the extreme with heavy weights and condensed spacing, mimicking the impact of sport. 

**Inter** serves as the primary body face, providing a neutral, utilitarian counterweight to the aggressive headlines, ensuring that technical information and match stats remain legible. 

**Space Grotesk** is used for labels, data points, and technical metadata, leaning into the industrial, "engineered" aesthetic of the equipment.

## Layout & Spacing

The layout is governed by a **fixed 12-column grid** that feels like a structural blueprint. Spacing is tight and rhythmic, based on a 4px baseline.

- **Gutters:** 16px to maintain a dense, high-energy feel.
- **Margins:** 24px on mobile, scaling to 48px+ on desktop to frame the high-contrast content.
- **Structure:** Elements are often contained within thick-bordered boxes. Negative space is used strategically to separate "zones of impact" rather than to create a "light" feel.

## Elevation & Depth

This design system rejects traditional shadows and Z-axis depth. Instead, hierarchy is established through:

1.  **Bold Borders:** 4px black strokes (or white strokes in dark mode) define every interactive surface.
2.  **Hard Shadows:** If depth is required, use "Brutalist Shadows"—solid, 100% opacity offsets (e.g., 4px down, 4px right) in the accent red or black, with no blur.
3.  **Color Blocking:** Layering elements is achieved by placing high-contrast colored boxes (Red on Black, Black on White) directly on top of one another.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every button, input, card, and container features hard 90-degree angles. This reinforces the industrial, "welded metal" feel of the sport's equipment. There are no circles, except for instances where icons specifically require them or for profile avatars which must be housed in a thick-bordered square frame.

## Components

### Buttons
- **Primary:** Bright Red background, 4px black border, black uppercase text. On hover, the button shifts 4px up and left with a solid black "hard shadow" appearing behind it.
- **Secondary:** Transparent background, 4px border (white or black depending on mode), uppercase text.

### Cards
- **Stat Cards:** Solid background (Mode-dependent), 4px border, and a "header block" in Red with the category label in Space Grotesk.
- **Player Cards:** High-contrast grayscale photography with Red duotone overlays on hover.

### Inputs & Selection
- **Fields:** Rectangular boxes with 2px borders that thicken to 4px on focus.
- **Checkboxes:** Square boxes. When checked, they fill with Red and a thick black "X" or checkmark.

### Specialty Components
- **Match Ticker:** A high-contrast bar with scrolling industrial text for live scores.
- **The "Impact" Divider:** A thick, 8px horizontal line used to separate major sections, occasionally broken by a label or icon.