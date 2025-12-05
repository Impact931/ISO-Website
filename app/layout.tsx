import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: {
    default: 'ISO Photo XP | One-of-a-Kind Photo Experiences',
    template: '%s | ISO Photo XP',
  },
  description:
    'One-of-a-kind photo experiences for youth sports, athletes, and organizations. Professional sports photography that captures every moment.',
  keywords: [
    'sports photography',
    'youth sports',
    'athlete photography',
    'team photos',
    'action shots',
    'professional photography',
  ],
  authors: [{ name: 'ISO Photo XP' }],
  creator: 'ISO Photo XP',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://isophotoxp.com',
    siteName: 'ISO Photo XP',
    title: 'ISO Photo XP | One-of-a-Kind Photo Experiences',
    description:
      'One-of-a-kind photo experiences for youth sports, athletes, and organizations.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ISO Photo XP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO Photo XP | One-of-a-Kind Photo Experiences',
    description:
      'One-of-a-kind photo experiences for youth sports, athletes, and organizations.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Organization Schema for SEO
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ISO Photo XP',
  image: 'https://isophotoxp.com/logo.png',
  description:
    'One-of-a-kind photo experiences for youth sports, athletes, and organizations.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Your City',
    addressRegion: 'TN',
    addressCountry: 'US',
  },
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-brand-black text-brand-white font-body">
        {children}
      </body>
    </html>
  )
}
