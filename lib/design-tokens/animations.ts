/**
 * ISO Photo XP - Animation Design Tokens
 *
 * Motion System: "App-like" feel with Framer Motion physics
 * Scrollytelling, micro-interactions, hover states
 *
 * @see docs/Design Docs/ISO Website redesign PRD.md
 */

// ============================================
// DURATION SCALE
// ============================================

export const durations = {
  instant: '0ms',
  fastest: '50ms',
  faster: '100ms',
  fast: '150ms',
  normal: '200ms',
  relaxed: '300ms',
  slow: '400ms',
  slower: '500ms',
  slowest: '700ms',
  lazy: '1000ms',

  // Page transitions
  pageEnter: '400ms',
  pageExit: '200ms',

  // Specific interactions
  hover: '200ms',
  focus: '150ms',
  press: '100ms',
  expand: '300ms',
  collapse: '200ms',
  drawer: '400ms',
  modal: '300ms',
  tooltip: '150ms',
  toast: '400ms',
} as const

// ============================================
// EASING CURVES
// ============================================

export const easings = {
  // Standard easings
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',

  // Custom cubic beziers for premium feel
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',           // Material Design standard
  smoothIn: 'cubic-bezier(0.4, 0, 1, 1)',          // Accelerate
  smoothOut: 'cubic-bezier(0, 0, 0.2, 1)',         // Decelerate
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Overshoot bounce
  snappy: 'cubic-bezier(0.16, 1, 0.3, 1)',         // Quick and snappy

  // Framer Motion spring presets (as bezier approximations)
  springGentle: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  springBouncy: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
} as const

// ============================================
// FRAMER MOTION SPRING CONFIGS
// ============================================

export const springs = {
  // Gentle spring - for subtle movements
  gentle: {
    type: 'spring',
    stiffness: 120,
    damping: 14,
    mass: 1,
  },

  // Default spring - balanced feel
  default: {
    type: 'spring',
    stiffness: 200,
    damping: 20,
    mass: 1,
  },

  // Snappy spring - for quick interactions
  snappy: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
    mass: 1,
  },

  // Bouncy spring - for playful elements
  bouncy: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
    mass: 0.8,
  },

  // Stiff spring - for precise movements
  stiff: {
    type: 'spring',
    stiffness: 500,
    damping: 35,
    mass: 1,
  },

  // Wobbly spring - for attention-grabbing
  wobbly: {
    type: 'spring',
    stiffness: 180,
    damping: 12,
    mass: 1,
  },
} as const

// ============================================
// FRAMER MOTION TRANSITION PRESETS
// ============================================

export const transitions = {
  // Fast and responsive
  fast: {
    duration: 0.15,
    ease: [0.4, 0, 0.2, 1],
  },

  // Normal interaction
  normal: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1],
  },

  // Relaxed movement
  relaxed: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },

  // Slow and deliberate
  slow: {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  },

  // Page transition
  page: {
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1],
  },
} as const

// ============================================
// ANIMATION VARIANTS (Framer Motion)
// ============================================

export const variants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  },

  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },

  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },

  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  scaleUp: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },

  // Slide animations
  slideInFromBottom: {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
  },

  slideInFromTop: {
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '-100%' },
  },

  slideInFromLeft: {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
  },

  slideInFromRight: {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
  },

  // Hero panel expand (for "Choose Your Character")
  panelExpand: {
    collapsed: { flex: 1 },
    expanded: { flex: 3 },
  },

  // Stagger children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },

  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
} as const

// ============================================
// SCROLL-LINKED ANIMATIONS (for Scrollytelling)
// ============================================

export const scrollAnimations = {
  // Timeline line draw effect
  drawLine: {
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: { duration: 1.5, ease: 'easeOut' },
  },

  // Parallax effect
  parallax: {
    slow: 0.5,    // Moves at 50% scroll speed
    normal: 1,    // Moves at scroll speed
    fast: 1.5,    // Moves at 150% scroll speed
  },

  // Reveal on scroll
  revealOnScroll: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  // Scale on scroll
  scaleOnScroll: {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  },
} as const

// ============================================
// HOVER & INTERACTION STATES
// ============================================

export const interactionStates = {
  // Button hover
  buttonHover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },

  buttonTap: {
    scale: 0.98,
  },

  // Card hover
  cardHover: {
    y: -4,
    transition: { duration: 0.2 },
  },

  // Image hover (zoom)
  imageHover: {
    scale: 1.05,
    transition: { duration: 0.4 },
  },

  // Link underline
  linkHover: {
    x: 4,
    transition: { duration: 0.2 },
  },

  // Icon pulse
  pulse: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
} as const

// ============================================
// CSS KEYFRAMES (for Tailwind)
// ============================================

export const keyframes = {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },

  fadeOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },

  slideUp: {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },

  slideDown: {
    '0%': { opacity: '0', transform: 'translateY(-20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },

  scaleIn: {
    '0%': { opacity: '0', transform: 'scale(0.95)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },

  drawLine: {
    '0%': { strokeDashoffset: '1000' },
    '100%': { strokeDashoffset: '0' },
  },

  shimmer: {
    '0%': { backgroundPosition: '-200% 0' },
    '100%': { backgroundPosition: '200% 0' },
  },

  pulse: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' },
  },

  bounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },

  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
} as const

// Type exports
export type Duration = keyof typeof durations
export type Easing = keyof typeof easings
export type Spring = keyof typeof springs
export type Variant = keyof typeof variants
