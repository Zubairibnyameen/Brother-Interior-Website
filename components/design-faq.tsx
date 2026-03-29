'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface AccordionProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ item, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="border border-border transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 sm:py-5 flex items-start justify-between gap-4 hover:bg-secondary transition-colors duration-300 touch-target text-left"
      >
        <span className="font-semibold text-foreground text-sm sm:text-base pr-4">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-accent transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 sm:py-5 border-t border-border bg-secondary/30 text-foreground/80 text-sm sm:text-base leading-relaxed space-y-3 animate-fade-in">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function DesignFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'How long does a modular kitchen installation take?',
      answer:
        'A typical modular kitchen installation takes 10-15 days from start to finish, including site preparation, installation, and finishing touches. The timeline depends on kitchen size and complexity. We provide a detailed schedule before beginning work.',
    },
    {
      question: 'Do you provide 3D designs and visualizations?',
      answer:
        'Yes! We provide comprehensive 3D floor plans and photorealistic visualizations before any construction begins. This allows you to see your space in detail and make informed decisions before we start work.',
    },
    {
      question: 'What warranty do you provide on your work?',
      answer:
        'We offer a 5-year comprehensive warranty on all design work and installations. This covers materials, craftsmanship, and all fittings. Extended warranties are available for premium projects.',
    },
    {
      question: 'Can you work on flats in Indirapuram and Vasundhara?',
      answer:
        'Absolutely! We specialize in luxury residential interiors across Indirapuram, Vasundhara, Raj Nagar, and surrounding premium localities. We understand the unique requirements of modern apartment living.',
    },
    {
      question: 'What is your payment terms and project timeline?',
      answer:
        'Typical payment is structured in three phases: 30% deposit upon agreement, 40% mid-project, and 30% upon completion. Project timelines vary based on scope but are always confirmed in writing before work begins.',
    },
    {
      question: 'Do you handle commercial office interior design?',
      answer:
        'Yes, we have extensive experience with commercial spaces including office interiors, retail stores, and educational institutions. We understand functionality combined with aesthetics for professional environments.',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-xs sm:text-sm tracking-widest text-muted-foreground uppercase">
              Questions?
            </span>
          </div>
          <h2 className="text-center">Design & Process FAQ</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Common questions about our design process, timelines, and service areas
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-secondary border border-border text-center space-y-4">
          <p className="text-foreground/80 text-sm sm:text-base">
            Didn't find what you're looking for?
          </p>
          <a
            href="https://wa.me/918006180090?text=Hi%20Brother%20Interior%2C%20I%27m%20interested%20in%20a%20luxury%20interior%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent text-foreground hover:bg-accent/90 transition-all duration-300 text-sm font-semibold touch-target"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
