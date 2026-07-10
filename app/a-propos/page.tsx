'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedCounter from '../components/AnimatedCounter'

gsap.registerPlugin(ScrollTrigger)

const TIMELINE = [
  { year: '2016', title: 'Fondation de FIAT', desc: "KONVELBO Elisée, 24 ans, crée Faso Info Art Technologie à Ouagadougou avec une vision claire : apporter des solutions technologiques de classe mondiale au Burkina Faso." },
  { year: '2017', title: 'Premières Intégrations', desc: "FIAT devient intégrateur Hikvision et commence à déployer ses premières solutions de vidéosurveillance pour des entreprises de la capitale." },
  { year: '2019', title: 'Intégration Ubiquiti', desc: "Intégration des équipements Ubiquiti UniFi dans le catalogue. Déploiement des premiers grands réseaux Wi-Fi d'entreprise." },
  { year: '2021', title: 'Expansion Nationale', desc: "FIAT étend ses opérations à l'ensemble des 13 régions du Burkina Faso. L'équipe passe à 8 experts certifiés. Introduction des caméras solaires pour les zones rurales." },
  { year: '2024', title: 'Innovation Continue', desc: "Lancement des solutions domotiques avancées : contrôle d'accès biométrique, Face ID, et systèmes de surveillance à distance pour les investisseurs étrangers." },
  { year: '2025+', title: 'Vision Internationale', desc: "FIAT se positionne comme le partenaire technologique de référence pour tous les investisseurs africains et de la diaspora ayant des projets au Burkina Faso." },
]

const TEAM = [
  { name: 'KONVELBO Elisée', role: 'Fondateur & Directeur Général', initials: 'KE', color: 'var(--fiat-gold)' },
  { name: 'Expert Réseaux', role: 'Ingénieur Réseau Certifié', initials: 'ER', color: '#60A5FA' },
  { name: 'Expert Sécurité', role: 'Technicien Vidéosurveillance', initials: 'ES', color: '#F87171' },
  { name: 'Technicien Terrain', role: 'Déploiement & Installation', initials: 'TT', color: '#4ADE80' },
]

export default function AProposPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.3 })

      if (timelineRef.current) {
        const items = Array.from(timelineRef.current.children)
        gsap.fromTo(items, { x: -40, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', once: true },
        })
      }

      if (teamRef.current) {
        const cards = Array.from(teamRef.current.children)
        gsap.fromTo(cards, { y: 40, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: teamRef.current, start: 'top 82%', once: true },
        })
      }

      if (valuesRef.current) {
        const items = Array.from(valuesRef.current.children)
        gsap.fromTo(items, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: valuesRef.current, start: 'top 85%', once: true },
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
            <div ref={heroRef} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}>
              <div>
                <div className="section-label">À Propos de FIAT</div>
                <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, color: 'var(--fiat-text)', lineHeight: 1.1, letterSpacing: '-0.02em', marginTop: '8px', marginBottom: '20px' }}>
                  La Technologie au
                  <br />
                  <span className="text-gradient">Service de l&rsquo;Afrique</span>
                </h1>
                <p style={{ color: 'var(--fiat-muted)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '32px' }}>
                  Fondée en 2016 par un jeune entrepreneur visionnaire de 24 ans,
                  FIAT est aujourd&rsquo;hui la référence burkinabè en solutions technologiques
                  premium. De Ouagadougou aux zones les plus reculées du pays,
                  nous connectons, sécurisons et automatisons.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
                  {[
                    { val: 9, suf: '+', label: 'ans' },
                    { val: 8, suf: '', label: 'experts' },
                    { val: 13, suf: '', label: 'régions' },
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div className="text-gradient" style={{ fontSize: '1.875rem', fontWeight: 900, lineHeight: 1 }}>
                        <AnimatedCounter end={s.val} suffix={s.suf} duration={2} />
                      </div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px', color: 'var(--fiat-muted)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'relative', borderRadius: '12px', overflow: 'hidden',
                  height: '380px', border: '1px solid var(--fiat-border)'
                }}>
                  <Image src="/images/network-tech.jpg" alt="Équipe FIAT en action" fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,11,15,0.7) 0%, transparent 60%)' }} />
                  <div style={{
                    position: 'absolute', bottom: '20px', left: '20px', right: '20px', padding: '16px',
                    borderRadius: '8px', background: 'rgba(10,11,15,0.85)', backdropFilter: 'blur(12px)',
                    border: '1px solid var(--fiat-border)'
                  }}>
                    <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--fiat-text)' }}>KONVELBO Elisée</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--fiat-muted)', marginTop: '2px' }}>Fondateur & DG · Ouagadougou, BF</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div style={{
                  position: 'absolute', top: '-16px', right: '-16px', padding: '8px 16px',
                  borderRadius: '8px', fontSize: '0.875rem', fontWeight: 700,
                  background: 'var(--fiat-gold)', color: 'var(--fiat-black)',
                  boxShadow: '0 8px 24px rgba(201,162,39,0.4)'
                }}>
                  🇧🇫 Fondé en 2016
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding" style={{ background: 'var(--fiat-dark)' }}>
          <div className="container-fiat">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>Notre Histoire</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em' }}>
                10 ans d&rsquo;Innovation et de <span className="text-gradient">Croissance</span>
              </h2>
            </div>
            <div ref={timelineRef} style={{ maxWidth: '768px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {TIMELINE.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'stretch' }}>
                  {/* Left part (Dot & Line) */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px', flexShrink: 0 }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,162,39,0.1)',
                      border: '1px solid rgba(201,162,39,0.3)', color: 'var(--fiat-gold)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700,
                      zIndex: 2
                    }}>
                      {item.year.slice(0, 4)}
                    </div>
                    {i !== TIMELINE.length - 1 && (
                      <div style={{ width: '2px', flex: 1, background: 'var(--fiat-border)', marginTop: '8px' }} />
                    )}
                  </div>
                  {/* Content card */}
                  <div style={{
                    flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--fiat-border)',
                    borderRadius: '8px', padding: '24px', marginBottom: '24px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 8px', borderRadius: '6px', background: 'rgba(201,162,39,0.1)', color: 'var(--fiat-gold)' }}>
                        {item.year}
                      </span>
                      <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--fiat-text)' }}>{item.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--fiat-muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding" style={{ background: 'var(--fiat-black)' }}>
          <div className="container-fiat">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>Nos Valeurs</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em' }}>
                Ce qui nous <span className="text-gradient">Distingue</span>
              </h2>
            </div>
            <div ref={valuesRef} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {[
                { icon: '🏆', title: 'Excellence', desc: "Nous sélectionnons les meilleures marques mondiales pour garantir la qualité sur chaque projet." },
                { icon: '🤝', title: 'Confiance', desc: 'Nos clients nous font confiance pour protéger leurs investissements. Cette confiance est le fondement de chacune de nos actions.' },
                { icon: '⚡', title: 'Réactivité', desc: "Une urgence technique ? Notre équipe intervient rapidement, partout au Burkina Faso, pour minimiser l'impact sur votre activité." },
                { icon: '🔒', title: 'Sécurité', desc: 'La sécurité physique et numérique de vos installations est notre priorité absolue. Chaque système est déployé selon les meilleures pratiques.' },
                { icon: '🌍', title: 'Vision Globale', desc: 'Nous comprenons les besoins des investisseurs étrangers et de la diaspora. Notre interface internationale facilite la collaboration à distance.' },
                { icon: '📈', title: 'Innovation', desc: 'Veille technologique permanente, nouvelles solutions, formations continues — FIAT évolue sans cesse pour vous offrir le meilleur.' },
              ].map((val, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)',
                  padding: '24px', borderRadius: '8px', textAlign: 'center',
                  transition: 'transform 0.3s, border-color 0.3s'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,162,39,0.3)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--fiat-border)' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{val.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '8px', color: 'var(--fiat-text)' }}>{val.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--fiat-muted)' }}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding" style={{ background: 'var(--fiat-dark)' }}>
          <div className="container-fiat">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>L&rsquo;Équipe</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', letterSpacing: '-0.02em' }}>
                8 Experts à <span className="text-gradient">Votre Service</span>
              </h2>
              <p style={{ maxWidth: '600px', margin: '12px auto 0', color: 'var(--fiat-muted)', lineHeight: 1.6 }}>
                Une équipe soudée, compétente et passionnée par la technologie. Chaque membre est formé aux meilleures pratiques.
              </p>
            </div>
            <div ref={teamRef} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px'
            }}>
              {TEAM.map((member, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)',
                  padding: '24px', borderRadius: '8px', textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.25rem', fontWeight: 900, margin: '0 auto 16px',
                    background: `${member.color}15`, border: `1px solid ${member.color}40`, color: member.color
                  }}>
                    {member.initials}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px', color: 'var(--fiat-text)' }}>{member.name}</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--fiat-muted)' }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ background: 'var(--fiat-black)', borderTop: '1px solid var(--fiat-border)' }}>
          <div className="container-fiat" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--fiat-text)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Travaillons <span className="text-gradient">Ensemble</span>
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 32px', color: 'var(--fiat-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Contactez notre équipe pour discuter de votre projet et obtenir une proposition sur mesure.
            </p>
            <a href="/contact" className="btn-primary" style={{ display: 'inline-block', padding: '16px 48px', fontSize: '1.05rem' }}>
              Démarrer un projet
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

