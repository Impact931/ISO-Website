/**
 * ISO Photo XP - Constants and Configuration
 */

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/parents', label: 'For Parents' },
  { href: '/organizations', label: 'For Organizations' },
  { href: '/athletes', label: 'For Athletes' },
  { href: '/photographers', label: 'For Photographers' },
  { href: '/resources', label: 'Resources' },
] as const

// Hero Grid Characters (ICPs)
export const HERO_CHARACTERS = [
  {
    id: 'parents',
    title: 'Parents',
    subtitle: 'Never Miss a Memory',
    href: '/parents',
    description: 'Professional photos of your child, delivered fast.',
    color: 'gold',
  },
  {
    id: 'organizations',
    title: 'Organizations',
    subtitle: 'Streamlined & Profitable',
    href: '/organizations',
    description: 'Turn photo day into a fundraising opportunity.',
    color: 'gold',
  },
  {
    id: 'athletes',
    title: 'Athletes',
    subtitle: 'Get the Pro Look',
    href: '/athletes',
    description: 'Stand out with professional action shots.',
    color: 'gold',
  },
  {
    id: 'photographers',
    title: 'Photographers',
    subtitle: 'Join the Network',
    href: '/photographers',
    description: 'Turn your passion into profit.',
    color: 'gold',
  },
] as const

// Journey Timeline Steps
export const JOURNEY_STEPS = [
  {
    id: 1,
    title: 'Register',
    description: 'Sign up in seconds. Get notified when your photos are ready.',
    icon: 'smartphone',
  },
  {
    id: 2,
    title: 'Game Day',
    description: 'Our pros capture every moment while you enjoy the game.',
    icon: 'camera',
  },
  {
    id: 3,
    title: 'Relive',
    description: 'Browse, download, and print your memories within days.',
    icon: 'image',
  },
] as const

// Calculator defaults
export const CALCULATOR_DEFAULTS = {
  athletes: 500,
  rebatePerAthlete: 10,
  photographerGamedays: 4,
  photographerRate: 300,
} as const

// Social Links
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/isophotoxp',
  facebook: 'https://facebook.com/isophotoxp',
  linkedin: 'https://linkedin.com/company/isophotoxp',
} as const

// Footer Links
export const FOOTER_LINKS = {
  quickLinks: [
    { href: '/about', label: 'About Us' },
    { href: '/meet-the-pros', label: 'Meet the Pros' },
    { href: '/resources', label: 'Resources' },
    { href: '/help', label: 'Help Center' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
    { href: '/cookies', label: 'Cookie Policy' },
    { href: '/accessibility', label: 'Accessibility' },
  ],
} as const

// Animation Variants (for Framer Motion)
export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const
