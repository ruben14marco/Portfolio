// src/components/Projects.jsx
import { useState } from 'react';

const GITHUB = 'https://github.com/ruben14marco';

const projects = [
  {
    id: 'portfolio',
    name: 'Portfolio personal',
    desc: 'Este mismo sitio. Diseñado y desarrollado desde cero con React y Vite — sin plantillas, sin librerías de UI. Arquitectura de componentes, CSS-in-JS, EmailJS para el formulario y despliegue en Vercel.',
    tags: ['Proyecto real'],
    stack: ['React', 'Vite', 'EmailJS', 'Vercel'],
    url: 'https://www.unsitiogenial.es',
    github: `${GITHUB}/portfolio`,
    thumb: 'portfolio',
    highlights: ['React + Vite', 'CSS-in-JS sin librerías', 'Formulario con EmailJS', 'Desplegado en Vercel'],
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" style={s.section}>
      <div style={s.inner}>

        <div style={s.header}>
          <p style={s.label}><span style={s.labelLine} />Proyectos</p>
          <h2 style={s.title}>Lo que he <em style={s.titleEm}>construido</em></h2>
          <p style={s.sub}>Proyectos reales — no ejercicios, cosas que funcionan y tienen código detrás.</p>
        </div>

        <div style={s.grid}>

          {projects.map((proj, i) => (
            <div
              key={proj.id}
              style={{
                ...s.card,
                ...(hovered === i ? s.cardHover : {}),
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Thumbnail */}
              <div style={{
                ...s.thumb,
                background: 'linear-gradient(135deg, rgba(232,58,58,0.18) 0%, rgba(8,8,10,0.95) 100%)',
              }}>
                <div style={s.thumbContent}>
                  <div style={s.thumbRM}>RM.</div>
                  <div style={s.thumbSub}>portfolio · unsitiogenial.es</div>
                </div>
                {/* Live badge */}
                <div style={s.liveBadge}>
                  <span style={s.liveDot} />
                  En vivo
                </div>
              </div>

              {/* Body */}
              <div style={s.body}>
                <div style={s.tags}>
                  {proj.tags.map((tag, ti) => (
                    <span key={ti} style={s.tagAccent}>{tag}</span>
                  ))}
                  {proj.stack.map((tech, ti) => (
                    <span key={ti} style={s.tag}>{tech}</span>
                  ))}
                </div>

                <div style={s.name}>{proj.name}</div>
                <p style={s.desc}>{proj.desc}</p>

                {/* Highlights */}
                <div style={s.highlights}>
                  {proj.highlights.map((h, hi) => (
                    <div key={hi} style={s.highlight}>
                      <span style={s.highlightDot} />
                      {h}
                    </div>
                  ))}
                </div>

                <div style={s.footer}>
                  <div style={s.links}>
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer"
                      style={s.linkPrimary}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'none'; }}
                    >
                      Ver en vivo →
                    </a>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      style={s.linkGithub}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                    >
                      <GithubIcon size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder próximo proyecto */}
          <div style={s.addCard}>
            <div style={s.addPlus}>+</div>
            <div style={s.addTitle}>Próximo proyecto</div>
            <p style={s.addText}>Esta sección crece contigo.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const s = {
  section: { background: 'var(--bg2)', padding: '110px 5%' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  header: { marginBottom: 64 },
  label: {
    fontSize: 11, fontWeight: 600, letterSpacing: '0.2em',
    textTransform: 'uppercase', color: 'var(--accent)',
    marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
  },
  labelLine: { display: 'inline-block', width: 28, height: 1, background: 'var(--accent)' },
  title: {
    fontFamily: 'var(--font-head)',
    fontSize: 'clamp(36px, 5vw, 54px)',
    fontWeight: 900, letterSpacing: '-3px',
    color: 'var(--text)', lineHeight: 1, marginBottom: 12,
  },
  titleEm: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontStyle: 'italic', fontWeight: 400,
    color: 'var(--accent)', letterSpacing: '-1px',
  },
  sub: { fontSize: 15, color: 'rgba(255,255,255,0.3)', fontWeight: 300 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: 16,
  },
  card: {
    background: 'var(--card)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 16, overflow: 'hidden',
    transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s, border-color 0.25s',
    cursor: 'default',
  },
  cardHover: {
    transform: 'translateY(-6px)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
    borderColor: 'rgba(232,58,58,0.25)',
  },
  thumb: {
    height: 200, display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    position: 'relative',
  },
  thumbContent: { textAlign: 'center' },
  thumbRM: {
    fontFamily: 'var(--font-head)',
    fontSize: 42, fontWeight: 900,
    color: 'rgba(232,58,58,0.6)',
    letterSpacing: '-2px', lineHeight: 1,
  },
  thumbSub: {
    fontSize: 10, color: 'rgba(255,255,255,0.2)',
    letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6,
  },
  liveBadge: {
    position: 'absolute', top: 14, right: 14,
    display: 'flex', alignItems: 'center', gap: 5,
    background: 'rgba(34,197,94,0.1)',
    border: '1px solid rgba(34,197,94,0.2)',
    borderRadius: 100, padding: '4px 10px',
    fontSize: 10, fontWeight: 600,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#4ade80',
  },
  liveDot: {
    display: 'inline-block', width: 5, height: 5,
    borderRadius: '50%', background: '#4ade80',
    animation: 'pulse 2s infinite',
  },
  body: { padding: '24px' },
  tags: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 },
  tagAccent: {
    fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'rgba(232,58,58,0.8)', background: 'rgba(232,58,58,0.06)',
    border: '1px solid rgba(232,58,58,0.18)', padding: '3px 9px', borderRadius: 5,
  },
  tag: {
    fontSize: 10, fontWeight: 500,
    color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)', padding: '3px 9px', borderRadius: 5,
  },
  name: {
    fontFamily: 'var(--font-head)',
    fontSize: 20, fontWeight: 800, color: 'var(--text)',
    letterSpacing: '-0.5px', marginBottom: 10,
  },
  desc: {
    fontSize: 13, color: 'rgba(255,255,255,0.4)',
    lineHeight: 1.75, fontWeight: 300, marginBottom: 20,
  },
  highlights: {
    display: 'flex', flexDirection: 'column', gap: 6,
    marginBottom: 24,
    padding: '16px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: 8,
  },
  highlight: {
    display: 'flex', alignItems: 'center', gap: 8,
    fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 300,
  },
  highlightDot: {
    width: 4, height: 4, borderRadius: '50%',
    background: 'var(--accent)', flexShrink: 0, opacity: 0.7,
  },
  footer: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  links: { display: 'flex', gap: 10, alignItems: 'center' },
  linkPrimary: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    fontSize: 13, fontWeight: 500, color: '#fff',
    background: 'var(--accent)',
    padding: '9px 18px', borderRadius: 7,
    textDecoration: 'none',
    boxShadow: '0 4px 16px rgba(232,58,58,0.25)',
    transition: 'background 0.2s, transform 0.15s',
  },
  linkGithub: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    fontSize: 12, fontWeight: 500,
    color: 'rgba(255,255,255,0.5)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '8px 14px', borderRadius: 7,
    textDecoration: 'none',
    transition: 'border-color 0.2s, color 0.2s',
  },
  addCard: {
    background: 'rgba(255,255,255,0.015)',
    border: '1px dashed rgba(255,255,255,0.07)',
    borderRadius: 16, minHeight: 340,
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    gap: 8, padding: 40,
  },
  addPlus: { fontSize: 28, color: 'rgba(255,255,255,0.07)', marginBottom: 4 },
  addTitle: { fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.1)' },
  addText: { fontSize: 12, color: 'rgba(255,255,255,0.07)', textAlign: 'center' },
};