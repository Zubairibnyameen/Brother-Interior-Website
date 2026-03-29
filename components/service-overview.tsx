'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServiceOverview() {
  const services = [
    {
      title: 'False Ceilings',
      description: 'Modern and elegant ceiling solutions with ambient lighting and acoustic properties.',
      accent: '#D4AF37'
    },
    {
      title: 'Modular Kitchens',
      description: 'Custom-designed kitchens with premium finishes, Italian marble, and smart storage.',
      accent: '#D4AF37'
    },
    {
      title: 'Wardrobes & Storage',
      description: 'Bespoke wardrobe solutions maximizing space with luxury materials and finishes.',
      accent: '#D4AF37'
    },
    {
      title: 'TV Panels',
      description: 'Statement TV wall installations with integrated ambient lighting and cable management.',
      accent: '#D4AF37'
    },
    {
      title: 'Electrical & Stonework',
      description: 'Complete electrical solutions and premium stone installations for lasting quality.',
      accent: '#D4AF37'
    },
    {
      title: 'Complete Interiors',
      description: 'End-to-end residential and commercial interior design and execution.',
      accent: '#D4AF37'
    },
  ]

  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Luxury Service Overview
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive interior design and execution services tailored to your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
              </div>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg"
            asChild
          >
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
