'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  '🌍 Surveillance à Distance',
  '☀️ Caméras Solaires',
  '📡 Connexion Wi-Fi Nationale',
  "🔒 Contrôle d'Accès à Distance",
  '📞 Support Multilingue',
]

export default function InternationalCTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      })
      gsap.fromTo(rightRef.current, { x: 50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'var(--fiat-dark)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Glow orb */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%', pointerEvents: 'none',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(201,162,39,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <div className="container-fiat" style={{ position: 'relative', zIndex: 1 }}>
        {/* 2-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}>
          {/* Left — Text */}
          <div ref={leftRef}>
            <div className="section-label">Pour les Investisseurs Étrangers</div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              color: 'var(--fiat-text)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginTop: '8px',
              marginBottom: '24px',
            }}>
              Vous Investissez au
              <br />
              <span className="text-gradient">Burkina Faso ?</span>
            </h2>
            <p style={{ color: 'var(--fiat-muted)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '28px' }}>
              Que vous soyez en Europe, en Amérique ou en Asie, nous sécurisons vos chantiers,
              protégeons vos biens et connectons vos équipes. Nos caméras solaires Hikvision
              transmettent en HD 24h/24, même là où il n&rsquo;y a pas d&rsquo;électricité.
            </p>

            {/* Feature pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
              {FEATURES.map((feat) => (
                <span
                  key={feat}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    background: 'rgba(201,162,39,0.08)',
                    border: '1px solid rgba(201,162,39,0.2)',
                    color: 'var(--fiat-gold)',
                  }}
                >
                  {feat}
                </span>
              ))}
            </div>

            <a
              href="/contact"
              className="btn-primary"
              style={{ padding: '16px 40px', fontSize: '1rem', display: 'inline-flex' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.64 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91A16 16 0 0 0 14 16l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Obtenir un audit gratuit
            </a>
          </div>

          {/* Right — Image card */}
          <div ref={rightRef}>
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(201,162,39,0.2)',
                height: '420px',
              }}
            >
              <Image
                src="/images/remote-monitoring.jpg"
                alt="Surveillance à distance depuis l'étranger"
                fill
                style={{ objectFit: 'cover' }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,11,15,0.85) 0%, transparent 50%)',
              }} />
              {/* Bottom status badge */}
              <div
                style={{
                  position: 'absolute', bottom: '24px', left: '24px', right: '24px',
                  padding: '16px 20px',
                  borderRadius: '8px',
                  background: 'rgba(10,11,15,0.88)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(201,162,39,0.2)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#4ADE80', boxShadow: '0 0 8px #4ADE80',
                    flexShrink: 0,
                    animation: 'glow-pulse 2s ease-in-out infinite',
                  }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--fiat-text)' }}>
                    Surveillance en temps réel — Chantier actif
                  </span>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--fiat-muted)', paddingLeft: '18px' }}>
                  Ouagadougou, Burkina Faso · Caméra Hikvision DS-2CD2T47G2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

