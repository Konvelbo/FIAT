'use client'

import Link from 'next/link'

const SERVICES_LINKS = [
  { label: 'Réseaux & Wi-Fi', href: '/services/reseaux' },
  { label: 'Vidéosurveillance', href: '/services/videosurveillance' },
  { label: 'Automatismes & Sécurité', href: '/services/automatismes' },
  { label: 'Matériel Informatique', href: '/services/materiel' },
]

const COMPANY_LINKS = [
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
  { label: 'Accueil', href: '/' },
]

const linkStyle: React.CSSProperties = {
  color: 'var(--fiat-muted)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  lineHeight: 1.6,
  transition: 'color 0.15s',
  display: 'block',
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#080909',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '72px',
        paddingBottom: '40px',
      }}
    >
      <div className="container-fiat">
        {/* Main grid — 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '56px',
          }}
        >
          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '12px',
                background: 'var(--fiat-gold)', color: 'var(--fiat-black)',
                fontWeight: 900, fontSize: '1.1rem', flexShrink: 0,
              }}>
                F
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: '1.05rem', color: 'var(--fiat-text)', lineHeight: 1 }}>FIAT</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--fiat-muted)', lineHeight: 1, marginTop: '3px', letterSpacing: '0.08em' }}>TECHNOLOGIE</div>
              </div>
            </Link>

            <p style={{ color: 'var(--fiat-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Expert en solutions technologiques premium au Burkina Faso depuis 2016.
              Réseaux, vidéosurveillance, automatismes et matériel informatique.
            </p>


          </div>

          {/* Services column */}
          <div>
            <h4 style={{
              fontWeight: 700, fontSize: '0.75rem', color: 'var(--fiat-text)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px',
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={linkStyle}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-muted)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 style={{
              fontWeight: 700, fontSize: '0.75rem', color: 'var(--fiat-text)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px',
            }}>
              Entreprise
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={linkStyle}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-muted)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 style={{
              fontWeight: 700, fontSize: '0.75rem', color: 'var(--fiat-text)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px',
            }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Phone */}
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--fiat-gold)', flexShrink: 0, marginTop: '3px' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.64 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91A16 16 0 0 0 14 16l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="tel:+22674331306" style={linkStyle}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-muted)'}>
                    +226 74 33 13 06
                  </a>
                  <a href="tel:+22673331306" style={linkStyle}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-muted)'}>
                    +226 73 33 13 06
                  </a>
                </div>
              </li>

              {/* Email */}
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--fiat-gold)', flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:fiatechnologie@gmail.com" style={linkStyle}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-gold)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--fiat-muted)'}>
                  fiatechnologie@gmail.com
                </a>
              </li>

              {/* Address */}
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--fiat-gold)', flexShrink: 0, marginTop: '3px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ color: 'var(--fiat-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Ouagadougou, Burkina Faso<br />
                  <span style={{ fontSize: '0.8rem' }}>Déployé dans les 13 régions</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '28px' }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--fiat-muted)' }}>
            © {year} FASO INFO ART TECHNOLOGIE (FIAT). Tous droits réservés.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--fiat-muted)' }}>
            Fondée en 2016 par{' '}
            <span style={{ color: 'var(--fiat-gold)', fontWeight: 600 }}>KONVELBO Elisée</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
