// About.jsx
// La sección más personal. Aquí el reclutador decide si quiere conocerte.

import { useState } from 'react';
import ParticlesBg from './ParticlesBg';

const info = [
  { label: 'Ubicación', val: 'Madrid' },
  { label: 'Email', val: 'ruben14marco@gmail.com', href: 'https://mail.google.com/mail/?view=cm&to=ruben14marco@gmail.com' },
  { label: 'LinkedIn',  val: 'rubén-marco',            href: 'https://www.linkedin.com/in/rubén-marco-aa992b234' },
  { label: 'Idiomas',   val: 'Español nativo · Inglés alto' },
  { label: 'Otros',     val: 'Carnet B · Vehículo propio' },
];

const pillars = [
  {
    num: '01',
    title: 'Me engancha lo difícil',
    text: 'No busco las tareas fáciles. Lo que me motiva es el problema que parece no tener solución y encontrarla. En Mercanza me tocó migrar proyectos heredados en Angular que nadie quería tocar. Los toqué.',
    accent: 'rgba(232,58,58,0.08)',
  },
  {
    num: '02',
    title: 'Aprendo haciendo, no viendo',
    text: 'He pasado por logística, atención al cliente y trabajo bajo presión durante años. Eso me enseñó algo que ningún curso da: que adaptarse rápido no es una habilidad, es una necesidad.',
    accent: 'rgba(232,58,58,0.04)',
  },
  {
    num: '03',
    title: 'Quiero un equipo, no solo un sueldo',
    text: 'Busco un sitio donde crecer de verdad. Un equipo que me exija, me enseñe y donde yo también pueda aportar desde el primer día. No me interesa calentar la silla.',
    accent: 'rgba(232,58,58,0.06)',
  },
];

export default function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="about" style={s.section}>
      <ParticlesBg opacity={0.5} />

      <div style={s.inner}>

        <div style={s.header}>
          <p style={s.label}><span style={s.labelLine} />Sobre mí</p>
          <h2 style={s.title}>Quién <em style={s.titleEm}>soy</em></h2>
          <p style={s.sub}>Sin filtros. Sin palabras de LinkedIn.</p>
        </div>

        <div style={s.layout} className="about-layout">

          {/* Bio y datos de contacto */}
          <div>
            <p style={s.bioPara}>
              Tengo 24 años, soy de Madrid y llevo poco tiempo en el mundo del desarrollo
              pero con una base real. Estuve en <strong style={s.strong}>Mercanza</strong> trabajando
              en una aplicación empresarial completa con React, .NET y SQL Server en producción,
              no en un proyecto de clase.
            </p>
            <p style={s.bioPara}>
              Antes trabajé durante años en sitios de alto ritmo: almacén, reparto,
              atención al cliente. No fue el camino más corto, pero me hizo
              la persona que soy: <strong style={s.strong}>fiable, adaptable y con las ideas claras</strong>.
            </p>
            <p style={s.bioPara}>
              Lo que me engancha del desarrollo es resolver lo complicado. No me importa
              si es frontend o backend, lo que quiero es aprender rápido y aportar
              de verdad desde el primer día.
            </p>

            <div style={s.infoList}>
              {info.map(item => (
                <div key={item.label} style={s.infoItem}>
                  <span style={s.infoLbl}>{item.label}</span>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noreferrer" style={s.infoLink}>{item.val}</a>
                    : <span style={s.infoVal}>{item.val}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Los tres pilares — cada uno con su propio carácter visual */}
          <div style={s.pillars}>
            {pillars.map((p, i) => (
              <div
                key={i}
                style={{
                  ...s.pillar,
                  background: hovered === i ? p.accent : 'rgba(255,255,255,0.01)',
                  borderColor: hovered === i ? 'rgba(232,58,58,0.35)' : 'rgba(255,255,255,0.07)',
                  transform: hovered === i ? 'translateX(6px)' : 'none',
                  boxShadow: hovered === i ? '0 8px 32px rgba(0,0,0,0.25)' : 'none',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Número grande decorativo */}
                <span style={{
                  ...s.pillarNum,
                  color: hovered === i ? 'rgba(232,58,58,0.35)' : 'rgba(232,58,58,0.12)',
                }}>
                  {p.num}
                </span>

                <div style={s.pillarContent}>
                  {/* Línea roja arriba del título cuando está hover */}
                  <div style={{
                    ...s.pillarAccentLine,
                    width: hovered === i ? '32px' : '0px',
                  }} />
                  <div style={s.pillarTitle}>{p.title}</div>
                  <p style={s.pillarText}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const s = {
  section:   { background: 'var(--bg2)', padding: '110px 5%', fontFamily: 'var(--font-body)', position: 'relative', overflow: 'hidden' },
  inner:     { maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 },

  header:    { marginBottom: 72 },
  label:     { fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 },
  labelLine: { display: 'inline-block', width: 28, height: 1, background: 'var(--accent)' },
  title:     { fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 900, letterSpacing: '-3px', color: 'var(--text)', lineHeight: 1, marginBottom: 12 },
  titleEm:   { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)', letterSpacing: '-1px' },
  sub:       { fontSize: 15, color: 'var(--text3)', fontWeight: 300 },

  layout:    { display: 'grid', gridTemplateColumns: '380px 1fr', gap: 80, alignItems: 'start' },

  bioPara:   { fontSize: 15, color: 'var(--text2)', lineHeight: 1.9, marginBottom: 20, fontWeight: 300 },
  strong:    { color: 'var(--text)', fontWeight: 500 },

  infoList:  { display: 'flex', flexDirection: 'column', gap: 12, marginTop: 36, paddingTop: 28, borderTop: '1px solid var(--border)' },
  infoItem:  { display: 'flex', gap: 16, alignItems: 'baseline' },
  infoLbl:   { fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text3)', minWidth: 72, flexShrink: 0 },
  infoVal:   { fontSize: 13, color: 'var(--text2)' },
  infoLink:  { fontSize: 13, color: 'var(--accent)', textDecoration: 'none' },

  pillars:   { display: 'flex', flexDirection: 'column', gap: 0 },
  pillar:    {
    display: 'flex', gap: 24, alignItems: 'flex-start',
    padding: '28px 24px',
    borderLeft: '2px solid',
    borderTop: '1px solid',
    borderRight: '1px solid',
    borderBottom: '1px solid',
    marginBottom: -1,
    transition: 'background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s',
    cursor: 'default',
  },
  pillarNum: {
    fontFamily: 'var(--font-head)',
    fontSize: 36, fontWeight: 900,
    lineHeight: 1, flexShrink: 0,
    letterSpacing: '-2px',
    marginTop: 4,
    transition: 'color 0.25s',
    userSelect: 'none',
  },
  pillarContent: { flex: 1 },
  pillarAccentLine: {
    height: 2, background: 'var(--accent)',
    marginBottom: 10,
    transition: 'width 0.3s ease',
    borderRadius: 2,
  },
  pillarTitle: { fontFamily: 'var(--font-head)', fontSize: 16, fontWeight: 800, color: 'var(--text)', marginBottom: 8, letterSpacing: '-0.3px' },
  pillarText:  { fontSize: 13, color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300 },
};