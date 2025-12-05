'use client'

import { HeroGrid } from '@/components/sections/HeroGrid'
import { FocusSlider } from '@/components/interactive/FocusSlider'
import { ScrollTimeline } from '@/components/interactive/ScrollTimeline'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main className="relative">
      <Header />

      {/* Section 1: Hero - "Choose Your Character" Gateway */}
      <HeroGrid />

      {/* Section 2: Problem - "The Focus Slider" */}
      <section className="section bg-brand-offBlack">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-brand-white mb-4">
              Stop Gambling With Your <span className="text-brand-gold">Memories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See the difference professional photography makes.
              Drag the slider to reveal the ISO difference.
            </p>
          </div>
          <FocusSlider />
        </div>
      </section>

      {/* Section 3: Plan - "The Journey Timeline" (Scrollytelling) */}
      <section className="section bg-brand-black">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-brand-white mb-4">
              Your Journey to <span className="text-brand-gold">Perfect Memories</span>
            </h2>
            <p className="text-xl text-gray-400">
              Three simple steps. Zero stress. All the memories.
            </p>
          </div>
          <ScrollTimeline />
        </div>
      </section>

      {/* Section 4: Success - Social Proof */}
      <section className="section bg-brand-offBlack">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-brand-white mb-4">
              Wall of <span className="text-brand-gold">Fame</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real moments. Real families. Real memories.
            </p>
          </div>
          {/* Gallery carousel will go here */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-brand-gray rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA Band */}
      <section className="py-20 bg-brand-gold">
        <div className="container-wide text-center">
          <h2 className="text-brand-black mb-6">
            Ready to Capture Your Moment?
          </h2>
          <p className="text-xl text-brand-black/80 mb-8 max-w-2xl mx-auto">
            Join thousands of families who never miss a memory.
          </p>
          <button className="btn-primary bg-brand-black text-brand-white hover:bg-brand-offBlack">
            Find Your Photos
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
