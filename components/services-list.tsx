'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesList() {
  const services = [
    {
      title: 'False Ceilings',
      description: 'Transform your interiors with elegant false ceiling solutions. We offer modern designs with ambient lighting, acoustic properties, and premium finishes. Perfect for creating visual interest and concealing utilities.',
      benefits: ['Ambient Lighting Integration', 'Acoustic Insulation', 'Modern Designs', 'Complete Customization'],
      materials: 'POP, Gypsum, Premium Paints'
    },
    {
      title: 'Modular Kitchens',
      description: 'Luxury kitchens designed for functionality and aesthetics. Our custom modular kitchens feature Italian marble countertops, premium cabinetry, smart storage solutions, and state-of-the-art appliances.',
      benefits: ['Italian Marble Tops', 'Smart Storage', 'Premium Cabinetry', 'Custom Designs'],
      materials: 'Italian Marble, German Hardware, Premium Wood'
    },
    {
      title: 'Wardrobes & Storage',
      description: 'Bespoke wardrobe solutions that maximize your space while adding luxury. Our custom wardrobes combine premium materials with intelligent design, offering perfect organization and stunning aesthetics.',
      benefits: ['Space Optimization', 'Premium Finishes', 'Intelligent Design', 'Full Customization'],
      materials: 'Premium Plywood, German Hardware, Italian Veneers'
    },
    {
      title: 'TV Panels',
      description: 'Statement TV wall installations that become a focal point of your space. We design stunning TV panels with integrated ambient lighting, cable management, and premium finishes.',
      benefits: ['Ambient Lighting', 'Cable Management', 'Statement Design', 'Premium Materials'],
      materials: 'Stone, Wood Veneers, LED Lighting'
    },
    {
      title: 'Electrical & Stonework',
      description: 'Complete electrical solutions and premium stone installations for lasting quality. From wiring to stone finishes, we ensure professional execution with attention to detail.',
      benefits: ['Professional Wiring', 'Premium Stones', 'Quality Craftsmanship', 'Durability'],
      materials: 'Italian Marble, Granite, Premium Electrical Components'
    },
    {
      title: 'Complete Interior Design',
      description: 'End-to-end interior design and execution services for residential and commercial spaces. From consultation to final handover, we manage every aspect of your project.',
      benefits: ['Consultation to Execution', 'Project Management', 'Quality Assurance', 'Timely Delivery'],
      materials: 'Premium Materials, Expert Craftsmanship'
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
            Our Services
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive luxury interior design and execution services with premium materials and master craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-b border-border pb-12 last:border-b-0"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left - Title & Description */}
                <div className="md:col-span-2">
                  <h2 className="text-4xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">
                      Key Benefits
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <ChevronRight className="text-accent flex-shrink-0" size={18} />
                          <span className="text-foreground/80">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Materials & CTA */}
                <div>
                  <div className="bg-secondary/50 border border-accent/20 rounded-xl p-6 sticky top-24">
                    <h3 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">
                      Premium Materials
                    </h3>
                    <p className="text-foreground/70 mb-6">
                      {service.materials}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors group/btn"
                    >
                      Get Quote
                      <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 border border-accent/20 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-primary mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's discuss your interior design needs and create something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
