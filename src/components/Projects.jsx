// src/components/Projects.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticlesBg from './ParticlesBg';

// ─── Datos ────────────────────────────────────────────────────────────────────
const PROJECTS_REAL = [
  {
    id:      'portfolio',
    badge:   'En producción',
    title:   'Portfolio personal',
    desc:    'El sitio que estás viendo ahora. Construido desde cero con React y Vite — sin plantillas, sin librerías de UI. Cada animación, cada interacción y cada decisión de diseño es mía.',
    stack:   ['React', 'Vite', 'react-router-dom', 'EmailJS', 'Canvas API'],
    url:     'https://www.unsitiogenial.es',
    github:  'https://github.com/ruben14marco/Portfolio',
    route:   '/projects/portfolio',
  },
];

const PROJECTS_CLASS = [
  {
    id:      'cybor',
    num:     '01',
    title:   'Cybor',
    desc:    'Tienda de personalización de prótesis. Diseño de interfaz centrado en accesibilidad y experiencia de usuario para un producto con impacto real en la vida de las personas.',
    tag:     'Figma · UX/UI',
    figma:   'https://www.figma.com/design/G0rvfOf3TQ1leZcmzozsTd/cybor?node-id=0-1',
    route:   '/projects/cybor',
  },
  {
    id:      'edutok',
    num:     '02',
    title:   'EduTok',
    desc:    'Plataforma de vídeo educativo al estilo TikTok. Flujos de navegación, onboarding y consumo de contenido pensados para mantener el foco en el aprendizaje.',
    tag:     'Figma · UX/UI',
    figma:   'https://www.figma.com/design/IYZNU4lF25iy3ypMXUKSzi/Proyecto-UX-UI?node-id=0-1',
    route:   '/projects/edutok',
  },
];


// ─── Componente principal ─────────────────────────────────────────────────────
export default function Projects() {
  const navigate = useNavigate();
  const [hoveredReal,  setHoveredReal]  = useState(null);
  const [hoveredClass, setHoveredClass] = useState(null);

  return (
    <section id="projects" style={s.section}>
      <ParticlesBg opacity={0.4} />

      <div style={s.inner}>

        {/* Cabecera */}
        <div style={s.header}>
          <p style={s.label}><span style={s.labelLine} />Proyectos</p>
          <h2 style={s.title}>Lo que he <em style={s.titleEm}>construido</em></h2>
          <p style={s.sub}>Código en producción y diseño de clase. Sin filtros.</p>
        </div>

        {/* ── Proyectos reales ── */}
        <div style={s.blockLabel}>
          <span>Proyectos reales</span>
          <div style={s.blockLine} />
        </div>

        <div style={{ marginBottom: 56 }}>
          {PROJECTS_REAL.map((p, i) => (
            <div
              key={p.id}
              style={{
                ...s.realCard,
                borderColor: hoveredReal === i ? 'rgba(232,58,58,0.35)' : 'rgba(255,255,255,0.07)',
                transform:   hoveredReal === i ? 'translateY(-3px)' : 'none',
              }}
              onMouseEnter={() => setHoveredReal(i)}
              onMouseLeave={() => setHoveredReal(null)}
            >
              {/* Línea roja arriba al hover */}
              <div style={{
                ...s.realCardTopLine,
                opacity: hoveredReal === i ? 1 : 0,
              }} />

              <div style={s.realCardLeft}>
                <div style={s.realBadge}>
                  <span style={s.realDot} />
                  {p.badge}
                </div>
                <div style={s.realTitle}>{p.title}</div>
                <p style={s.realDesc}>{p.desc}</p>
                <div style={s.tags}>
                  {p.stack.map((t, ti) => (
                    <span key={ti} style={ti < 3 ? s.tagHot : s.tag}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={s.realCardActions}>
                <button style={s.btnPrimary} onClick={() => navigate(p.route)}>
                  Ver proyecto →
                </button>
                <a href={p.github} target="_blank" rel="noreferrer" style={s.btnGhost}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#efeff2'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Proyectos de clase ── */}
        <div style={s.blockLabel}>
          <span>Diseño UX/UI · Clase</span>
          <div style={s.blockLine} />
        </div>

        <div style={s.classGrid} className="proj-grid">
          {PROJECTS_CLASS.map((p, i) => (
            <div
              key={p.id}
              style={{
                ...s.classCard,
                borderColor: hoveredClass === i ? 'rgba(232,58,58,0.28)' : 'rgba(255,255,255,0.07)',
                transform:   hoveredClass === i ? 'translateY(-3px)' : 'none',
              }}
              onMouseEnter={() => setHoveredClass(i)}
              onMouseLeave={() => setHoveredClass(null)}
            >
              <div style={{
                ...s.classNum,
                color: hoveredClass === i ? 'rgba(232,58,58,0.5)' : 'rgba(232,58,58,0.2)',
              }}>{p.num}</div>
              <span style={s.classTag}>{p.tag}</span>
              <div style={s.classTitle}>{p.title}</div>
              <p style={s.classDesc}>{p.desc}</p>
              <div style={s.classFooter}>
                <button style={s.btnPrimary} onClick={() => navigate(p.route)}>
                  Ver proyecto →
                </button>
                <a href={p.figma} target="_blank" rel="noreferrer" style={s.classLink}
                  onMouseEnter={e => e.currentTarget.style.color = '#e83a3a'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,58,58,0.5)'}
                >
                  Figma ↗
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


// ─── Icono GitHub ─────────────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}


// ─── Estilos ──────────────────────────────────────────────────────────────────
const s = {
  section:  { background: 'var(--bg2)', padding: '110px 5%', position: 'relative', overflow: 'hidden' },
  inner:    { maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 },

  // Cabecera
  header:    { marginBottom: 64 },
  label:     { fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 },
  labelLine: { display: 'inline-block', width: 28, height: 1, background: 'var(--accent)' },
  title:     { fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 900, letterSpacing: '-3px', color: 'var(--text)', lineHeight: 1, marginBottom: 12 },
  titleEm:   { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)', letterSpacing: '-1px' },
  sub:       { fontSize: 15, color: 'var(--text3)', fontWeight: 300 },

  // Separador de bloque
  blockLabel: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, fontSize: 9.5, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text3)' },
  blockLine:  { flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' },

  // Card real
  realCard:         { background: 'var(--bg3)', border: '1px solid', borderRadius: 16, padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, position: 'relative', overflow: 'hidden', transition: 'border-color .25s, transform .25s', cursor: 'default', flexWrap: 'wrap' },
  realCardTopLine:  { position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #e83a3a, transparent)', transition: 'opacity .25s' },
  realCardLeft:     { flex: 1, minWidth: 280 },
  realCardActions:  { display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end', flexShrink: 0 },
  realBadge:        { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4ade80', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', padding: '4px 10px', borderRadius: 100, marginBottom: 14 },
  realDot:          { width: 4, height: 4, borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite', display: 'inline-block' },
  realTitle:        { fontFamily: 'var(--font-head)', fontSize: 24, fontWeight: 900, letterSpacing: '-1px', color: 'var(--text)', marginBottom: 10 },
  realDesc:         { fontSize: 13.5, color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: 20, maxWidth: 560 },

  // Tags
  tags:   { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tagHot: { fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 100, background: 'rgba(232,58,58,0.08)', border: '1px solid rgba(232,58,58,0.2)', color: '#e83a3a' },
  tag:    { fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 100, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text2)' },

  // Botones
  btnPrimary: { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, padding: '9px 18px', borderRadius: 8, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', textDecoration: 'none', transition: 'background .2s', whiteSpace: 'nowrap' },
  btnGhost:   { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, padding: '9px 18px', borderRadius: 8, background: 'transparent', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', textDecoration: 'none', transition: 'border-color .2s, color .2s', whiteSpace: 'nowrap' },

  // Cards de clase
  classGrid:  { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
  classCard:  { background: 'var(--bg3)', border: '1px solid', borderRadius: 14, padding: '28px', cursor: 'default', transition: 'border-color .25s, transform .25s' },
  classNum:   { fontFamily: 'var(--font-head)', fontSize: 11, fontWeight: 900, letterSpacing: '.08em', marginBottom: 12, transition: 'color .25s' },
  classTag:   { fontSize: 10, fontWeight: 500, padding: '2px 8px', borderRadius: 100, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text3)', marginBottom: 12, display: 'inline-block' },
  classTitle: { fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 800, color: 'var(--text)', letterSpacing: '-.4px', marginBottom: 8 },
  classDesc:  { fontSize: 13, color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300, marginBottom: 20 },
  classFooter:{ display: 'flex', alignItems: 'center', gap: 14 },
  classLink:  { fontSize: 12, fontWeight: 600, color: 'rgba(232,58,58,0.5)', textDecoration: 'none', transition: 'color .2s' },
};