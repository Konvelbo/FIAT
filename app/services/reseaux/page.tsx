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
  { icon: '📡', title: 'Ubiquiti UniFi', desc: "Déploiement de points d'accès UniFi AP, switches et contrôleurs pour une gestion centralisée de votre réseau." },
  { icon: '🏢', title: 'Wi-Fi Entreprise', desc: 'Couverture totale de bâtiments, entrepôts, bureaux et campus. Haute densité, zéro zone morte.' },
  { icon: '🌐', title: 'Réseau Étendu (WAN)', desc: 'Liens inter-sites, VPN, routage avancé et redondance pour garantir la continuité de vos opérations.' },
  { icon: '🔒', title: 'Sécurité Réseau', desc: 'Firewalls, VLANs, authentification RADIUS et filtrage de contenu pour protéger votre infrastructure.' },
  { icon: '📊', title: 'Monitoring 24/7', desc: 'Supervision continue de votre réseau avec alertes en temps réel et rapports de performance.' },
  { icon: '🛠️', title: 'Maintenance & Support', desc: "Contrats de maintenance préventive et curative. Intervention rapide sur toute l'étendue du Burkina Faso." },
]

export default function ReseauxPage() {
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
                  <div className="section-label" style={{ marginBottom: 0 }}>Réseaux & Wi-Fi</div>
                  <span style={{ padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, background: 'rgba(26,110,255,0.1)', color: '#60A5FA', border: '1px solid rgba(26,110,255,0.2)' }}>Équipements Ubiquiti</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--fiat-text)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  Connectivité
                  <br />
                  <span className="text-gradient">Sans Faille</span> Sur Tout le Territoire
                </h1>
                <p style={{ color: 'var(--fiat-muted)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '32px' }}>
                  FIAT déploie des réseaux Wi-Fi professionnels de bout en bout avec les équipements
                  Ubiquiti de pointe. De la conception à la maintenance, nous garantissons une
                  connectivité robuste pour votre entreprise, partout au Burkina Faso.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                  {['UniFi AP', 'UniFi Switch', 'EdgeRouter', 'Wi-Fi 6', 'PoE+'].map(tag => (
                    <span key={tag} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, background: 'rgba(26,110,255,0.05)', color: '#60A5FA', border: '1px solid rgba(26,110,255,0.2)' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: '14px 32px' }}>Demander un audit réseau</Link>
                  <Link href="/contact" className="btn-secondary" style={{ padding: '14px 32px' }}>Voir nos références</Link>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '380px', border: '1px solid rgba(26,110,255,0.3)' }}>
                  <Image src="/images/network-tech.jpg" alt="Installation réseau Ubiquiti" fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,11,15,0.8) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', padding: '8px 16px', borderRadius: '12px', fontSize: '0.875rem', fontWeight: 700, background: 'rgba(26,110,255,0.15)', border: '1px solid rgba(26,110,255,0.3)', color: '#60A5FA', backdropFilter: 'blur(12px)' }}>
                    ✓ Spécialiste Ubiquiti
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding" style={{ background: 'var(--fiat-dark)' }}>
          <div className="container-fiat">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>Nos Prestations</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em' }}>
                Une Offre <span className="text-gradient">Complète</span>
              </h2>
            </div>
            <div ref={featuresRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)',
                  padding: '24px', borderRadius: '8px', transition: 'transform 0.3s, border-color 0.3s'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,110,255,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--fiat-border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                  <div style={{ fontSize: '1.875rem', marginBottom: '12px' }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '8px', color: 'var(--fiat-text)' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--fiat-muted)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding" style={{ background: 'var(--fiat-black)' }}>
          <div className="container-fiat">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>Notre Méthode</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em' }}>
                Déploiement en <span className="text-gradient">4 Étapes</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {[
                { step: '01', title: 'Audit & Étude', desc: 'Analyse de votre site, vos besoins et votre infrastructure existante.' },
                { step: '02', title: 'Conception', desc: 'Plan réseau détaillé, sélection du matériel et devis transparent.' },
                { step: '03', title: 'Déploiement', desc: 'Installation par nos techniciens certifiés dans les délais convenus.' },
                { step: '04', title: 'Suivi & Support', desc: 'Formation de vos équipes, monitoring continu et maintenance.' },
              ].map((p, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)', padding: '24px', borderRadius: '8px', textAlign: 'center', position: 'relative' }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'rgba(26,110,255,0.15)', lineHeight: 1, marginBottom: '12px' }}>{p.step}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '8px', color: 'var(--fiat-text)' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--fiat-muted)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ background: 'var(--fiat-dark)', borderTop: '1px solid var(--fiat-border)' }}>
          <div className="container-fiat" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: 'var(--fiat-text)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Besoin d&rsquo;un Réseau <span className="text-gradient">Performant ?</span>
            </h2>
            <p style={{ maxWidth: '512px', margin: '0 auto 32px', color: 'var(--fiat-muted)', lineHeight: 1.6 }}>
              Contactez-nous pour un audit gratuit de votre infrastructure réseau.
            </p>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', padding: '16px 48px', fontSize: '1.05rem' }}>
              Obtenir un audit gratuit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

