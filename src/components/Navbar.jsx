// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';

const links = [
  { href: '#about',      label: 'Sobre mí'    },
  { href: '#experience', label: 'Trayectoria' },
  { href: '#projects',   label: 'Proyectos'   },
  { href: '#contact',    label: 'Contacto'    },
];

export default function Navbar() {
  const [scrolled, setScrolled]    = useState(false);
  const [activeSection, setActive] = useState('');
  const [menuOpen, setMenuOpen]    = useState(false);
  const [isMobile, setIsMobile]    = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [activeSection]);

  return (
    <>
      <nav style={{ ...s.nav, ...(scrolled || menuOpen ? s.navScrolled : s.navTop) }}>

        <a href="#hero" style={s.logo}>
          {personal.initials}<span style={s.logoAccent}>.</span>
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={s.linksList}>
            {links.map(l => {
              const id = l.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ ...s.link, color: isActive ? '#fff' : 'var(--text2)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = isActive ? '#fff' : 'var(--text2)')}
                  >
                    {l.label}
                    {isActive && <span style={s.activeDot} />}
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        <div style={s.right}>
          {/* CV — solo desktop */}
          {!isMobile && (
            <a
              href="/cv-ruben-marco.pdf"
              target="_blank"
              rel="noreferrer"
              style={s.cta}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
            >
              Ver CV ↗
            </a>
          )}

          {/* Hamburger — solo mobile */}
          {isMobile && (
            <button
              style={s.hamburger}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menú"
            >
              {menuOpen ? (
                // X
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Hamburger
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu desplegable */}
      {isMobile && menuOpen && (
        <div style={s.mobileMenu}>
          {links.map(l => {
            const id = l.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={l.href}
                href={l.href}
                style={{ ...s.mobileLink, ...(isActive ? s.mobileLinkActive : {}) }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
                {isActive && <span style={s.activeDot} />}
              </a>
            );
          })}
          <a
            href="/cv-ruben-marco.pdf"
            target="_blank"
            rel="noreferrer"
            style={s.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Ver CV ↗
          </a>
        </div>
      )}
    </>
  );
}

const s = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 5%', height: 64,
    borderBottom: '1px solid var(--border)',
    transition: 'background 0.3s, backdrop-filter 0.3s',
  },
  navScrolled: {
    background: 'rgba(8,8,10,0.95)',
    backdropFilter: 'blur(20px)',
  },
  navTop: { background: 'transparent' },

  logo: {
    fontFamily: 'var(--font-head)',
    fontWeight: 800, fontSize: 18,
    letterSpacing: '-0.5px',
    color: 'var(--text)', textDecoration: 'none',
    flexShrink: 0,
  },
  logoAccent: { color: 'var(--accent)' },

  right: { display: 'flex', alignItems: 'center', gap: 12 },

  linksList: { display: 'flex', gap: 32, listStyle: 'none' },
  link: {
    fontSize: 11, fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.2s',
    cursor: 'pointer',
    position: 'relative',
    paddingBottom: 4,
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
  },
  activeDot: {
    display: 'block',
    width: 4, height: 4, borderRadius: '50%',
    background: 'var(--accent)',
    position: 'absolute', bottom: -6, left: '50%',
    transform: 'translateX(-50%)',
  },
  cta: {
    background: 'transparent',
    color: 'rgba(255,255,255,0.6)',
    border: '1px solid rgba(255,255,255,0.12)',
    padding: '8px 18px', borderRadius: 6,
    fontFamily: 'var(--font-body)',
    fontSize: 12, fontWeight: 500,
    letterSpacing: '0.04em',
    cursor: 'pointer',
    transition: 'background 0.2s, border-color 0.2s, color 0.2s',
    textDecoration: 'none',
    display: 'inline-block',
  },

  hamburger: {
    background: 'transparent',
    border: 'none',
    color: 'var(--text)',
    cursor: 'pointer',
    padding: 6,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: 6,
  },

  // Menú móvil
  mobileMenu: {
    position: 'fixed',
    top: 64, left: 0, right: 0,
    zIndex: 99,
    background: 'rgba(8,8,10,0.98)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid var(--border)',
    display: 'flex', flexDirection: 'column',
    padding: '16px 5% 24px',
    gap: 4,
  },
  mobileLink: {
    fontSize: 15, fontWeight: 500,
    color: 'var(--text2)',
    textDecoration: 'none',
    padding: '14px 0',
    borderBottom: '1px solid var(--border)',
    position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    transition: 'color 0.2s',
  },
  mobileLinkActive: {
    color: 'var(--text)',
  },
  mobileCta: {
    marginTop: 12,
    background: 'var(--accent)',
    color: '#fff',
    border: 'none',
    padding: '13px 0',
    borderRadius: 8,
    fontFamily: 'var(--font-body)',
    fontSize: 14, fontWeight: 500,
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
  },
};