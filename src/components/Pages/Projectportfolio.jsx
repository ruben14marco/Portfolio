// src/pages/ProjectPortfolio.jsx

import { useNavigate } from 'react-router-dom';
import ParticlesBg from '../ParticlesBg';

const STACK = ['React', 'Vite', 'react-router-dom', 'EmailJS', 'Canvas API', 'CSS-in-JS'];

const HIGHLIGHTS = [
  { label: 'Sin librerías de UI',    desc: 'Cada componente está construido desde cero. Sin Material UI, sin Tailwind, sin nada que no haya escrito yo.' },
  { label: 'Animaciones con Canvas', desc: 'El fondo de partículas interactivo usa la Canvas API directamente — nada de librerías de animación.' },
  { label: 'Formulario funcional',   desc: 'EmailJS conectado para que los mensajes lleguen de verdad al correo.' },
  { label: 'Vídeo con chroma key',   desc: 'El personaje del footer usa canvas para eliminar el fondo negro frame a frame en tiempo real.' },
  { label: 'Responsive completo',    desc: 'Cada sección tiene su propio breakpoint con lógica de layout adaptada, no solo media queries de CSS.' },
];

export default function ProjectPortfolio() {
  const navigate = useNavigate();

  return (
    <div style={s.page}>
      <ParticlesBg opacity={0.35} />

      <div style={s.inner}>

        {/* Botón volver */}
        <button style={s.back} onClick={() => navigate('/#projects')}>
          ← Volver a proyectos
        </button>

        {/* Cabecera */}
        <div style={s.header}>
          <div style={s.badge}>
            <span style={s.badgeDot} />
            En producción
          </div>
          <h1 style={s.title}>Portfolio personal</h1>
          <p style={s.sub}>El sitio que estás viendo. Construido desde cero, sin atajos.</p>
        </div>

        {/* Layout dos columnas */}
        <div style={s.layout}>

          {/* Columna izquierda — descripción */}
          <div>
            <p style={s.body}>
              Este portfolio nació con una premisa clara: que se notara que hay un desarrollador detrás,
              no una plantilla. Empecé con el diseño en la cabeza y fui construyendo componente a componente,
              tomando decisiones en tiempo real sobre animaciones, tipografía y estructura.
            </p>
            <p style={s.body}>
              La parte técnica más interesante es el sistema de partículas interactivo — cada sección
              tiene su propio canvas con partículas que reaccionan al ratón. El footer además procesa
              el vídeo frame a frame para eliminar el fondo negro en tiempo real usando la Canvas API.
            </p>
            <p style={s.body}>
              El formulario de contacto está conectado a EmailJS y funciona de verdad. El routing
              está montado con react-router-dom para que cada proyecto tenga su propia URL.
            </p>

            {/* Stack */}
            <div style={s.stackWrap}>
              <div style={s.stackLabel}>Stack</div>
              <div style={s.tags}>
                {STACK.map((t, i) => (
                  <span key={i} style={i < 3 ? s.tagHot : s.tag}>{t}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div style={s.links}>
              <a href="https://www.unsitiogenial.es" target="_blank" rel="noreferrer" style={s.btnPrimary}>
                Ver en vivo →
              </a>
              <a href="https://github.com/ruben14marco/Portfolio" target="_blank" rel="noreferrer" style={s.btnGhost}>
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>

          {/* Columna derecha — highlights */}
          <div style={s.highlights}>
            <div style={s.highlightsLabel}>Lo más destacado</div>
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} style={s.highlight}>
                <div style={s.highlightDot} />
                <div>
                  <div style={s.highlightTitle}>{h.label}</div>
                  <p style={s.highlightDesc}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

const s = {
  page:   { background: 'var(--bg)', minHeight: '100vh', padding: '80px 5%', position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-body)' },
  inner:  { maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 },
  back:   { display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, color: 'var(--text3)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 48, padding: 0, transition: 'color .2s', fontFamily: 'var(--font-body)' },

  header:   { marginBottom: 64 },
  badge:    { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4ade80', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', padding: '4px 10px', borderRadius: 100, marginBottom: 20 },
  badgeDot: { width: 4, height: 4, borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite', display: 'inline-block' },
  title:    { fontFamily: 'var(--font-head)', fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 900, letterSpacing: '-3px', color: 'var(--text)', lineHeight: 1, marginBottom: 16 },
  sub:      { fontSize: 16, color: 'var(--text3)', fontWeight: 300 },

  layout: { display: 'grid', gridTemplateColumns: '1fr 380px', gap: 80, alignItems: 'start' },

  body: { fontSize: 15, color: 'var(--text2)', lineHeight: 1.9, fontWeight: 300, marginBottom: 20 },

  stackWrap:  { marginTop: 36, marginBottom: 32, paddingTop: 28, borderTop: '1px solid var(--border)' },
  stackLabel: { fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 12 },
  tags:       { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tagHot:     { fontSize: 11, fontWeight: 500, padding: '4px 12px', borderRadius: 100, background: 'rgba(232,58,58,0.08)', border: '1px solid rgba(232,58,58,0.2)', color: '#e83a3a' },
  tag:        { fontSize: 11, fontWeight: 500, padding: '4px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text2)' },

  links:      { display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' },
  btnPrimary: { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, padding: '11px 22px', borderRadius: 9, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', textDecoration: 'none', boxShadow: '0 4px 20px rgba(232,58,58,0.25)' },
  btnGhost:   { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, padding: '10px 20px', borderRadius: 9, background: 'transparent', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none' },

  highlights:      { background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 16, padding: '28px' },
  highlightsLabel: { fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 24 },
  highlight:       { display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.05)' },
  highlightDot:    { width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: 6, opacity: 0.7 },
  highlightTitle:  { fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 800, color: 'var(--text)', marginBottom: 4, letterSpacing: '-0.2px' },
  highlightDesc:   { fontSize: 12, color: 'var(--text2)', lineHeight: 1.65, fontWeight: 300 },
};