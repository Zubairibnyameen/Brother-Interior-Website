'use client'

import { Sparkles, Award, Zap } from 'lucide-react'

export default function WhyBrotherInterior() {
  const features = [
    {
      icon: Award,
      title: 'Premium Materials',
      description: 'Italian marble, bespoke woodwork, and high-end finishes sourced globally.'
    },
    {
      icon: Sparkles,
      title: 'Master Craftsmanship',
      description: 'Expert artisans with decades of experience delivering flawless execution.'
    },
    {
      icon: Zap,
      title: 'Personalized Design',
      description: '3D visualization and complete customization to match your vision perfectly.'
    },
  ]

  return (
    <section id="why-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Why Choose Brother Interior?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We combine luxury design with exceptional quality to create spaces that inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Icon size={28} className="text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
