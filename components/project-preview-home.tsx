'use client'
 
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
 
const FEATURED = [
  {
    id: 1,
    title: 'False Ceiling',
    subtitle: 'PVC · Gypsum · POP · Grid',
    filterKey: 'false-ceiling',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
    image: '/falseCeiling1.jpg',
  },
  {
    id: 2,
    title: 'Modular Kitchen',
    subtitle: 'Contemporary & Premium Finishes',
    filterKey: 'modular-kitchen',
    gradient: 'linear-gradient(135deg, #4a1942 0%, #c74b50 100%)',
    image: '/modularKitchen1.jpg',
  },
  {
    id: 3,
    title: 'Wardrobe & Almirah',
    subtitle: 'Custom Storage Solutions',
    filterKey: 'wardrobe',
    gradient: 'linear-gradient(135deg, #5C4033 0%, #8B6F47 100%)',
    image: '/almirah1.jpg',
  },
  {
    id: 4,
    title: 'Wall Panels & Flooring',
    subtitle: 'PVC Panels · Wooden Flooring',
    filterKey: 'wall-panel',
    gradient: 'linear-gradient(135deg, #0b486b 0%, #f56217 100%)',
    image: '/pvcWallPanel1.jpg',
  },
]
 
export default function ServicesPreview() {
  const [hovered, setHovered] = useState<number | null>(null)
 
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
 
        {/* Header row */}
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs tracking-widest text-muted-foreground uppercase">What We Do</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-foreground leading-tight">
              Our Services
            </h2>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border border-foreground/30 text-foreground/70 hover:bg-foreground hover:text-background transition-all duration-300 text-xs tracking-widest uppercase"
            >
              View All Projects
              <ArrowUpRight size={13} />
            </Link>
          </motion.div>
        </div>
 
        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
          {FEATURED.map((item, i) => (
            <Link key={item.id} href={`/portfolio?category=${item.filterKey}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative overflow-hidden cursor-pointer group"
                style={{ height: '220px' }}
              >
                {/* Background */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ background: item.gradient }}
                />
 
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
 
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-all duration-500" />
 
                {/* Hover border */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/25 transition-all duration-500" />
 
                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end z-10">
                  <motion.div
                    animate={{ y: hovered === item.id ? 0 : 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-[10px] text-white/60 uppercase tracking-widest mb-1 hidden sm:block">
                      {item.subtitle}
                    </p>
                    <h3 className="text-sm sm:text-base font-serif text-white leading-snug">
                      {item.title}
                    </h3>
                  </motion.div>
 
                  {/* Arrow icon on hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: hovered === item.id ? 1 : 0, x: hovered === item.id ? 0 : -6 }}
                    transition={{ duration: 0.25 }}
                    className="mt-2"
                  >
                    <ArrowUpRight size={16} className="text-white/80" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
 
        {/* Mobile CTA */}
        <div className="mt-6 flex sm:hidden justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 text-foreground/70 hover:bg-foreground hover:text-background transition-all duration-300 text-xs tracking-widest uppercase"
          >
            View All Projects
            <ArrowUpRight size={13} />
          </Link>
        </div>
 
      </div>
    </section>
  )
}
 