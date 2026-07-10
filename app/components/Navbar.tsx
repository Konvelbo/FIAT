'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Réseaux & Wi-Fi', href: '/services/reseaux' },
      { label: 'Vidéosurveillance', href: '/services/videosurveillance' },
      { label: 'Automatismes & Sécurité', href: '/services/automatismes' },
      { label: 'Matériel Informatique', href: '/services/materiel' },
    ],
  },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // GSAP entrance
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  // Scroll glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile menu GSAP
  useEffect(() => {
    const menu = mobileMenuRef.current
    if (!menu) return
    if (menuOpen) {
      gsap.fromTo(menu, { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.4, ease: 'power3.out' })
    } else {
      gsap.to(menu, { y: '-100%', opacity: 0, duration: 0.3, ease: 'power3.in' })
    }
  }, [menuOpen])

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = () => setMenuOpen(false)
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [menuOpen])

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
          background: scrolled ? 'rgba(10,11,15,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="container-fiat">
          {/* Inner row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
            gap: '24px',
          }}>
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'var(--fiat-gold)', color: 'var(--fiat-black)',
                fontWeight: 900, fontSize: '1.1rem',
              }}>
                F
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: '1.05rem', color: 'var(--fiat-text)', lineHeight: 1, letterSpacing: '-0.01em' }}>FIAT</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--fiat-muted)', lineHeight: 1, marginTop: '3px', letterSpacing: '0.1em' }}>TECHNOLOGIE</div>
              </div>
            </Link>

            {/* Desktop nav links — center */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              // Hide on small screens via inline media (handled by JS-driven class below)
            }} className="nav-desktop">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="nav-link"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '5px',
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 500,
                        color: 'var(--fiat-muted)', padding: 0,
                      }}
                    >
                      {link.label}
                      <svg
                        width="13" height="13" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        style={{ transition: 'transform 0.2s', transform: activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0)' }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {activeDropdown === link.label && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        paddingTop: '12px', /* Invisible bridge to prevent mouseleave */
                        zIndex: 100,
                      }}>
                        <div style={{
                          width: '220px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          background: 'rgba(17,18,24,0.97)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        }}>
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                padding: '12px 16px',
                                fontSize: '0.88rem', fontWeight: 500,
                                color: 'var(--fiat-muted)', textDecoration: 'none',
                                transition: 'background 0.15s, color 0.15s',
                              }}
                              onMouseEnter={e => {
                                const el = e.currentTarget as HTMLElement
                                el.style.color = 'var(--fiat-gold)'
                                el.style.background = 'rgba(201,162,39,0.06)'
                              }}
                              onMouseLeave={e => {
                                const el = e.currentTarget as HTMLElement
                                el.style.color = 'var(--fiat-muted)'
                                el.style.background = 'transparent'
                              }}
                            >
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--fiat-gold)', opacity: 0.6, flexShrink: 0, display: 'block' }} />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right side — CTA + hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
              <Link
                href="/contact"
                className="btn-primary nav-cta"
                style={{ padding: '10px 24px', fontSize: '0.85rem' }}
              >
                Demander un devis
              </Link>

              {/* Hamburger */}
              <button
                className="nav-hamburger"
                onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen) }}
                aria-label="Menu"
                style={{
                  display: 'none',
                  flexDirection: 'column', gap: '5px',
                  padding: '8px', background: 'none', border: 'none', cursor: 'pointer',
                }}
              >
                <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--fiat-text)', borderRadius: '2px', transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--fiat-text)', borderRadius: '2px', transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
                <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--fiat-text)', borderRadius: '2px', transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(10,11,15,0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
          transform: 'translateY(-100%)',
          opacity: 0,
        }}
      >
        {/* Close button */}
        <button
          style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--fiat-text)' }}>
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {NAV_LINKS.map((link) => (
          <div key={link.label} style={{ textAlign: 'center' }}>
            <Link
              href={link.href || '#'}
              style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--fiat-text)', textDecoration: 'none', transition: 'color 0.2s' }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-gold)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-text)'}
            >
              {link.label}
            </Link>
            {link.children && (
              <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    style={{ fontSize: '0.9rem', color: 'var(--fiat-muted)', textDecoration: 'none' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: '8px' }}>
          Demander un devis
        </Link>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

