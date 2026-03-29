'use client'

import { CheckCircle, MessageSquare, Lightbulb, Hammer, Hand } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProcessTimeline() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Free Consultation',
      description:
        'We begin with an in-depth consultation at your site in Ghaziabad, Noida, Delhi or Gurgaon — understanding your vision, budget and requirements for false ceiling, modular kitchen, wardrobe or any home interior work.',
      details: ['Site Visit & Analysis', 'Requirement Gathering', 'Budget Discussion', 'Design Preference Assessment'],
    },
    {
      icon: Lightbulb,
      title: '3D Visualization',
      description:
        'Our design team creates detailed 3D visualizations of your space — from PVC / gypsum false ceiling layouts to full modular kitchen designs — so you see the complete result before execution begins.',
      details: ['3D False Ceiling Design', 'Multiple Concepts', 'Material Selection', 'Client Approval'],
    },
    {
      icon: Hammer,
      title: 'Expert Execution',
      description:
        'Our master craftsmen execute every detail with precision — false ceiling installation, modular kitchen fitting, wardrobe work, wooden flooring, PVC wall panels and steel / SS work — using premium materials at lowest prices.',
      details: ['Material Procurement', 'Site Preparation', 'Expert Installation', 'Quality Checks'],
    },
    {
      icon: Hand,
      title: 'Final Handover',
      description:
        'We conduct a comprehensive handover of your completed interior project across Ghaziabad and Delhi NCR. All work is inspected, cleaned and documented with maintenance guidelines for long-term care.',
      details: ['Final Inspection', 'Cleaning & Setup', 'Documentation Handover', 'Maintenance Training'],
    },
  ]

  const whyUs = [
    {
      title: 'Transparent Communication',
      desc: 'Regular updates at every stage — from false ceiling measurement to final handover — ensure you are always informed and satisfied with progress across Ghaziabad, Noida & Delhi.',
    },
    {
      title: 'Quality Assurance',
      desc: 'Multiple checkpoints ensure premium PVC, gypsum, POP materials and master craftsmanship throughout every false ceiling, modular kitchen and interior project.',
    },
    {
      title: 'Timely Delivery',
      desc: 'Efficient project management ensures your false ceiling, modular kitchen or full home renovation in Ghaziabad is completed within the agreed timeline — every time.',
    },
  ]

  /* ── Shared variants ── */
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show:   { opacity: 1, y: 0 },
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -48 },
    show:   { opacity: 1, x: 0 },
  }

  const fadeRight = {
    hidden: { opacity: 0, x: 48 },
    show:   { opacity: 1, x: 0 },
  }

  return (
    <section
      className="py-20 overflow-hidden"
      aria-label="Brother Interior — Home Interior & False Ceiling Work Process in Ghaziabad"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-widest text-muted-foreground uppercase mb-4"
          >
            Ghaziabad · Delhi · Noida · Greater Noida · Gurgaon
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4"
          >
            Our Process
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="text-base sm:text-lg text-accent font-medium tracking-wide mb-4"
          >
            How Brother Interior Delivers False Ceiling &amp; Home Interior Work in Ghaziabad
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            A structured 4-step approach ensuring excellence at every stage — from the first
            free site consultation to the final handover of your{' '}
            <strong className="text-foreground/80">false ceiling</strong>,{' '}
            <strong className="text-foreground/80">modular kitchen</strong>,{' '}
            <strong className="text-foreground/80">wardrobe</strong> or full home interior
            transformation.
          </motion.p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                className="relative"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ staggerChildren: 0.14 }}
              >
                <div className="grid md:grid-cols-5 gap-8 items-stretch">

                  {/* ── Icon bubble ── */}
                  <motion.div
                    variants={fadeLeft}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="flex items-center justify-center"
                  >
                    <div className="relative group">
                      {/* Outer pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-accent/20"
                        animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0.15, 0.6] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      {/* Second ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-accent/30"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      />

                      {/* Icon circle */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 6 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="relative w-24 h-24 rounded-full bg-accent flex items-center justify-center cursor-default shadow-lg"
                      >
                        <Icon className="text-accent-foreground" size={44} />
                      </motion.div>

                      {/* Step number badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 400, delay: 0.3 }}
                        className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-md"
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* ── Card ── */}
                  <motion.div
                    variants={isEven ? fadeRight : fadeLeft}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="md:col-span-4"
                  >
                    <motion.div
                      whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.18)' }}
                      transition={{ duration: 0.25 }}
                      className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-colors duration-300 h-full"
                    >
                      <h3 className="text-3xl font-serif font-bold text-primary mb-3">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Detail chips */}
                      <div className="grid grid-cols-2 gap-4">
                        {step.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="text-accent flex-shrink-0" size={18} />
                            <span className="text-foreground/80">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* ── Animated connector line ── */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="hidden md:block absolute left-12 top-full w-1 h-12 bg-gradient-to-b from-accent to-transparent ml-10"
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* ── Why This Process ── */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.13 }}
        >
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: '0 16px 32px -8px rgba(0,0,0,0.14)' }}
              className="bg-secondary/50 rounded-xl p-8 border border-border hover:border-accent transition-colors duration-300 cursor-default"
            >
              {/* Animated accent line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '2.5rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="h-0.5 bg-accent mb-4"
              />
              <h3 className="font-serif font-bold text-primary text-xl mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── SEO footer CTA ── */}
        <motion.div
          className="mt-16 text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to start your{' '}
            <strong className="text-foreground">false ceiling</strong>,{' '}
            <strong className="text-foreground">modular kitchen</strong> or{' '}
            <strong className="text-foreground">home renovation</strong> project in{' '}
            <strong className="text-foreground">Ghaziabad</strong>?{' '}
            Brother Interior — rated{' '}
            <strong className="text-foreground">5.0 ★ across 39 Google reviews</strong> —
            offers free site visits across Indirapuram, Vasundhara, Raj Nagar, Khora Colony,
            Noida, Delhi and Gurgaon.
          </p>
          <p className="text-sm">
            📞{' '}
            <a
              href="tel:08006180090"
              className="text-foreground font-semibold underline underline-offset-2 hover:text-accent transition-colors"
            >
              080061 80090
            </a>
            {' '}·{' '}
            <a
              href="https://brotherinterior.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-semibold underline underline-offset-2 hover:text-accent transition-colors"
            >
              brotherinterior.com
            </a>
            {' '}· RC 60/2, Lok Priya Vihar, Khora Colony, Ghaziabad — 201020
          </p>
        </motion.div>

      </div>
    </section>
  )
}