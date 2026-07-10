'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedCounter from './AnimatedCounter'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  {
    end: 9, suffix: '+', label: "Années d'Expérience",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    end: 8, suffix: '', label: 'Experts Certifiés',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    end: 13, suffix: '', label: 'Régions Desservies',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    end: 500, suffix: '+', label: 'Projets Livrés',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return
      const cards = Array.from(cardsRef.current.children)
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--fiat-dark)',
        borderTop: '1px solid var(--fiat-border)',
        borderBottom: '1px solid var(--fiat-border)',
        padding: '80px 0',
      }}
    >
      <div className="container-fiat">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            Notre Impact
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em' }}>
            Des Chiffres qui Parlent{' '}
            <span className="text-gradient">d&rsquo;Eux-Mêmes</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}
        >
          {STATS.map((stat, i) => (
            <div key={i} className="stat-card">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  background: 'rgba(201,162,39,0.1)',
                  border: '1px solid rgba(201,162,39,0.2)',
                  color: 'var(--fiat-gold)',
                }}
              >
                {stat.icon}
              </div>
              <div className="stat-number text-gradient">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2} />
              </div>
              <p style={{ fontSize: '0.9rem', fontWeight: 500, marginTop: '8px', color: 'var(--fiat-muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}

