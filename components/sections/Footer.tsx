'use client'

import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-offBlack border-t border-brand-gray/30">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold text-brand-white">
                ISO <span className="text-brand-gold">Photo XP</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              To use our God-given talents to create one-of-a-kind photo
              experiences for one-of-a-kind people.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-brand-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-brand-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading text-brand-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-gray rounded-full hover:bg-brand-gold hover:text-brand-black transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-gray rounded-full hover:bg-brand-gold hover:text-brand-black transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-gray rounded-full hover:bg-brand-gold hover:text-brand-black transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-brand-white font-medium mb-3 text-sm">
                Join the Loop
              </h5>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-brand-gray border border-brand-gray rounded text-sm text-brand-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
                />
                <button type="submit" className="btn-primary px-4 py-2 text-xs">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-gray/30 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} ISO Photo XP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
