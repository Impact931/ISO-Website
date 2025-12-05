/**
 * ISO Photo XP - Effects Design Tokens
 *
 * Shadows, blurs, and visual effects for the "Cinematic" look
 */

// ============================================
// BOX SHADOWS
// ============================================

export const shadows = {
  // No shadow
  none: 'none',

  // Subtle shadows
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',

  // Default shadow
  DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',

  // Larger shadows
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',

  // Inner shadow
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',

  // Brand-specific shadows
  gold: '0 4px 14px 0 rgba(191, 168, 99, 0.3)',
  goldLg: '0 10px 40px 0 rgba(191, 168, 99, 0.4)',
  goldGlow: '0 0 20px rgba(191, 168, 99, 0.5)',

  // Dark cinematic shadows
  cinematic: '0 20px 60px -15px rgba(0, 0, 0, 0.5)',
  cinematicLg: '0 40px 80px -20px rgba(0, 0, 0, 0.6)',

  // Card elevation
  card: '0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)',
  cardHover: '0 8px 24px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)',

  // Button shadows
  button: '0 2px 4px rgba(0, 0, 0, 0.1)',
  buttonHover: '0 4px 12px rgba(191, 168, 99, 0.3)',
} as const

// ============================================
// TEXT SHADOWS
// ============================================

export const textShadows = {
  none: 'none',

  // Subtle text shadow
  sm: '0 1px 2px rgba(0, 0, 0, 0.5)',

  // Default text shadow
  DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.5)',

  // Strong text shadow for readability on images
  lg: '0 4px 8px rgba(0, 0, 0, 0.6)',

  // Hero text shadow
  hero: '0 4px 20px rgba(0, 0, 0, 0.8)',

  // Gold glow for accent text
  goldGlow: '0 0 20px rgba(191, 168, 99, 0.6)',
} as const

// ============================================
// BLUR VALUES
// ============================================

export const blurs = {
  none: '0',
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px',
} as const

// ============================================
// BACKDROP FILTERS
// ============================================

export const backdropBlurs = {
  none: 'blur(0)',
  sm: 'blur(4px)',
  DEFAULT: 'blur(8px)',
  md: 'blur(12px)',
  lg: 'blur(16px)',
  xl: 'blur(24px)',
  '2xl': 'blur(40px)',
  '3xl': 'blur(64px)',
} as const

// ============================================
// GLASS MORPHISM EFFECTS
// ============================================

export const glassMorphism = {
  // Light glass
  light: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },

  // Dark glass (for ISO dark theme)
  dark: {
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },

  // Gold tinted glass
  gold: {
    background: 'rgba(191, 168, 99, 0.1)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(191, 168, 99, 0.2)',
  },

  // Heavy blur glass (for modals)
  heavy: {
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
} as const

// ============================================
// OVERLAY EFFECTS
// ============================================

export const overlays = {
  // Dark overlays
  dark10: 'rgba(0, 0, 0, 0.1)',
  dark20: 'rgba(0, 0, 0, 0.2)',
  dark30: 'rgba(0, 0, 0, 0.3)',
  dark40: 'rgba(0, 0, 0, 0.4)',
  dark50: 'rgba(0, 0, 0, 0.5)',
  dark60: 'rgba(0, 0, 0, 0.6)',
  dark70: 'rgba(0, 0, 0, 0.7)',
  dark80: 'rgba(0, 0, 0, 0.8)',
  dark90: 'rgba(0, 0, 0, 0.9)',

  // Light overlays
  light10: 'rgba(255, 255, 255, 0.1)',
  light20: 'rgba(255, 255, 255, 0.2)',
  light30: 'rgba(255, 255, 255, 0.3)',

  // Brand overlays
  gold10: 'rgba(191, 168, 99, 0.1)',
  gold20: 'rgba(191, 168, 99, 0.2)',
  gold30: 'rgba(191, 168, 99, 0.3)',
} as const

// ============================================
// GRADIENT OVERLAYS
// ============================================

export const gradientOverlays = {
  // Top to bottom fade (for hero sections)
  fadeToBottom: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',

  // Bottom to top fade
  fadeToTop: 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',

  // Center vignette
  vignette: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',

  // Hero cinematic overlay
  heroCinematic: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.8) 100%)',

  // Card highlight (top-left shine)
  cardShine: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',

  // Gold gradient accent
  goldAccent: 'linear-gradient(90deg, rgba(191,168,99,0) 0%, rgba(191,168,99,0.3) 50%, rgba(191,168,99,0) 100%)',
} as const

// ============================================
// FILTER EFFECTS
// ============================================

export const filters = {
  // Grayscale
  grayscale: 'grayscale(100%)',
  grayscalePartial: 'grayscale(50%)',

  // Brightness
  brighten: 'brightness(1.1)',
  brightenMore: 'brightness(1.2)',
  darken: 'brightness(0.9)',
  darkenMore: 'brightness(0.8)',

  // Contrast
  contrastHigh: 'contrast(1.1)',
  contrastLow: 'contrast(0.9)',

  // Saturate
  saturate: 'saturate(1.2)',
  desaturate: 'saturate(0.8)',

  // Cinematic look (slight desaturation + contrast)
  cinematic: 'contrast(1.05) saturate(0.95) brightness(0.98)',

  // Vintage look
  vintage: 'sepia(0.2) contrast(1.1) brightness(0.95)',
} as const

// Type exports
export type Shadow = keyof typeof shadows
export type TextShadow = keyof typeof textShadows
export type Blur = keyof typeof blurs
export type GlassMorphism = keyof typeof glassMorphism
