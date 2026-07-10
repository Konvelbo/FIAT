'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo(badgeRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
        .fromTo(h1Ref.current, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .fromTo(subtextRef.current, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .fromTo(ctaRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .fromTo(scrollIndicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.1')

      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '120px',
      }}
    >
      {/* Background image */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          top: '-10%',
          bottom: '-10%',
          willChange: 'transform',
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(10,11,15,0.65) 0%, rgba(10,11,15,0.3) 40%, rgba(10,11,15,0.88) 100%)',
        }}
      />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', zIndex: 1, pointerEvents: 'none',
        top: '15%', right: '8%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,162,39,0.18) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', zIndex: 1, pointerEvents: 'none',
        bottom: '20%', left: '5%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(26,110,255,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      {/* Content */}
      <div className="container-fiat" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Badge */}
        <div
          ref={badgeRef}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '50px',
            marginBottom: '32px',
            background: 'rgba(201,162,39,0.1)',
            border: '1px solid rgba(201,162,39,0.3)',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: 'var(--fiat-gold)',
            letterSpacing: '0.05em',
          }}
        >
          <span>🇧🇫</span>
          <span>Fondé en 2016 · Ouagadougou, Burkina Faso</span>
        </div>

        {/* Headline */}
        <h1
          ref={h1Ref}
          style={{
            fontSize: 'clamp(2rem, 5vw, 4.2rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.12,
            color: '#ffffff',
            textShadow: '0 2px 30px rgba(0,0,0,0.5)',
            marginBottom: '24px',
          }}
        >
          La Technologie qui Sécurise
          <br />
          <span className="text-gradient">Vos Investissements</span>
          <br />
          au Cœur de l&rsquo;Afrique
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          style={{
            maxWidth: '640px',
            margin: '0 auto 40px',
            lineHeight: 1.75,
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(232,234,240,0.8)',
          }}
        >
          Des réseaux Wi-Fi professionnels à la vidéosurveillance avancée —
          FIAT déploie les meilleurs équipements pour connecter et protéger vos projets partout au Burkina Faso depuis 2016.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <Link href="/contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Discutons de votre projet
          </Link>
          <Link href="#services" className="btn-secondary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
            Découvrir nos services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll indicator — positioned with pointer-events none to not overlap buttons */}
      <div
        ref={scrollIndicatorRef}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'none',
        }}
      >
        <span style={{ fontSize: '0.68rem', color: 'var(--fiat-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Défiler
        </span>
        <div
          style={{
            width: '24px',
            height: '40px',
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '10px',
              borderRadius: '4px',
              background: 'var(--fiat-gold)',
              animation: 'bounce-scroll 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  )
}
