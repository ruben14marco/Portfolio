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
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActive]  = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = links.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{ ...s.nav, ...(scrolled ? s.navScrolled : s.navTop) }}>

      <a href="#hero" style={s.logo}>
        {personal.initials}<span style={s.logoAccent}>.</span>
      </a>

      <ul style={s.linksList}>
        {links.map(l => {
          const id = l.href.replace('#', '');
          const isActive = activeSection === id;
          return (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  ...s.link,
                  color: isActive ? '#fff' : 'var(--text2)',
                }}
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

      <a
        href="/cv-ruben-marco.pdf"
        target="_blank"
        rel="noreferrer"
        style={s.cta}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
          e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
        }}
      >
        Ver CV ↗
      </a>
    </nav>
  );
}

const s = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 5%', height: 68,
    borderBottom: '1px solid var(--border)',
    transition: 'background 0.3s, backdrop-filter 0.3s',
  },
  navScrolled: {
    background: 'rgba(12,12,14,0.88)',
    backdropFilter: 'blur(20px)',
  },
  navTop: { background: 'transparent' },
  logo: {
    fontFamily: 'var(--font-head)',
    fontWeight: 800, fontSize: 18,
    letterSpacing: '-0.5px',
    color: 'var(--text)', textDecoration: 'none',
  },
  logoAccent: { color: 'var(--accent)' },
  linksList: { display: 'flex', gap: 36, listStyle: 'none' },
  link: {
    fontSize: 12, fontWeight: 500,
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
};