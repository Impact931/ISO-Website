/**
 * ISO Photo XP - Spacing & Sizing Design Tokens
 *
 * Based on 4px base unit system for consistent rhythm.
 *
 * @see docs/Design Docs/ISO Webpage Redesign - Implementation Guide.md
 */

// ============================================
// BASE SPACING SCALE (4px base)
// ============================================

export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',    // 2px
  1: '0.25rem',       // 4px
  1.5: '0.375rem',    // 6px
  2: '0.5rem',        // 8px
  2.5: '0.625rem',    // 10px
  3: '0.75rem',       // 12px
  3.5: '0.875rem',    // 14px
  4: '1rem',          // 16px
  5: '1.25rem',       // 20px
  6: '1.5rem',        // 24px
  7: '1.75rem',       // 28px
  8: '2rem',          // 32px
  9: '2.25rem',       // 36px
  10: '2.5rem',       // 40px
  11: '2.75rem',      // 44px
  12: '3rem',         // 48px
  14: '3.5rem',       // 56px
  16: '4rem',         // 64px
  20: '5rem',         // 80px
  24: '6rem',         // 96px
  28: '7rem',         // 112px
  32: '8rem',         // 128px
  36: '9rem',         // 144px
  40: '10rem',        // 160px
  44: '11rem',        // 176px
  48: '12rem',        // 192px
  52: '13rem',        // 208px
  56: '14rem',        // 224px
  60: '15rem',        // 240px
  64: '16rem',        // 256px
  72: '18rem',        // 288px
  80: '20rem',        // 320px
  96: '24rem',        // 384px
} as const

// ============================================
// SEMANTIC SPACING
// ============================================

export const semanticSpacing = {
  // Component internal spacing
  component: {
    xs: spacing[1],     // 4px - tight elements
    sm: spacing[2],     // 8px - compact
    md: spacing[4],     // 16px - default
    lg: spacing[6],     // 24px - spacious
    xl: spacing[8],     // 32px - very spacious
  },

  // Section spacing (vertical rhythm)
  section: {
    sm: spacing[12],    // 48px
    md: spacing[16],    // 64px
    lg: spacing[24],    // 96px
    xl: spacing[32],    // 128px
  },

  // Container padding
  container: {
    sm: spacing[4],     // 16px - mobile
    md: spacing[6],     // 24px - tablet
    lg: spacing[8],     // 32px - desktop
  },

  // Card padding
  card: {
    sm: spacing[4],     // 16px
    md: spacing[6],     // 24px
    lg: spacing[8],     // 32px
  },

  // Button padding
  button: {
    sm: { x: spacing[3], y: spacing[1.5] },   // 12px x 6px
    md: { x: spacing[6], y: spacing[3] },     // 24px x 12px
    lg: { x: spacing[8], y: spacing[4] },     // 32px x 16px
  },

  // Input padding
  input: {
    sm: { x: spacing[3], y: spacing[2] },     // 12px x 8px
    md: { x: spacing[4], y: spacing[3] },     // 16px x 12px
    lg: { x: spacing[5], y: spacing[4] },     // 20px x 16px
  },

  // Gap spacing (flex/grid)
  gap: {
    xs: spacing[2],     // 8px
    sm: spacing[4],     // 16px
    md: spacing[6],     // 24px
    lg: spacing[8],     // 32px
    xl: spacing[12],    // 48px
  },
} as const

// ============================================
// SIZING TOKENS
// ============================================

export const sizing = {
  // Icon sizes
  icon: {
    xs: '0.75rem',      // 12px
    sm: '1rem',         // 16px
    md: '1.25rem',      // 20px
    lg: '1.5rem',       // 24px
    xl: '2rem',         // 32px
    '2xl': '2.5rem',    // 40px
    '3xl': '3rem',      // 48px
  },

  // Avatar sizes
  avatar: {
    xs: '1.5rem',       // 24px
    sm: '2rem',         // 32px
    md: '2.5rem',       // 40px
    lg: '3rem',         // 48px
    xl: '4rem',         // 64px
    '2xl': '6rem',      // 96px
    '3xl': '8rem',      // 128px
  },

  // Touch targets (minimum for accessibility)
  touchTarget: {
    min: '2.75rem',     // 44px - Apple HIG minimum
    comfortable: '3rem', // 48px - comfortable tap
  },

  // Logo sizes
  logo: {
    sm: '2rem',         // 32px
    md: '2.5rem',       // 40px
    lg: '3rem',         // 48px
  },
} as const

// ============================================
// CONTAINER WIDTHS
// ============================================

export const containerWidths = {
  // Content containers
  xs: '20rem',          // 320px
  sm: '24rem',          // 384px
  md: '28rem',          // 448px
  lg: '32rem',          // 512px
  xl: '36rem',          // 576px
  '2xl': '42rem',       // 672px
  '3xl': '48rem',       // 768px
  '4xl': '56rem',       // 896px
  '5xl': '64rem',       // 1024px
  '6xl': '72rem',       // 1152px
  '7xl': '80rem',       // 1280px - max content width

  // Special containers
  narrow: '48rem',      // 768px - for text-heavy content
  wide: '80rem',        // 1280px - for full-width content
  full: '100%',
} as const

// ============================================
// ASPECT RATIOS (from Design Guide)
// ============================================

export const aspectRatios = {
  // Standard ratios
  square: '1 / 1',
  video: '16 / 9',
  photo: '4 / 3',
  portrait: '3 / 4',

  // ISO-specific ratios
  heroVertical: '9 / 16',       // Hero panels (1080x1920)
  heroLandscape: '21 / 9',      // Sub-page banners (2560x1080)
  profileCard: '4 / 5',         // Photographer cards (800x1000)
  blogThumb: '16 / 9',          // Blog thumbnails (1200x675)
  comparison: '16 / 9',         // Focus slider (1920x1080)
} as const

// ============================================
// IMAGE DIMENSIONS (from Asset Checklist)
// ============================================

export const imageDimensions = {
  heroVertical: {
    width: 1080,
    height: 1920,
    ratio: '9:16',
  },
  heroLandscape: {
    width: 2560,
    height: 1080,
    ratio: '21:9',
  },
  comparison: {
    width: 1920,
    height: 1080,
    ratio: '16:9',
  },
  profileCard: {
    width: 800,
    height: 1000,
    ratio: '4:5',
  },
  blogThumbnail: {
    width: 1200,
    height: 675,
    ratio: '16:9',
  },
  ogImage: {
    width: 1200,
    height: 630,
    ratio: '1.91:1',
  },
} as const

// ============================================
// BORDER RADIUS
// ============================================

export const borderRadius = {
  none: '0',
  sm: '0.125rem',       // 2px
  DEFAULT: '0.25rem',   // 4px
  md: '0.375rem',       // 6px
  lg: '0.5rem',         // 8px
  xl: '0.75rem',        // 12px
  '2xl': '1rem',        // 16px
  '3xl': '1.5rem',      // 24px
  full: '9999px',       // Pill shape
} as const

// ============================================
// Z-INDEX SCALE
// ============================================

export const zIndex = {
  hide: -1,
  base: 0,
  raised: 1,
  dropdown: 10,
  sticky: 20,
  banner: 30,
  overlay: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  toast: 80,
  max: 9999,
} as const

// Type exports
export type Spacing = keyof typeof spacing
export type ContainerWidth = keyof typeof containerWidths
export type AspectRatio = keyof typeof aspectRatios
export type ZIndex = keyof typeof zIndex
