'use client'

import { motion } from 'framer-motion'
import {
  Camera,
  DollarSign,
  Clock,
  Shield,
  CheckCircle,
  Users,
  Award,
  Briefcase,
  ArrowRight,
} from 'lucide-react'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { ICPHero } from '@/components/sections/ICPHero'
import { EarningsCalculator } from '@/components/interactive/EarningsCalculator'

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: '$150-$500+ per gameday depending on experience and event type',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Choose your own hours. Accept or decline assignments as they fit your schedule.',
  },
  {
    icon: Briefcase,
    title: 'Bookings Provided',
    description: 'We handle all client acquisition, scheduling, and communication.',
  },
  {
    icon: Shield,
    title: 'Insurance Covered',
    description: '$2M liability coverage included for all assignments.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a network of passionate photographers. Learn and grow together.',
  },
  {
    icon: Award,
    title: 'Training & Certification',
    description: 'Free access to our training program. Level up your skills.',
  },
]

const requirements = [
  'Professional DSLR or mirrorless camera',
  'Fast telephoto lens (70-200mm f/2.8 or equivalent)',
  'Reliable transportation',
  'Pass background check',
  'Complete SafeSport certification',
  'Portfolio showing sports/action photography',
]

const certificationLevels = [
  {
    level: 'Level 1',
    title: 'Certified Shooter',
    requirements: 'Background check + Basic training',
    perks: 'Access to standard gameday assignments',
  },
  {
    level: 'Level 2',
    title: 'Pro Shooter',
    requirements: '50+ events + Quality review',
    perks: 'Priority booking + Higher rates + Studio assignments',
  },
  {
    level: 'Level 3',
    title: 'Master Pro',
    requirements: '200+ events + Mentorship training',
    perks: 'Premium events + Training others + Revenue share',
  },
]

export default function PhotographersPage() {
  return (
    <main className="relative">
      <Header />

      {/* Hero Section */}
      <ICPHero
        title="Turn Your Passion Into Profit"
        subtitle="For Photographers"
        description="Join the ISO Network and get paid to do what you love. Flexible schedule, guaranteed bookings, and a community that helps you grow."
        ctaText="Apply Now"
        ctaHref="#apply"
      />

      {/* Quick Stats */}
      <section className="py-12 bg-brand-offBlack border-y border-brand-gray/30">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '200+', label: 'Network Photographers' },
              { value: '$2M+', label: 'Paid to Photographers' },
              { value: '4.9/5', label: 'Photographer Satisfaction' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-gold">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="section bg-brand-black">
        <div className="container-wide max-w-4xl">
          <EarningsCalculator />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section bg-brand-offBlack">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
              Why Photographers <span className="text-brand-gold">Choose ISO</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-black rounded-xl p-6 border border-brand-gray/30 hover:border-brand-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-brand-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-brand-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="section bg-brand-black">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
              Grow Your <span className="text-brand-gold">Career</span>
            </h2>
            <p className="text-xl text-gray-400">
              Three certification levels with increasing rewards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certificationLevels.map((cert, i) => (
              <motion.div
                key={cert.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl p-6 border ${
                  i === 2
                    ? 'bg-brand-gold/10 border-brand-gold'
                    : 'bg-brand-offBlack border-brand-gray/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold ${
                      i === 2
                        ? 'bg-brand-gold text-brand-black'
                        : 'bg-brand-gray text-brand-white'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {cert.level}
                    </p>
                    <p className="font-heading font-bold text-brand-white">
                      {cert.title}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500">Requirements:</p>
                    <p className="text-gray-300">{cert.requirements}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Perks:</p>
                    <p className="text-brand-gold">{cert.perks}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section bg-brand-offBlack">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-white mb-6">
                What You&apos;ll <span className="text-brand-gold">Need</span>
              </h2>
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-brand-gold mt-0.5" />
                    <span className="text-gray-300">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-black rounded-xl p-8 border border-brand-gray/30"
            >
              <Camera size={48} className="text-brand-gold mb-6" />
              <h3 className="text-xl font-heading font-bold text-brand-white mb-4">
                Don&apos;t Have All the Gear?
              </h3>
              <p className="text-gray-400 mb-4">
                We partner with major camera brands to offer exclusive discounts to
                network members. Get up to 30% off on bodies, lenses, and accessories.
              </p>
              <p className="text-sm text-gray-500">
                *Equipment discounts available after certification
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="section bg-brand-black">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-offBlack rounded-2xl p-8 md:p-12 border border-brand-gold/30"
          >
            <Award size={48} className="text-brand-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
              Ready to Join the Network?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
              Submit your application and portfolio. We review applications within 48
              hours and will reach out to schedule a brief intro call.
            </p>

            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-brand-black border border-brand-gray rounded-lg text-brand-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-brand-black border border-brand-gray rounded-lg text-brand-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
              <input
                type="text"
                placeholder="Portfolio URL"
                className="w-full px-4 py-3 bg-brand-black border border-brand-gray rounded-lg text-brand-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
              <input
                type="text"
                placeholder="City, State"
                className="w-full px-4 py-3 bg-brand-black border border-brand-gray rounded-lg text-brand-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Submit Application <ArrowRight size={18} />
              </button>
            </form>

            <p className="text-gray-500 text-sm mt-6">
              By applying, you agree to complete a background check if selected.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
