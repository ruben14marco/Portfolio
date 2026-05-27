// src/components/About.jsx
import { useState } from 'react';

export default function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="about" style={s.section}>
      <div style={s.inner}>

        {/* ── Header ── */}
        <div style={s.header}>
          <p style={s.label}>
            <span style={s.labelLine} />
            Sobre mí
          </p>
          <h2 style={s.title}>
            Quién <em style={s.titleEm}>soy</em>
          </h2>
          <p style={s.sub}>Desarrollador con mentalidad de producto, no solo de código.</p>
        </div>

        {/* ── Layout ── */}
        <div style={s.layout} className="about-layout">

          {/* ── Columna izquierda ── */}
          <div>
            <p style={s.bioPara}>
              Soy <strong style={s.strong}>Rubén Marco</strong>, desarrollador Full Stack
              junior con base en Madrid. Me formé en DAW y completé una experiencia real
              en <strong style={s.strong}>Mercanza</strong>, donde desarrollé y mantuve
              una aplicación empresarial usando React, .NET y SQL Server.
            </p>
            <p style={s.bioPara}>
              Antes de meterme de lleno en el desarrollo estuve varios años en trabajos
              de <strong style={s.strong}>alto ritmo</strong> — logística, atención al
              cliente, trabajo en equipo bajo presión. Eso me hizo fiable, puntual y con
              las ideas claras sobre lo que significa comprometerse con algo.
            </p>
            <p style={s.bioPara}>
              Ahora busco mi primer empleo como desarrollador. No busco comodidad, busco
              un equipo donde{' '}
              <strong style={s.strong}>aprender rápido y aportar desde el primer día</strong>.
            </p>

            <div style={s.infoList}>
              {[
                { label: 'Ubicación', val: 'Madrid' },
                { label: 'Email',     val: 'ruben14marco@gmail.com', href: 'mailto:ruben14marco@gmail.com' },
                { label: 'LinkedIn',  val: 'rubén-marco',            href: 'https://www.linkedin.com/in/rubén-marco-aa992b234' },
                { label: 'Idiomas',   val: 'Español nativo · Inglés alto' },
                { label: 'Otros',     val: 'Carnet B · Vehículo propio' },
              ].map(item => (
                <div key={item.label} style={s.infoItem}>
                  <span style={s.infoLbl}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" style={s.infoLink}>
                      {item.val}
                    </a>
                  ) : (
                    <span style={s.infoVal}>{item.val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Cards ── */}
          <div style={s.cardsGrid} className="about-cards">

            {/* Card 1 — Frontend */}
            <div
              style={{ ...s.card, ...s.c1, ...(hovered === 0 ? s.c1Hover : {}) }}
              onMouseEnter={() => setHovered(0)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ ...s.c1Glow, transform: hovered === 0 ? 'scale(1.5)' : 'scale(1)' }} />
              <div style={s.c1Tag}>Frontend</div>
              <div style={s.cardTitle}>Las interfaces<br />son mi idioma</div>
              <p style={s.cardText}>
                React en producción, componentes que escalan y UIs que no necesitan
                explicación. Si el usuario lo tiene que pensar, hay algo que mejorar.
              </p>
            </div>

            {/* Card 2 — Backend */}
            <div
              style={{ ...s.card, ...s.c2, ...(hovered === 1 ? s.c2Hover : {}) }}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={s.c2Tag}>Backend</div>
              <div style={s.cardTitle}>Backend<br />con criterio</div>
              <p style={s.cardText}>
                .NET no es solo hacer que funcione — es entender por qué funciona.
                Lógica de negocio real en una empresa real desde el primer día.
              </p>
            </div>

            {/* Card 3 — SQL, full width */}
            <div
              className="about-c3"
              style={{ ...s.card, ...s.c3, ...(hovered === 2 ? s.c3Hover : {}) }}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={s.c3Left}>
                <p style={s.c3SmTag}>Base de datos</p>
                <div style={{
                  ...s.c3Word,
                  color:            hovered === 2 ? '#e83a3a' : 'transparent',
                  WebkitTextStroke: hovered === 2 ? '0px'     : '1px rgba(232,58,58,0.5)',
                }}>
                  SQL
                </div>
              </div>
              <div style={s.c3Divider} />
              <div>
                <div style={s.cardTitle}>Los datos no mienten,<br />las queries sí</div>
                <p style={s.cardText}>
                  SQL Server en producción me enseñó más que cualquier tutorial.
                  Diseño consultas pensando en rendimiento y en quien las mantiene después.
                </p>
              </div>
            </div>

            {/* Card 4 — Quote, full width */}
            <div
              className="about-c4"
              style={{ ...s.card, ...s.c4, ...(hovered === 3 ? s.c4Hover : {}) }}
              onMouseEnter={() => setHovered(3)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                ...s.c4Quote,
                color: hovered === 3 ? 'rgba(232,58,58,0.5)' : 'rgba(232,58,58,0.22)',
              }}>
                "
              </div>
              <div>
                <p style={s.c4Text}>
                  No busco la zona de confort. Cada proyecto — Power BI, Qlik, Angular,
                  Git — es una capa más en el stack. El techo lo pongo yo.
                </p>
                <span style={s.c4Badge}>
                  <span style={s.c4BadgeDot} />
                  Siempre en modo aprendizaje
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: { background: 'var(--bg2)', padding: '110px 5%', fontFamily: 'var(--font-body)' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  header: { marginBottom: 72 },
  label: { fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 },
  labelLine: { display: 'inline-block', width: 28, height: 1, background: 'var(--accent)' },
  title: { fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 900, letterSpacing: '-3px', color: 'var(--text)', lineHeight: 1, marginBottom: 12 },
  titleEm: { fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)', letterSpacing: '-1px' },
  sub: { fontSize: 15, color: 'var(--text3)', fontWeight: 300, maxWidth: 480 },
  layout: { display: 'grid', gridTemplateColumns: '380px 1fr', gap: 80, alignItems: 'start' },
  bioPara: { fontSize: 15, color: 'var(--text2)', lineHeight: 1.9, marginBottom: 20, fontWeight: 300 },
  strong: { color: 'var(--text)', fontWeight: 500 },
  infoList: { display: 'flex', flexDirection: 'column', gap: 12, marginTop: 36, paddingTop: 28, borderTop: '1px solid var(--border)' },
  infoItem: { display: 'flex', gap: 16, alignItems: 'baseline' },
  infoLbl: { fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text3)', minWidth: 72, flexShrink: 0 },
  infoVal: { fontSize: 13, color: 'var(--text2)' },
  infoLink: { fontSize: 13, color: 'var(--accent)', textDecoration: 'none', transition: 'opacity 0.2s' },
  cardsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  card: { borderRadius: 16, padding: '28px 24px', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s, border-color 0.25s, background 0.25s' },
  c1: { background: 'var(--bg)', border: '1px solid rgba(232,58,58,0.15)' },
  c1Hover: { transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(232,58,58,0.12)', borderColor: 'rgba(232,58,58,0.4)' },
  c1Glow: { position: 'absolute', right: -20, bottom: -20, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,58,58,0.12), transparent 70%)', pointerEvents: 'none', transition: 'transform 0.4s' },
  c1Tag: { fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 },
  c2: { background: 'linear-gradient(135deg, rgba(232,58,58,0.06) 0%, rgba(10,10,12,0) 60%)', borderTop: '2px solid var(--accent)', borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)', borderRadius: '0 0 16px 16px' },
  c2Hover: { transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' },
  c2Tag: { fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 16 },
  c3: { gridColumn: 'span 2', background: 'var(--bg3)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 32, padding: '28px 32px' },
  c3Hover: { transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(0,0,0,0.4)', borderColor: 'rgba(232,58,58,0.2)' },
  c3Left: { flexShrink: 0 },
  c3SmTag: { fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 4 },
  c3Word: { fontSize: 52, fontWeight: 900, letterSpacing: '-3px', lineHeight: 1, transition: 'color 0.3s, -webkit-text-stroke 0.3s' },
  c3Divider: { width: 1, background: 'var(--border)', alignSelf: 'stretch', flexShrink: 0 },
  c4: { gridColumn: 'span 2', background: 'rgba(232,58,58,0.04)', border: '1px solid rgba(232,58,58,0.12)', display: 'flex', alignItems: 'center', gap: 24, padding: '28px 32px' },
  c4Hover: { transform: 'translateY(-4px)', background: 'rgba(232,58,58,0.07)', boxShadow: '0 8px 32px rgba(232,58,58,0.08)' },
  c4Quote: { fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 72, lineHeight: 0.8, flexShrink: 0, alignSelf: 'flex-start', transition: 'color 0.3s', userSelect: 'none' },
  c4Text: { fontSize: 14, color: 'var(--text2)', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 300, marginBottom: 14 },
  c4Badge: { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', background: 'rgba(232,58,58,0.08)', border: '1px solid rgba(232,58,58,0.18)', padding: '4px 12px', borderRadius: 100 },
  c4BadgeDot: { width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite', display: 'inline-block' },
  cardTitle: { fontFamily: 'var(--font-head)', fontSize: 16, fontWeight: 800, color: 'var(--text)', marginBottom: 12, lineHeight: 1.2, letterSpacing: '-0.4px' },
  cardText: { fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 },
};