'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    href: '/services/reseaux',
    tag: 'Équipements Ubiquiti',
    title: 'Réseaux & Wi-Fi',
    description:
      "Déploiement de réseaux Wi-Fi professionnel de bout en bout sur tout le territoire burkinabè. Infra robuste, haut débit, zéro compromis.",
    features: ["Équipements Ubiquiti UniFi", "Couverture nationale", "Maintenance 24/7", "Wi-Fi outdoor & indoor"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
    color: 'rgba(26,110,255,0.07)',
    borderColor: 'rgba(26,110,255,0.2)',
    iconColor: '#60A5FA',
  },
  {
    href: '/services/videosurveillance',
    tag: 'Équipements Hikvision',
    title: 'Vidéosurveillance',
    description:
      "Caméras IP et PTZ Hikvision, avec une spécialité unique : des systèmes fonctionnant à l'énergie solaire pour surveiller vos chantiers depuis n'importe où dans le monde.",
    features: ["Caméras solaires autonomes", "Accès à distance 24/7", "Enregistrement HD/4K", "Alertes en temps réel"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    color: 'rgba(201,162,39,0.05)',
    borderColor: 'rgba(201,162,39,0.25)',
    iconColor: 'var(--fiat-gold)',
  },
  {
    href: '/services/automatismes',
    tag: 'Domotique & Sécurité',
    title: 'Automatismes & Sécurité',
    description:
      "Contrôlez votre propriété d'un simple geste, depuis n'importe où dans le monde. Portes automatiques, empreintes digitales, Face ID et domotique intégrée.",
    features: ["Reconnaissance faciale", "Empreinte digitale", "Contrôle d'accès à distance", "Domotique complète"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    color: 'rgba(239,68,68,0.05)',
    borderColor: 'rgba(239,68,68,0.2)',
    iconColor: '#F87171',
  },
  {
    href: '/services/materiel',
    tag: 'Vente & Installation',
    title: 'Matériel Informatique',
    description:
      "Vente et installation d'équipements informatiques de qualité professionnelle : PC, laptops, imprimantes, composants et périphériques de toutes catégories.",
    features: ['PC & Laptops pro', 'Imprimantes & serveurs', 'Composants high-end', 'Maintenance & support'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: 'rgba(34,197,94,0.05)',
    borderColor: 'rgba(34,197,94,0.2)',
    iconColor: '#4ADE80',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true },
        }
      )

      if (gridRef.current) {
        const cards = Array.from(gridRef.current.children)
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding"
      style={{ background: 'var(--fiat-black)' }}
    >
      <div className="container-fiat">
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            Nos Solutions
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Des Solutions de Classe Mondiale,
            <br />
            <span className="text-gradient">Déployées en Afrique</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '16px auto 0', color: 'var(--fiat-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Chaque service est conçu pour répondre aux exigences des entreprises modernes
            et des investisseurs internationaux opérant au Burkina Faso.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '32px',
          }}
        >
          {SERVICES.map((service, i) => (
            <Link key={i} href={service.href} style={{ textDecoration: 'none', display: 'flex' }}>
              <div
                className="service-card"
                style={{
                  background: service.color,
                  border: `1px solid ${service.borderColor}`,
                  width: '100%',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-8px)'
                  el.style.boxShadow = `0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px ${service.borderColor}`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Tag */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '50px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    marginBottom: '24px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--fiat-muted)',
                    letterSpacing: '0.04em',
                  }}
                >
                  <span
                    style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: service.iconColor, flexShrink: 0,
                      display: 'inline-block',
                    }}
                  />
                  {service.tag}
                </div>

                {/* Icon + Title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: '60px', height: '60px',
                      borderRadius: '8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(255,255,255,0.05)',
                      border: `1px solid ${service.borderColor}`,
                      color: service.iconColor,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div style={{ paddingTop: '8px' }}>
                    <h3 style={{ fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.2, color: 'var(--fiat-text)' }}>
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--fiat-muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '24px' }}>
                  {service.description}
                </p>

                {/* Features */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {service.features.map((feat, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={service.iconColor} strokeWidth="3" style={{ flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ color: 'var(--fiat-text)', opacity: 0.85 }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '0.9rem', fontWeight: 700,
                    color: service.iconColor, marginTop: 'auto',
                  }}
                >
                  En savoir plus
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

