// src/pages/ProjectCybor.jsx

import { useNavigate } from 'react-router-dom';
import ParticlesBg from '../ParticlesBg';

export default function ProjectCybor() {
  const navigate = useNavigate();

  return (
    <div style={s.page}>
      <ParticlesBg opacity={0.35} />

      <div style={s.inner}>

        <button style={s.back} onClick={() => navigate('/#projects')}>
          ← Volver a proyectos
        </button>

        <div style={s.header}>
          <span style={s.tag}>Figma · UX/UI · Clase</span>
          <h1 style={s.title}>Cybor</h1>
          <p style={s.sub}>Tienda de personalización de prótesis. Diseño de interfaz con impacto real.</p>
        </div>

        <div style={s.layout}>
          <div>
            <p style={s.body}>
              Cybor es un proyecto de diseño UX/UI de clase con una premisa que me enganchó desde el principio:
              diseñar una tienda donde las personas puedan personalizar sus prótesis. No es un e-commerce
              cualquiera — el usuario que llega a esta tienda tiene una historia detrás, y la interfaz
              tiene que estar a la altura.
            </p>
            <p style={s.body}>
              El reto fue diseñar algo que fuera funcional, accesible y que no tratara el producto como
              si fuera ropa deportiva. Cada pantalla pensada para que la experiencia fuera clara,
              sin fricciones y con el foco en la personalización.
            </p>

            <div style={s.metaBlock}>
              <div style={s.metaItem}>
                <span style={s.metaLabel}>Herramienta</span>
                <span style={s.metaVal}>Figma</span>
              </div>
              <div style={s.metaItem}>
                <span style={s.metaLabel}>Tipo</span>
                <span style={s.metaVal}>Diseño UX/UI</span>
              </div>
              <div style={s.metaItem}>
                <span style={s.metaLabel}>Contexto</span>
                <span style={s.metaVal}>Proyecto de clase · DAW</span>
              </div>
            </div>

            <a
              href="https://www.figma.com/proto/G0rvfOf3TQ1leZcmzozsTd/cybor?node-id=46-126"
              target="_blank"
              rel="noreferrer"
              style={s.btnPrimary}
            >
              Ver diseño en Figma ↗
            </a>
          </div>

          {/* Embed Figma */}
          <div style={s.embedWrap}>
            <div style={s.embedLabel}>Vista previa</div>
            <iframe
              style={s.embed}
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/G0rvfOf3TQ1leZcmzozsTd/cybor?node-id=46-126%26scaling=scale-down%26hide-ui=1"
              allowFullScreen
              title="Cybor Figma"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

const s = {
  page:   { background: 'var(--bg)', minHeight: '100vh', padding: '80px 5%', position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-body)' },
  inner:  { maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 },
  back:   { display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, color: 'var(--text3)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 48, padding: 0, fontFamily: 'var(--font-body)' },

  header:  { marginBottom: 56 },
  tag:     { display: 'inline-block', fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text3)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: 100, marginBottom: 20 },
  title:   { fontFamily: 'var(--font-head)', fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 900, letterSpacing: '-3px', color: 'var(--text)', lineHeight: 1, marginBottom: 16 },
  sub:     { fontSize: 16, color: 'var(--text3)', fontWeight: 300 },

  layout:  { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' },
  body:    { fontSize: 15, color: 'var(--text2)', lineHeight: 1.9, fontWeight: 300, marginBottom: 20 },

  metaBlock: { display: 'flex', flexDirection: 'column', gap: 12, margin: '32px 0', padding: '24px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12 },
  metaItem:  { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' },
  metaLabel: { fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text3)' },
  metaVal:   { fontSize: 13, color: 'var(--text2)' },

  btnPrimary: { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, padding: '11px 22px', borderRadius: 9, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', textDecoration: 'none', boxShadow: '0 4px 20px rgba(232,58,58,0.25)' },

  embedWrap:  { position: 'sticky', top: 24 },
  embedLabel: { fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 12 },
  embed: { width: '100%', height: 700, border: '1px solid var(--border)', borderRadius: 12, background: 'var(--bg2)' },
};