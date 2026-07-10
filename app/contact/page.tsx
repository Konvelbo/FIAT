'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', sujet: '', message: '' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 })
      gsap.fromTo(formRef.current, { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 85%', once: true },
      })
      gsap.fromTo(infoRef.current, { x: 40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: infoRef.current, start: 'top 85%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulated submission (replace with real API)
    await new Promise(res => setTimeout(res, 1500))
    setStatus('sent')
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="section-padding"
          style={{ background: 'var(--fiat-black)', borderBottom: '1px solid var(--fiat-border)', paddingTop: '160px' }}
        >
          <div className="container-fiat">
            <div ref={heroRef} style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto' }}>
              <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                Contactez-Nous
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--fiat-text)', marginTop: '8px', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Parlons de{' '}
                <span className="text-gradient">Votre Projet</span>
              </h1>
              <p style={{ color: 'var(--fiat-muted)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                Notre équipe d&rsquo;experts est disponible pour étudier votre besoin et vous proposer
                une solution sur mesure. Réponse garantie sous 24h.
              </p>
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="section-padding" style={{ background: 'var(--fiat-black)' }}>
          <div className="container-fiat">
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              alignItems: 'flex-start'
            }}>
              {/* Form */}
              <div ref={formRef} style={{ flex: '1 1 min(100%, 600px)' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)', padding: '32px', borderRadius: '12px' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: 'var(--fiat-text)' }}>
                    Envoyer un Message
                  </h2>
                  {status === 'sent' ? (
                    <div style={{ textAlign: 'center', padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)'
                      }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fiat-text)' }}>Message envoyé !</h3>
                      <p style={{ color: 'var(--fiat-muted)', lineHeight: 1.6 }}>
                        Merci pour votre message. Notre équipe vous répondra dans les 24 heures.
                      </p>
                      <button
                        onClick={() => { setStatus('idle'); setForm({ nom: '', email: '', telephone: '', sujet: '', message: '' }) }}
                        className="btn-secondary"
                        style={{ marginTop: '8px' }}
                      >
                        Envoyer un autre message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        <div>
                          <label className="form-label">Nom complet *</label>
                          <input type="text" name="nom" value={form.nom} onChange={handleChange} required placeholder="Jean Dupont" className="form-input" />
                        </div>
                        <div>
                          <label className="form-label">Email *</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jean@exemple.com" className="form-input" />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        <div>
                          <label className="form-label">Téléphone</label>
                          <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+226 7X XX XX XX" className="form-input" />
                        </div>
                        <div>
                          <label className="form-label">Sujet *</label>
                          <select name="sujet" value={form.sujet} onChange={handleChange} required className="form-input">
                            <option value="">Choisir un sujet</option>
                            <option value="reseaux">Réseaux & Wi-Fi</option>
                            <option value="videosurveillance">Vidéosurveillance</option>
                            <option value="automatismes">Automatismes & Sécurité</option>
                            <option value="materiel">Matériel Informatique</option>
                            <option value="devis">Demande de devis</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Message *</label>
                        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Décrivez votre projet ou votre besoin..." className="form-input" style={{ resize: 'vertical' }} />
                      </div>
                      <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ width: '100%', opacity: status === 'sending' ? 0.7 : 1, display: 'flex', justifyContent: 'center', gap: '8px' }}>
                        {status === 'sending' ? (
                          <>Envoi en cours...</>
                        ) : (
                          <>Envoyer le message</>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Info */}
              <div ref={infoRef} style={{ flex: '1 1 min(100%, 360px)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Contact cards */}
                {[
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.64 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91A16 16 0 0 0 14 16l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    ),
                    label: 'Téléphone',
                    values: ['+226 74 33 13 06', '+226 73 33 13 06'],
                    href: 'tel:+22674331306',
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: 'Email',
                    values: ['fiatechnologie@gmail.com'],
                    href: 'mailto:fiatechnologie@gmail.com',
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: 'Adresse',
                    values: ['Ouagadougou, Burkina Faso', 'Déployé dans les 13 régions'],
                    href: null,
                  },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)', padding: '24px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)', color: 'var(--fiat-gold)'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fiat-muted)', marginBottom: '4px' }}>
                        {item.label}
                      </p>
                      {item.values.map((v, j) =>
                        item.href ? (
                          <a key={j} href={item.href} style={{ display: 'block', fontWeight: 600, color: 'var(--fiat-text)', textDecoration: 'none', fontSize: '0.95rem' }}>
                            {v}
                          </a>
                        ) : (
                          <p key={j} style={{ fontWeight: 600, color: 'var(--fiat-text)', fontSize: '0.95rem' }}>{v}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}

                {/* Hours */}
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--fiat-border)', padding: '24px', borderRadius: '8px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--fiat-text)', marginBottom: '12px' }}>
                    🕒 Horaires d&rsquo;ouverture
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {[
                      { day: 'Lundi — Vendredi', h: '08h00 — 18h00' },
                      { day: 'Samedi', h: '08h00 — 13h00' },
                      { day: 'Dimanche', h: 'Urgences uniquement' },
                    ].map((item) => (
                      <div key={item.day} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                        <span style={{ color: 'var(--fiat-muted)' }}>{item.day}</span>
                        <span style={{ color: 'var(--fiat-text)', fontWeight: 600 }}>{item.h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

