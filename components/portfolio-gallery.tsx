'use client'
export const dynamic = "force-dynamic";

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', 'Residential', 'Commercial', 'Educational']

  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Apartment - Indirapuram',
      category: 'Residential',
      description: 'Premium interior with Italian marble, custom modular kitchen, and ambient lighting.',
      aspect: 'square'
    },
    {
      id: 2,
      title: 'Executive Office - Ghaziabad',
      category: 'Commercial',
      description: 'Contemporary office design with professional workspaces and luxury finishes.',
      aspect: 'wide'
    },
    {
      id: 3,
      title: 'Luxury Villa - Vasundhara',
      category: 'Residential',
      description: 'Complete home transformation with marble flooring, bespoke wardrobes, and TV panels.',
      aspect: 'tall'
    },
    {
      id: 4,
      title: 'School Administration - Raj Nagar',
      category: 'Educational',
      description: 'Professional educational space with elegant design and quality materials.',
      aspect: 'square'
    },
    {
      id: 5,
      title: 'Corporate Suite - Kaushambi',
      category: 'Commercial',
      description: 'High-end corporate interior with premium materials and sophisticated design.',
      aspect: 'square'
    },
    {
      id: 6,
      title: 'Family Home - Crossings Republik',
      category: 'Residential',
      description: 'Residential marvel featuring modular kitchen and custom ceiling design.',
      aspect: 'wide'
    },
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const getGridSpan = (aspect: string) => {
    switch (aspect) {
      case 'wide':
        return 'md:col-span-2'
      case 'tall':
        return 'md:row-span-2'
      default:
        return 'md:col-span-1'
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Explore our collection of premium interior design projects across residential, commercial, and educational spaces.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`${getGridSpan(project.aspect)} group relative overflow-hidden rounded-xl border border-border hover:border-accent transition-all duration-300 bg-gradient-to-br from-secondary to-background cursor-pointer hover:shadow-lg`}
            >
              {/* Placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm group-hover:text-foreground/90 transition-colors">
                  {project.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
