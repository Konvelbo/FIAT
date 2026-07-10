'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TESTIMONIALS = [
  {
    name: 'Jean-Marc Durand',
    title: 'Promoteur immobilier',
    location: 'Paris, France',
    flag: '🇫🇷',
    avatar: 'JD',
    rating: 5,
    text: "Grâce aux caméras solaires de FIAT, je surveille l'avancement de mon complexe résidentiel à Ouagadougou depuis mon bureau à Paris. L'image est HD, le signal ne coupe jamais. Une tranquillité d'esprit inestimable pour mes 400 millions d'investissement.",
  },
  {
    name: 'Moussa Traoré',
    title: 'Directeur Général',
    location: 'Ouagadougou, Burkina Faso',
    flag: '🇧🇫',
    avatar: 'MT',
    rating: 5,
    text: "FIAT a déployé notre réseau Wi-Fi complet sur les 3 niveaux de notre siège social. Rapidité d'exécution, équipe très professionnelle et suivi impeccable. Le signal couvre chaque recoin du bâtiment. Je les recommande sans hésitation.",
  },
  {
    name: 'Sarah Johnson',
    title: 'Responsable Sécurité Régionale',
    location: 'Washington D.C., USA',
    flag: '🇺🇸',
    avatar: 'SJ',
    rating: 5,
    text: "We had FIAT install a comprehensive surveillance system with biometric access control for our regional office. The level of expertise and the quality of Hikvision equipment they deployed exceeded all our expectations. Highly professional team.",
  },
]

export default function TestimonialsSection() {
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
          y: 0, opacity: 1, duration: 0.8, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 82%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'var(--fiat-black)' }}
    >
      <div className="container-fiat">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            Témoignages
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em' }}>
            Ce que Disent Nos{' '}
            <span className="text-gradient">Clients</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(201,162,39,0.3)'
                el.style.transform = 'translateY(-6px)'
                el.style.boxShadow = '0 24px 48px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--fiat-gold)' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p style={{ color: 'rgba(232,234,240,0.85)', fontSize: '0.95rem', lineHeight: 1.78, fontStyle: 'italic', flex: 1 }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid var(--fiat-border)' }}>
                <div
                  style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: 700, flexShrink: 0,
                    background: 'rgba(201,162,39,0.15)',
                    color: 'var(--fiat-gold)',
                    border: '1px solid rgba(201,162,39,0.3)',
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--fiat-text)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--fiat-muted)', marginTop: '2px' }}>
                    {t.title} · {t.flag} {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
