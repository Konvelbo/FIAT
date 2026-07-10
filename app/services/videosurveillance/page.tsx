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
  { icon: '☀️', title: 'Caméras Solaires Autonomes', desc: 'Nos caméras Hikvision alimentées par panneau solaire fonctionnent 24h/24 sans électricité. Idéales pour vos chantiers et zones rurales.' },
  { icon: '🌍', title: 'Surveillance à Distance', desc: 'Accédez à vos caméras depuis n\'importe où dans le monde via l\'application Hikvision iVMS-4200 ou le portail web sécurisé.' },
  { icon: '🎥', title: 'Qualité HD & 4K', desc: 'Images Ultra HD day & night, vision nocturne infrarouge, détection de mouvement intelligente et reconnaissance de plaque.' },
  { icon: '💾', title: 'Stockage Sécurisé', desc: 'Enregistrement sur NVR local et/ou cloud. Archives sécurisées jusqu\'à 90 jours selon votre besoin.' },
  { icon: '🔔', title: 'Alertes en Temps Réel', desc: 'Notifications push, emails et SMS instantanés lors d\'intrusions, mouvements suspects ou tentatives d\'effraction.' },
  { icon: '🏗️', title: 'Surveillance de Chantiers', desc: 'Solution spécialement adaptée aux investisseurs étrangers souhaitant suivre l\'avancement de leurs constructions en temps réel.' },
]

export default function VideoSurveillancePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const solarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.3 })
      if (featuresRef.current) {
        gsap.fromTo(Array.from(featuresRef.current.children), { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: featuresRef.current, start: 'top 82%', once: true },
        })
      }
      if (solarRef.current) {
        gsap.fromTo(solarRef.current, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: solarRef.current, start: 'top 82%', once: true },
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
                  <div className="section-label" style={{ marginBottom: 0 }}>Vidéosurveillance</div>
                  <span style={{ padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, background: 'rgba(201,162,39,0.1)', color: 'var(--fiat-gold)', border: '1px solid rgba(201,162,39,0.2)' }}>Équipements Hikvision</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--fiat-text)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  Surveillez Votre
                  <br />
                  <span className="text-gradient">Chantier</span> Depuis Paris ou New York
                </h1>
                <p style={{ color: 'var(--fiat-muted)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '32px' }}>
                  Nos caméras Hikvision, y compris les modèles fonctionnant à l&rsquo;énergie solaire,
                  vous permettent de surveiller vos investissements au Burkina Faso en temps réel,
                  24h/24, depuis n&rsquo;importe quel endroit dans le monde.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                  {['4K Ultra HD', 'Énergie Solaire', 'Vision Nocturne', 'IA Intégrée', 'Accès Mobile'].map(tag => (
                    <span key={tag} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, background: 'rgba(201,162,39,0.05)', color: 'var(--fiat-gold)', border: '1px solid rgba(201,162,39,0.2)' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: '14px 32px' }}>Protéger mon chantier</Link>
                  <Link href="/contact" className="btn-secondary" style={{ padding: '14px 32px' }}>Demander une démo</Link>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '400px', border: '1px solid rgba(201,162,39,0.3)' }}>
                  <Image src="/images/solar-camera.jpg" alt="Caméra solaire Hikvision au Burkina Faso" fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,11,15,0.85) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 8px #4ADE80' }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--fiat-text)' }}>Actif — Alimentation solaire</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--fiat-muted)' }}>Hikvision DS-2CD2T47G2 · 4 MP · IR 80m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solar Focus */}
        <section className="section-padding" style={{ background: 'var(--fiat-dark)' }}>
          <div className="container-fiat">
            <div ref={solarRef} style={{
              background: 'rgba(201,162,39,0.03)', border: '1px solid rgba(201,162,39,0.2)',
              borderRadius: '12px', padding: '48px',
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center'
            }}>
              <div>
                <div className="section-label">La Différence FIAT</div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: 'var(--fiat-text)', lineHeight: 1.15, marginTop: '8px', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                  Caméras Solaires :<br />
                  <span className="text-gradient">Zéro Électricité, 100% Sécurité</span>
                </h2>
                <p style={{ color: 'var(--fiat-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
                  Au Burkina Faso, les coupures d&rsquo;électricité sont fréquentes et les zones de chantier
                  souvent sans raccordement. Nos systèmes solaires Hikvision contournent ce problème :
                  la caméra est autonome, stocke l&rsquo;énergie solaire et transmet en permanence via 4G/Wi-Fi.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
                  {[
                    'Panneau solaire intégré 30W',
                    'Batterie 10 000 mAh — autonomie 72h sans soleil',
                    'Transmission 4G LTE intégrée',
                    'Résistance IP67 — chaleur, poussière, pluie',
                    'Installation en 2 heures, n\'importe où',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--fiat-gold)" strokeWidth="3" style={{ flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ color: 'var(--fiat-text)', opacity: 0.9 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Autonomie', value: '72h sans soleil', icon: '🔋' },
                  { label: 'Résolution', value: 'Jusqu\'à 8 MP / 4K', icon: '📷' },
                  { label: 'Portée IR', value: 'Jusqu\'à 100m', icon: '🌙' },
                  { label: 'Connexion', value: 'Wi-Fi + 4G LTE', icon: '📡' },
                ].map((spec, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)', padding: '16px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.5rem' }}>{spec.icon}</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--fiat-muted)' }}>{spec.label}</span>
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--fiat-gold)' }}>{spec.value}</span>
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
              <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>Nos Prestations</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em' }}>
                Tout ce dont Vous <span className="text-gradient">Avez Besoin</span>
              </h2>
            </div>
            <div ref={featuresRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)',
                  padding: '24px', borderRadius: '8px', transition: 'transform 0.3s, border-color 0.3s'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,162,39,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
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
              Sécurisez Votre <span className="text-gradient">Investissement Aujourd&rsquo;hui</span>
            </h2>
            <p style={{ maxWidth: '512px', margin: '0 auto 32px', color: 'var(--fiat-muted)', lineHeight: 1.6 }}>
              Installation sous 48h à Ouagadougou, délais adaptés pour les autres régions.
            </p>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', padding: '16px 48px', fontSize: '1.05rem' }}>
              Installer mes caméras
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

