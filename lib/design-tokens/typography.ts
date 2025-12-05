/**
 * ISO Photo XP - Typography Design Tokens
 *
 * Typography System:
 * - Headings: Oswald (Bold, condensed, athletic)
 * - Body: Inter (Clean, highly readable)
 *
 * @see docs/Design Docs/ISO Webpage Redesign - Implementation Guide.md
 */

// ============================================
// FONT FAMILIES
// ============================================

export const fontFamilies = {
  // Primary heading font - Bold, condensed, athletic
  heading: ['Oswald', 'sans-serif'],

  // Secondary body font - Clean, highly readable
  body: ['Inter', 'sans-serif'],

  // Monospace for code/technical content
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
} as const

// ============================================
// FONT WEIGHTS
// ============================================

export const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const

// ============================================
// FONT SIZES (Mobile-first, rem based)
// ============================================

export const fontSizes = {
  // Extra small text
  xs: ['0.75rem', { lineHeight: '1rem' }],        // 12px

  // Small text
  sm: ['0.875rem', { lineHeight: '1.25rem' }],    // 14px

  // Base text
  base: ['1rem', { lineHeight: '1.5rem' }],       // 16px

  // Large text
  lg: ['1.125rem', { lineHeight: '1.75rem' }],    // 18px

  // Extra large text
  xl: ['1.25rem', { lineHeight: '1.75rem' }],     // 20px

  // 2XL
  '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px

  // 3XL
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px

  // 4XL
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px

  // 5XL
  '5xl': ['3rem', { lineHeight: '1' }],           // 48px

  // 6XL - Hero headlines
  '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px

  // 7XL - Large display
  '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px

  // 8XL - Extra large display
  '8xl': ['6rem', { lineHeight: '1' }],           // 96px

  // 9XL - Maximum display
  '9xl': ['8rem', { lineHeight: '1' }],           // 128px
} as const

// ============================================
// LINE HEIGHTS
// ============================================

export const lineHeights = {
  none: '1',
  tight: '1.1',
  snug: '1.25',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const

// ============================================
// LETTER SPACING
// ============================================

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',

  // Custom for headings (athletic, impactful)
  heading: '-0.02em',

  // Custom for uppercase labels
  caps: '0.15em',
} as const

// ============================================
// TEXT STYLES (Composite Tokens)
// ============================================

export const textStyles = {
  // Display styles (for hero sections)
  display: {
    large: {
      fontFamily: fontFamilies.heading,
      fontSize: '4.5rem',     // 72px
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.heading,
    },
    medium: {
      fontFamily: fontFamilies.heading,
      fontSize: '3.75rem',    // 60px
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.heading,
    },
    small: {
      fontFamily: fontFamilies.heading,
      fontSize: '3rem',       // 48px
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.heading,
    },
  },

  // Heading styles
  heading: {
    h1: {
      fontFamily: fontFamilies.heading,
      fontSize: '2.25rem',    // 36px mobile, scales up
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.tight,
    },
    h2: {
      fontFamily: fontFamilies.heading,
      fontSize: '1.875rem',   // 30px
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.tight,
    },
    h3: {
      fontFamily: fontFamilies.heading,
      fontSize: '1.5rem',     // 24px
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.snug,
    },
    h4: {
      fontFamily: fontFamilies.heading,
      fontSize: '1.25rem',    // 20px
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.snug,
    },
    h5: {
      fontFamily: fontFamilies.body,
      fontSize: '1.125rem',   // 18px
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.normal,
    },
    h6: {
      fontFamily: fontFamilies.body,
      fontSize: '1rem',       // 16px
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.normal,
    },
  },

  // Body styles
  body: {
    large: {
      fontFamily: fontFamilies.body,
      fontSize: '1.125rem',   // 18px
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.relaxed,
    },
    default: {
      fontFamily: fontFamilies.body,
      fontSize: '1rem',       // 16px
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
    },
    small: {
      fontFamily: fontFamilies.body,
      fontSize: '0.875rem',   // 14px
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
    },
  },

  // UI element styles
  ui: {
    button: {
      fontFamily: fontFamilies.heading,
      fontSize: '0.875rem',   // 14px
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.none,
      letterSpacing: letterSpacing.wider,
      textTransform: 'uppercase',
    },
    label: {
      fontFamily: fontFamilies.heading,
      fontSize: '0.75rem',    // 12px
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.none,
      letterSpacing: letterSpacing.caps,
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: fontFamilies.body,
      fontSize: '0.75rem',    // 12px
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
    },
    overline: {
      fontFamily: fontFamilies.heading,
      fontSize: '0.625rem',   // 10px
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.none,
      letterSpacing: letterSpacing.widest,
      textTransform: 'uppercase',
    },
  },
} as const

// ============================================
// RESPONSIVE TYPOGRAPHY SCALE
// ============================================

export const responsiveScale = {
  // Hero headline - scales dramatically
  heroHeadline: {
    base: '2.25rem',     // 36px on mobile
    sm: '3rem',          // 48px
    md: '3.75rem',       // 60px
    lg: '4.5rem',        // 72px
    xl: '6rem',          // 96px
  },

  // Section headline
  sectionHeadline: {
    base: '1.875rem',    // 30px on mobile
    md: '2.25rem',       // 36px
    lg: '3rem',          // 48px
  },

  // Subsection headline
  subsectionHeadline: {
    base: '1.5rem',      // 24px on mobile
    md: '1.875rem',      // 30px
    lg: '2.25rem',       // 36px
  },
} as const

// Type exports
export type FontFamily = keyof typeof fontFamilies
export type FontWeight = keyof typeof fontWeights
export type FontSize = keyof typeof fontSizes
export type TextStyle = keyof typeof textStyles
