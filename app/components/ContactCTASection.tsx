'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactCTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-cta-inner',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'var(--fiat-black)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Gold glow background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201,162,39,0.07) 0%, transparent 70%)',
      }} />

      <div className="container-fiat" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="contact-cta-inner"
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            textAlign: 'center',
            background: 'rgba(201,162,39,0.04)',
            border: '1px solid rgba(201,162,39,0.25)',
            borderRadius: '12px',
            padding: '72px 48px',
          }}
        >
          <div className="section-label" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '16px' }}>
            Passons à l&rsquo;Action
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900,
            color: 'var(--fiat-text)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}>
            Prêt à Transformer
            <br />
            <span className="text-gradient">Votre Infrastructure ?</span>
          </h2>

          <p style={{
            maxWidth: '520px',
            margin: '0 auto 40px',
            lineHeight: 1.75,
            color: 'var(--fiat-muted)',
            fontSize: '1.05rem',
          }}>
            Contactez nos experts pour un audit gratuit et une proposition personnalisée.
            Nous intervenons partout au Burkina Faso.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '16px 44px', fontSize: '1.05rem' }}>
              Demander un devis gratuit
            </Link>
            <a
              href="tel:+22674331306"
              className="btn-secondary"
              style={{ padding: '16px 44px', fontSize: '1.05rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.64 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91A16 16 0 0 0 14 16l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +226 74 33 13 06
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

