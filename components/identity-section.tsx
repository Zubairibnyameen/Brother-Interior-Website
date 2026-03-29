'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function IdentitySection() {
  const { ref, isVisible } = useInView()

  const trustItems = [
    { stat: '5.0 ★', label: '39 Google Reviews' },
    { stat: '500+', label: 'Projects Completed' },
    { stat: 'NCR', label: 'Pan Delhi Service' },
  ]

  const localities = [
    {
      place: 'Indirapuram',
      detail:
        'False ceiling & modular kitchen for premium gated communities and luxury apartments',
    },
    {
      place: 'Vasundhara',
      detail:
        'Full home renovation & interior design for contemporary residential developments',
    },
    {
      place: 'Raj Nagar & Khora Colony',
      detail:
        'Custom wardrobe, wooden flooring & false ceiling work',
    },
    {
      place: 'Kaushambi, Crossings Republik & Noida',
      detail:
        'Commercial false ceiling, partitions & SS steel work',
    },
    {
      place: 'Delhi, Greater Noida & Gurgaon',
      detail:
        'Pan-NCR interior contractor for residential & commercial projects',
    },
  ]

  return (
    <section
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background text-foreground texture-grit"
      aria-label="About Brother Interior — False Ceiling & Home Interior Contractor Ghaziabad"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                Ghaziabad · Delhi · Noida · Gurgaon
              </span>
            </div>

            <h2 className="text-foreground opacity-90">
              Bespoke Design Meets
              <span className="block text-accent">
                Premium Craftsmanship
              </span>
            </h2>

            <p className="text-foreground/80 leading-relaxed">
              At <strong className="text-foreground">Brother Interior</strong> — Ghaziabad&apos;s
              top-rated home interior contractor — we believe every space tells a story. Our design
              philosophy centres on creating luxury interiors that seamlessly blend your vision with
              our expertise. From{' '}
              <strong className="text-foreground">false ceiling</strong> and{' '}
              <strong className="text-foreground">modular kitchens</strong> to{' '}
              <strong className="text-foreground">wardrobes, wooden flooring</strong> and{' '}
              <strong className="text-foreground">PVC wall panels</strong> — we transform ordinary
              spaces into extraordinary sanctuaries using only premium materials.
            </p>

            {/* Trust Items */}
            <div className="flex flex-wrap gap-3 pt-2">
              {trustItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-4 py-2.5 border border-foreground/10 bg-foreground/[0.03] text-center min-w-[90px] transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <p className="text-sm font-semibold text-foreground">
                    {item.stat}
                  </p>
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-serif text-accent">
                False Ceiling &amp; Interior Services Across Ghaziabad
              </h3>

              <div className="space-y-2 text-sm sm:text-base text-foreground/80">
                <p>
                  We specialise in{' '}
                  <strong className="text-foreground">PVC false ceiling</strong>,{' '}
                  <strong className="text-foreground">gypsum false ceiling</strong>,{' '}
                  <strong className="text-foreground">POP false ceiling</strong>,{' '}
                  <strong className="text-foreground">grid false ceiling</strong>,{' '}
                  <strong className="text-foreground">modular kitchen</strong> installation,{' '}
                  <strong className="text-foreground">custom almirah &amp; wardrobe</strong>,{' '}
                  <strong className="text-foreground">wooden flooring</strong>,{' '}
                  <strong className="text-foreground">PVC wall panels</strong>,{' '}
                  <strong className="text-foreground">gypsum board partitions</strong> and{' '}
                  <strong className="text-foreground">steel / SS door work</strong> — serving
                  Ghaziabad&apos;s most prestigious localities:
                </p>

                {/* Localities */}
                <ul className="space-y-2 mt-3">
                  {localities.map((loc, index) => (
                    <li
                      key={loc.place}
                      className={`flex items-start gap-3 transition-all duration-700 ${
                        isVisible
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>
                        <strong>{loc.place}</strong> – {loc.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-foreground/20 space-y-3">
              <p className="text-sm text-foreground/70">
                Every project is a testament to our commitment to excellence, attention to detail,
                and your complete satisfaction — all at the lowest prices in Ghaziabad.
              </p>

              <p className="text-sm text-foreground/80 leading-relaxed">
                📞{' '}
                <a
                  href="tel:08006180090"
                  className="text-foreground font-medium underline underline-offset-2 hover:text-accent transition-colors"
                >
                  080061 80090
                </a>{' '}
                ·{' '}
                <a
                  href="https://brotherinterior.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium underline underline-offset-2 hover:text-accent transition-colors"
                >
                  brotherinterior.com
                </a>{' '}
                · RC 60/2, Lok Priya Vihar, Khora Colony, Ghaziabad — 201020
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}