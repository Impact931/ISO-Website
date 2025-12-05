'use client'

import { motion } from 'framer-motion'
import { Heart, Clock, Shield, Camera, ImageIcon, Package } from 'lucide-react'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { ICPHero } from '@/components/sections/ICPHero'
import { FocusSlider } from '@/components/interactive/FocusSlider'
import { SafetyBadges } from '@/components/interactive/SafetyBadges'

export default function ParentsPage() {
  return (
    <main className="relative">
      <Header />

      {/* Hero Section */}
      <ICPHero
        title="Never Miss Another Memory"
        subtitle="For Parents"
        description="While you're cheering from the stands, our pros are capturing every goal, every save, every celebration. Professional photos delivered fast, so you can relive the magic."
        ctaText="Find Your Photos"
        ctaHref="/find-photos"
      />

      {/* Problem Section - Focus Slider */}
      <section className="section bg-brand-offBlack">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
              Stop Gambling With Your <span className="text-brand-gold">Memories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your phone can&apos;t capture what our pros can. See the difference.
            </p>
          </div>
          <FocusSlider
            beforeLabel="Your Phone Photo"
            afterLabel="ISO Pro Photo"
          />
        </div>
      </section>

      {/* Safety Section */}
      <section className="section bg-brand-black">
        <div className="container-wide">
          <SafetyBadges />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section bg-brand-offBlack">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
              Why Parents <span className="text-brand-gold">Love ISO</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Be Present',
                description: 'Stop watching the game through your phone. Enjoy the moment while we capture it.',
              },
              {
                icon: Clock,
                title: 'Fast Delivery',
                description: 'Photos ready within 3-5 days. Get notified instantly when your gallery is live.',
              },
              {
                icon: Shield,
                title: 'Safe & Trusted',
                description: 'Every photographer is background checked, insured, and SafeSport certified.',
              },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-black rounded-xl p-8 border border-brand-gray/30 hover:border-brand-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-brand-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Digital vs Print */}
      <section className="section bg-brand-black">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
              The <span className="text-brand-gold">Memory Vault</span>
            </h2>
            <p className="text-xl text-gray-400">
              Digital downloads or heirloom prints — the choice is yours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Digital Package */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-offBlack rounded-xl p-8 border border-brand-gray/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <ImageIcon size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-white">
                    Digital Downloads
                  </h3>
                  <p className="text-gray-500 text-sm">Instant access</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'High-resolution JPG files',
                  'Unlimited downloads',
                  'Share-ready for social media',
                  'Print at your own lab',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <Camera size={14} className="text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-heading font-bold text-brand-gold">
                Starting at $25
              </p>
            </motion.div>

            {/* Print Package */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-offBlack rounded-xl p-8 border border-brand-gold/50 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-brand-gold text-brand-black text-xs font-heading uppercase tracking-wider rounded">
                Popular
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Package size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-white">
                    Heirloom Prints
                  </h3>
                  <p className="text-gray-500 text-sm">Museum quality</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Premium lustre finish',
                  'Archival quality (100+ years)',
                  'Multiple size options',
                  'Frames & canvas available',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <Camera size={14} className="text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-heading font-bold text-brand-gold">
                Starting at $35
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-brand-offBlack">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
              Questions? <span className="text-brand-gold">We&apos;ve Got Answers</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to get my photos?',
                a: 'Galleries are typically ready within 3-5 business days after the event. You\'ll receive an email/text notification immediately when they\'re live.',
              },
              {
                q: 'Are your photographers background checked?',
                a: 'Yes. Every ISO Certified Photographer undergoes a rigorous background check and SafeSport certification before they can shoot any event.',
              },
              {
                q: 'What if I can\'t find my child in the gallery?',
                a: 'Use our face recognition search feature! Simply upload a photo and we\'ll find all images of your child automatically.',
              },
              {
                q: 'Can I share photos on social media?',
                a: 'Absolutely! All digital downloads are optimized for sharing. We just ask that you tag @isophotoxp so we can cheer for your athlete too!',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-black rounded-lg p-6 border border-brand-gray/30"
              >
                <h4 className="font-heading font-semibold text-brand-white mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gold">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-6">
            Ready to Capture the Magic?
          </h2>
          <p className="text-xl text-brand-black/80 mb-8 max-w-2xl mx-auto">
            Join thousands of parents who never miss a memory.
          </p>
          <a href="/find-photos" className="btn-primary bg-brand-black text-brand-white hover:bg-brand-offBlack">
            Find Your Photos
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
