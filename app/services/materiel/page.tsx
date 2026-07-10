'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const CATEGORIES = [
  {
    title: 'Ordinateurs & Laptops',
    icon: '💻',
    color: 'rgba(26,110,255,0.06)',
    borderColor: 'rgba(26,110,255,0.25)',
    iconColor: '#60A5FA',
    items: ['PC Bureau professionnel', 'Laptops tous usages', 'Stations de travail', 'Mini PC & NUC', 'All-in-One'],
  },
  {
    title: 'Impression & Copie',
    icon: '🖨️',
    color: 'rgba(201,162,39,0.06)',
    borderColor: 'rgba(201,162,39,0.25)',
    iconColor: 'var(--fiat-gold)',
    items: ['Imprimantes laser mono & couleur', 'Photocopieurs multifonctions', "Imprimantes jet d'encre", 'Imprimantes grand format', 'Consommables & toners'],
  },
  {
    title: 'Composants & Pièces',
    icon: '⚙️',
    color: 'rgba(239,68,68,0.05)',
    borderColor: 'rgba(239,68,68,0.2)',
    iconColor: '#F87171',
    items: ['Processeurs Intel & AMD', 'RAM & Stockage SSD/HDD', 'Cartes graphiques', 'Alimentations & boîtiers', 'Cartes mères'],
  },
  {
    title: 'Périphériques',
    icon: '🖥️',
    color: 'rgba(34,197,94,0.05)',
    borderColor: 'rgba(34,197,94,0.2)',
    iconColor: '#4ADE80',
    items: ['Écrans & moniteurs', 'Claviers & souris', 'Webcams & casques', 'Onduleurs (UPS)', 'Hubs & câbles'],
  },
  {
    title: 'Serveurs & Stockage',
    icon: '🗄️',
    color: 'rgba(168,85,247,0.05)',
    borderColor: 'rgba(168,85,247,0.2)',
    iconColor: '#C084FC',
    items: ['Serveurs tour & rack', 'NAS & stockage réseau', 'Baies de stockage', 'Sauvegardes externes', 'Solutions cloud hybride'],
  },
  {
    title: 'Installation & Support',
    icon: '🛠️',
    color: 'rgba(251,146,60,0.05)',
    borderColor: 'rgba(251,146,60,0.2)',
    iconColor: '#FB923C',
    items: ['Montage & configuration', 'Migration de données', 'Formation des équipes', 'Maintenance préventive', 'Support technique on-site'],
  },
]

export default function MaterielPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const catsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.3 })
      if (catsRef.current) {
        gsap.fromTo(Array.from(catsRef.current.children), { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: catsRef.current, start: 'top 82%', once: true },
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
            <div ref={heroRef} style={{ maxWidth: '768px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="section-label" style={{ marginBottom: 0 }}>Matériel Informatique</div>
                <span style={{ padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, background: 'rgba(34,197,94,0.1)', color: '#4ADE80', border: '1px solid rgba(34,197,94,0.2)' }}>Vente & Installation</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--fiat-text)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                L&rsquo;Équipement
                <br />
                <span className="text-gradient">Professionnel</span> Livré et Installé
              </h1>
              <p style={{ color: 'var(--fiat-muted)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px', margin: '0 auto 32px' }}>
                FIAT vous propose une gamme complète d&rsquo;équipements informatiques professionnels,
                de la vente à l&rsquo;installation en passant par la configuration et la maintenance.
                Qualité garantie, prix compétitifs.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
                {['PC & Laptops', 'Imprimantes', 'Serveurs', 'Composants', 'Périphériques', 'Support'].map(tag => (
                  <span key={tag} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, background: 'rgba(34,197,94,0.05)', color: '#4ADE80', border: '1px solid rgba(34,197,94,0.2)' }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '14px 32px' }}>Demander un devis matériel</Link>
                <a href="tel:+22674331306" className="btn-secondary" style={{ padding: '14px 32px' }}>Nous appeler</a>
              </div>
            </div>
          </div>
        </section>

        {/* USPs */}
        <section style={{ background: 'var(--fiat-dark)', padding: '64px 0', borderTop: '1px solid var(--fiat-border)', borderBottom: '1px solid var(--fiat-border)' }}>
          <div className="container-fiat">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {[
                { icon: '✅', title: 'Garantie Officielle', desc: 'Tous nos produits sont sous garantie constructeur' },
                { icon: '🚚', title: 'Livraison Rapide', desc: 'Livraison et installation à Ouagadougou et partout au BF' },
                { icon: '💰', title: 'Prix Compétitifs', desc: 'Meilleurs tarifs grâce à nos partenariats directs' },
                { icon: '🔧', title: 'SAV Inclus', desc: 'Support technique et maintenance après-vente' },
              ].map((usp, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{usp.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '4px', color: 'var(--fiat-text)' }}>{usp.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--fiat-muted)', lineHeight: 1.6 }}>{usp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding" style={{ background: 'var(--fiat-black)' }}>
          <div className="container-fiat">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>Catalogue</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em' }}>
                Notre <span className="text-gradient">Gamme Complète</span>
              </h2>
            </div>
            <div ref={catsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {CATEGORIES.map((cat, i) => (
                <div
                  key={i}
                  style={{
                    background: cat.color,
                    border: `1px solid ${cat.borderColor}`,
                    padding: '32px',
                    borderRadius: '12px',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '56px', height: '56px', borderRadius: '8px', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem',
                        background: cat.borderColor, border: `1px solid ${cat.borderColor}`
                      }}
                    >
                      {cat.icon}
                    </div>
                    <h3 style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--fiat-text)', lineHeight: 1.3 }}>{cat.title}</h3>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
                    {cat.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={cat.iconColor} strokeWidth="3" style={{ flexShrink: 0 }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span style={{ color: 'rgba(232,234,240,0.85)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ background: 'var(--fiat-dark)', borderTop: '1px solid var(--fiat-border)' }}>
          <div className="container-fiat" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: 'var(--fiat-text)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Besoin d&rsquo;un <span className="text-gradient">Devis Matériel ?</span>
            </h2>
            <p style={{ maxWidth: '512px', margin: '0 auto 32px', color: 'var(--fiat-muted)', lineHeight: 1.6 }}>
              Dites-nous ce dont vous avez besoin. Nous vous proposons les meilleures solutions au meilleur prix.
            </p>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', padding: '16px 48px', fontSize: '1.05rem' }}>
              Obtenir un devis gratuit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

