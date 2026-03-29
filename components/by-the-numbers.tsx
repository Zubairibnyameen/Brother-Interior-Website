'use client'

import { useState, useEffect } from 'react'

interface Stat {
  number: number | string
  label: string
  suffix?: string
}

interface CounterProps {
  stat: Stat
}

function Counter({ stat }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const targetNumber =
    typeof stat.number === 'string'
      ? parseInt(stat.number.replace(/\D/g, '')) || 0
      : stat.number

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    const el = document.getElementById(stat.label)
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [stat.label])

  useEffect(() => {
    if (!hasAnimated) return

    let startTime: number
    let frameId: number
    const duration = 2000

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)

      // 🔥 smoother ease-out (premium feel)
      const easeOut = 1 - Math.pow(1 - progress, 4)

      const value = Math.floor(easeOut * targetNumber)
      setCount(value)

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [hasAnimated, targetNumber])

  return (
    <div
      id={stat.label}
      className="text-center space-y-2 py-8 sm:py-12"
    >
      <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-accent">
        {count}
        {stat.suffix && (
          <span className="text-3xl sm:text-4xl md:text-5xl">
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="text-foreground/80 text-sm sm:text-base font-medium">
        {stat.label}
      </p>
    </div>
  )
}

export default function ByTheNumbers() {
  const stats: Stat[] = [
    { number: 500, label: 'Completed Projects', suffix: '+' },
    { number: 12, label: 'Localities Served', suffix: '+' },
    { number: '100%', label: 'On-Time Delivery' },
    { number: 15, label: 'Years of Excellence', suffix: '+' },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-xs sm:text-sm tracking-widest text-muted-foreground uppercase">
              By The Numbers
            </span>
          </div>
          <h2 className="text-center">Our Track Record</h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-border bg-secondary/30 hover:border-accent transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Counter stat={stat} />
            </div>
          ))}
        </div>

        {/* Supporting text */}
        <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            These numbers represent our unwavering commitment to delivering excellence in every interior design project. Your satisfaction is our greatest achievement.
          </p>
        </div>
      </div>
    </section>
  )
}