'use client'

import { motion } from 'framer-motion'
import { Building2, DollarSign, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { ICPHero } from '@/components/sections/ICPHero'
import { ProfitSimulator } from '@/components/interactive/ProfitSimulator'

const processSteps = [
  {
    step: 1,
    title: 'We Handle Scheduling',
    description: 'Tell us your events. We coordinate with your teams, venues, and parents.',
    icon: Clock,
  },
  {
    step: 2,
    title: 'We Handle Shooting',
    description: 'Our certified pros show up prepared and capture every athlete.',
    icon: CheckCircle,
  },
  {
    step: 3,
    title: 'We Handle Support',
    description: 'Parents order directly. We handle printing, shipping, and customer service.',
    icon: Shield,
  },
  {
    step: 4,
    title: 'You Get Paid',
    description: 'Receive your rebate check. No inventory, no hassle, just profit.',
    icon: DollarSign,
  },
]

export default function OrganizationsPage() {
  return (
    <main className="relative">
      <Header />

      {/* Hero Section */}
      <ICPHero
        title="Turn Photo Day Into a Profit Center"
        subtitle="For Organizations"
        description="Streamlined photography that delights parents, funds your programs, and eliminates the headaches. We handle everything — you just collect the check."
        ctaText="Get a Custom Quote"
        ctaHref="#contact"
      />

      {/* Problem/Solution Split */}
      <section className="section bg-brand-offBlack">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-heading uppercase tracking-wider rounded mb-4">
                The Old Way
              </span>
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-4">
                Photo Day Shouldn&apos;t Be This Hard
              </h3>
              <ul className="space-y-3">
                {[
                  'Endless volunteer coordination',
                  'Angry parents when photos are late',
                  'Complicated order forms',
                  'Inventory and fulfillment nightmares',
                  'Minimal (or zero) fundraising returns',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-brand-red rounded-full mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-heading uppercase tracking-wider rounded mb-4">
                The ISO Way
              </span>
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-4">
                We Handle Everything. You Get Paid.
              </h3>
              <ul className="space-y-3">
                {[
                  'Zero volunteer hours needed',
                  'Photos delivered in days, not weeks',
                  'Simple online ordering for parents',
                  'We print, ship, and support',
                  'Guaranteed fundraising revenue',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle size={18} className="text-brand-gold mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profit Simulator */}
      <section className="section bg-brand-black">
        <div className="container-wide max-w-4xl">
          <ProfitSimulator />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section bg-brand-offBlack">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
              The <span className="text-brand-gold">ISO Flow</span>
            </h2>
            <p className="text-xl text-gray-400">
              Four simple steps to stress-free fundraising
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand-gold to-transparent z-0" />
                )}

                <div className="relative z-10 bg-brand-black rounded-xl p-6 border border-brand-gray/30 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-black flex items-center justify-center font-heading font-bold text-lg">
                      {step.step}
                    </div>
                    <step.icon size={24} className="text-brand-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section bg-brand-black">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '500+', label: 'Organizations Served' },
              { value: '$2M+', label: 'Fundraising Generated' },
              { value: '100%', label: 'Satisfaction Guarantee' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-heading font-bold text-brand-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section bg-brand-offBlack">
        <div className="container-narrow text-center">
          <Building2 size={48} className="text-brand-gold mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl text-brand-white font-heading mb-6">
            &quot;ISO eliminated every headache we had with photo day. Parents are happy,
            we raised more money than ever, and I didn&apos;t have to manage a single volunteer.&quot;
          </blockquote>
          <cite className="text-gray-400">
            — Athletic Director, Metro Youth Sports League
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gold">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-6">
            Ready to Simplify Photo Day?
          </h2>
          <p className="text-xl text-brand-black/80 mb-8 max-w-2xl mx-auto">
            Get a custom quote for your organization. No commitment required.
          </p>
          <a
            href="#contact"
            className="btn-primary bg-brand-black text-brand-white hover:bg-brand-offBlack inline-flex items-center gap-2"
          >
            Get Your Custom Quote <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
