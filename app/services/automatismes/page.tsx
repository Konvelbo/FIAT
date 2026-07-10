'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  { icon: '👁️', title: 'Reconnaissance Faciale (Face ID)', desc: "Contrôle d'accès par reconnaissance faciale de précision. Aucune clé, aucun badge — votre visage est votre sésame." },
  { icon: '🖐️', title: 'Empreinte Digitale', desc: "Lecteurs d'empreintes digitales haute sécurité pour vos portes, coffres et zones d'accès restreint." },
  { icon: '📱', title: 'Contrôle à Distance', desc: "Ouvrez/fermez vos portes depuis votre smartphone depuis n'importe où dans le monde. Idéal pour les propriétaires expatriés." },
  { icon: '🏠', title: 'Domotique Complète', desc: "Gestion centralisée de l'éclairage, de la climatisation, des stores et de l'alimentation électrique de votre propriété." },
  { icon: '🔑', title: 'Accès Multi-Niveau', desc: "Définissez des droits d'accès granulaires par utilisateur, zone, horaire et jour. Audit trail complet." },
  { icon: '🚗', title: 'Portails & Barrières', desc: 'Automatisation de portails coulissants, barrières de parking et portes de garages avec télécommande et app mobile.' },
]

export default function AutomatimsesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.3 })
      if (featuresRef.current) {
        gsap.fromTo(Array.from(featuresRef.current.children), { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: featuresRef.current, start: 'top 82%', once: true },
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding" style={{ background: 'var(--fiat-black)', borderBottom: '1px solid var(--fiat-border)', paddingTop: '160px' }}>
          <div className="container-fiat">
            <div ref={heroRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div className="section-label" style={{ marginBottom: 0 }}>Automatismes & Sécurité</div>
                  <span style={{ padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, background: 'rgba(239,68,68,0.1)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>Domotique</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--fiat-text)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  Votre Maison,
                  <br />
                  <span className="text-gradient">Intelligente</span> et Sécurisée
                </h1>
                <p style={{ color: 'var(--fiat-muted)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '32px' }}>
                  Contrôlez votre propriété d&rsquo;un simple geste depuis n&rsquo;importe où dans le monde.
                  Reconnaissance faciale, empreinte digitale, domotique complète — FIAT transforme
                  vos bâtiments en espaces intelligents et ultra-sécurisés.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                  {['Face ID', 'Empreinte Digitale', 'App Mobile', 'Domotique', 'Télécommande'].map(tag => (
                    <span key={tag} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, background: 'rgba(239,68,68,0.05)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: '14px 32px' }}>Sécuriser ma propriété</Link>
                  <Link href="/contact" className="btn-secondary" style={{ padding: '14px 32px' }}>Demander un devis</Link>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '400px', border: '1px solid rgba(239,68,68,0.25)' }}>
                  <Image src="/images/faceid.jpg" alt="Contrôle d'accès biométrique Face ID" fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,11,15,0.85) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', top: '20px', left: '20px', padding: '8px 16px', borderRadius: '12px', fontSize: '0.875rem', fontWeight: 700, background: 'rgba(10,11,15,0.85)', border: '1px solid rgba(239,68,68,0.3)', color: '#F87171', backdropFilter: 'blur(12px)' }}>
                    ● Reconnaissance active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Remote control highlight */}
        <section className="section-padding" style={{ background: 'var(--fiat-dark)' }}>
          <div className="container-fiat">
            <div style={{
              background: 'rgba(201,162,39,0.03)', border: '1px solid rgba(201,162,39,0.2)',
              borderRadius: '12px', padding: '48px 32px', textAlign: 'center', maxWidth: '768px', margin: '0 auto'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📱</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 900, color: 'var(--fiat-text)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                Contrôlez Tout Depuis <span className="text-gradient">Votre Téléphone</span>
              </h2>
              <p style={{ color: 'var(--fiat-muted)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '32px' }}>
                Que vous soyez en France, aux États-Unis ou en Chine, vous pouvez ouvrir votre portail,
                vérifier qui entre dans votre propriété et contrôler toute votre domotique en temps réel,
                via une application sécurisée sur votre smartphone.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
                {[
                  { icon: '🔓', label: 'Ouvrir / Fermer' },
                  { icon: '👁️', label: 'Voir en direct' },
                  { icon: '💡', label: 'Éclairage' },
                  { icon: '🌡️', label: 'Température' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.875rem', marginBottom: '8px' }}>{item.icon}</div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--fiat-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding" style={{ background: 'var(--fiat-black)' }}>
          <div className="container-fiat">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>Nos Solutions</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em' }}>
                Sécurité <span className="text-gradient">Intelligente</span>
              </h2>
            </div>
            <div ref={featuresRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)',
                  padding: '24px', borderRadius: '8px', transition: 'transform 0.3s, border-color 0.3s'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(239,68,68,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--fiat-border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                  <div style={{ fontSize: '1.875rem', marginBottom: '12px' }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '8px', color: 'var(--fiat-text)' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--fiat-muted)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ background: 'var(--fiat-dark)', borderTop: '1px solid var(--fiat-border)' }}>
          <div className="container-fiat" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: 'var(--fiat-text)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Prêt à Sécuriser <span className="text-gradient">Votre Propriété ?</span>
            </h2>
            <p style={{ maxWidth: '512px', margin: '0 auto 32px', color: 'var(--fiat-muted)', lineHeight: 1.6 }}>
              Nos experts vous conseillent et installent votre système de sécurité intelligent en quelques jours.
            </p>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', padding: '16px 48px', fontSize: '1.05rem' }}>
              Démarrer maintenant
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

