'use client'

import { motion } from 'framer-motion'
import { Zap, Trophy, Share2, Star, Instagram, Camera } from 'lucide-react'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { ICPHero } from '@/components/sections/ICPHero'
import { StyleSelector } from '@/components/interactive/StyleSelector'

export default function AthletesPage() {
  return (
    <main className="relative">
      <Header />

      {/* Hero Section */}
      <ICPHero
        title="Get the Pro Look"
        subtitle="For Athletes"
        description="Stand out from the crowd with professional action shots and studio portraits that showcase your skills. Build your brand. Get noticed. Look legendary."
        ctaText="View Gallery"
        ctaHref="/find-photos"
        accentColor="gold"
      />

      {/* Hype Stats */}
      <section className="py-12 bg-brand-offBlack border-y border-brand-gray/30">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: Camera, value: '50K+', label: 'Athletes Shot' },
              { icon: Instagram, value: '1M+', label: 'Social Shares' },
              { icon: Trophy, value: '500+', label: 'Events Covered' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon size={24} className="text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-heading font-bold text-brand-white">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Selector */}
      <section className="section bg-brand-black">
        <div className="container-wide">
          <StyleSelector />
        </div>
      </section>

      {/* What You Get */}
      <section className="section bg-brand-offBlack">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
              More Than Just <span className="text-brand-gold">Photos</span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to build your athletic brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Camera,
                title: 'Action Shots',
                description: 'Dynamic in-game photos that capture your best moves',
              },
              {
                icon: Star,
                title: 'Studio Portraits',
                description: 'Pro-level headshots for profiles and recruiting',
              },
              {
                icon: Share2,
                title: 'Social Media Ready',
                description: 'Optimized formats for Instagram, TikTok, and more',
              },
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Photos in your hands within days, not weeks',
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-black rounded-xl p-6 border border-brand-gray/30 hover:border-brand-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                  <feature.icon size={24} className="text-brand-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-brand-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting Section */}
      <section className="section bg-brand-black">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-heading uppercase tracking-wider rounded mb-4">
                For Recruits
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
                Get Noticed by Coaches
              </h2>
              <p className="text-gray-400 mb-6">
                College coaches review hundreds of profiles. Stand out with professional
                photos that show your athleticism, technique, and personality.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'High-resolution action photos',
                  'Professional headshots for profiles',
                  'Highlight video integration',
                  'Social media content package',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Trophy size={16} className="text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/find-photos" className="btn-primary">
                Start Your Portfolio
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] bg-brand-gray rounded-xl overflow-hidden"
            >
              {/* Placeholder for athlete image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Trophy size={64} className="text-brand-gold mx-auto mb-4" />
                  <p className="text-gray-500">Recruiting Photo Preview</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-brand-black/80 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                    <Star size={20} className="text-brand-black" />
                  </div>
                  <div>
                    <p className="text-brand-white font-semibold">Pro Headshot</p>
                    <p className="text-gray-400 text-sm">Perfect for recruiting profiles</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section bg-brand-offBlack">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
              Athletes Who <span className="text-brand-gold">Level Up</span>
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "These photos helped me get recruited to my dream school. Worth every penny.",
                name: "Jordan M.",
                sport: "Soccer, D1 Commit",
              },
              {
                quote: "My Instagram blew up after posting my ISO photos. The quality is unmatched.",
                name: "Alex T.",
                sport: "Basketball",
              },
              {
                quote: "Finally have professional photos that match my skill level. Love the smoke effect!",
                name: "Maya R.",
                sport: "Volleyball",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-black rounded-xl p-6 border border-brand-gray/30"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-heading font-semibold text-brand-white">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.sport}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gold">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-6">
            Ready to Look Like a Pro?
          </h2>
          <p className="text-xl text-brand-black/80 mb-8 max-w-2xl mx-auto">
            Find your photos or book a custom session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/find-photos"
              className="btn-primary bg-brand-black text-brand-white hover:bg-brand-offBlack"
            >
              Find Your Photos
            </a>
            <a
              href="#book"
              className="btn-secondary border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
