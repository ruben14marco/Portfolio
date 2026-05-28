// src/components/ExperienceEducation.jsx
import { useState } from 'react';

const experience = [
  {
    role: 'Desarrollador Full Stack',
    company: 'Mercanza',
    location: 'Madrid',
    period: 'Feb 2026 – Jun 2026',
    tag: 'Dev',
    bullets: [
      'Desarrollo y mantenimiento de la aplicación empresarial en entorno Full Stack.',
      'Creación de interfaces dinámicas y componentes reutilizables con React.',
      'Implementación de lógica de negocio y modelos de datos en .NET / C#.',
      'Diseño y optimización de bases de datos relacionales con SQL Server.',
      'Migración de proyectos corporativos de Angular a tecnologías actuales.',
      'Formación en herramientas de Business Intelligence: Power BI y Qlik.',
    ],
  },
  {
    role: 'Mozo de Almacén',
    company: 'Skechers',
    location: 'Madrid',
    period: 'Sept 2023 – 2026',
    tag: 'Laboral',
    bullets: [
      'Gestión de inventario, recepción de mercancías y logística en tienda de alto volumen.',
      'Casi 3 años ininterrumpidos — fiabilidad, puntualidad y compromiso demostrados.',
    ],
  },
];

const education = [
  { degree: 'CFGS Desarrollo de Aplicaciones Web', school: 'ThePowerFP', location: 'Madrid', period: '2024 – 2026', tag: 'Actual' },
  { degree: 'Desarrollador Full Stack', school: 'Mercanza', location: 'Madrid', period: 'Feb 2026 – Jun 2026', tag: 'Práctica' },
  { degree: 'TS Animación de Actividades Físicas', school: 'Col. Amanecer', location: 'Alcorcón', period: '2020 – 2022', tag: null },
  { degree: 'Bachillerato', school: 'Col. Amorós', location: 'Carabanchel', period: '2018 – 2020', tag: null },
];

const stack = [
  { name: 'React',        hot: true  },
  { name: '.NET / C#',    hot: true  },
  { name: 'SQL Server',   hot: true  },
  { name: 'JavaScript',   hot: true  },
  { name: 'HTML5 / CSS3', hot: false },
  { name: 'Angular',      hot: false },
  { name: 'PHP',          hot: false },
  { name: 'MySQL',        hot: false },
  { name: 'Power BI',     hot: false },
  { name: 'Qlik',         hot: false },
  { name: 'Git / GitHub', hot: false },
  { name: 'TypeScript',   hot: false },
];

const softSkills = [
  'Resolución analítica de problemas',
  'Trabajo en equipo y comunicación efectiva',
  'Gestión eficiente de tiempos y tareas',
  'Alta capacidad de adaptación',
  'Aprendizaje rápido y proactividad',
  'Resiliencia bajo presión',
];

export default function ExperienceEducation() {
  const [hoveredEdu, setHoveredEdu] = useState(null);

  return (
    <section id="experience" style={s.section}>
      <div style={s.inner}>

        <div style={s.header}>
          <p style={s.label}><span style={s.labelLine} />Trayectoria</p>
          <h2 style={s.title}>
            Experiencia &amp; <em style={s.titleEm}>Formación</em>
          </h2>
        </div>

        <div style={s.twoCol} className="exp-two-col">

          {/* Timeline */}
          <div style={s.timeline} className="exp-timeline">
            <div style={s.tlLine} />

            {experience.map((job, i) => (
              <div key={i} style={s.tlItem}>
                <div style={s.tlDot} className="exp-tl-dot" />
                <div style={s.tlTop}>
                  <div style={s.tlRole}>{job.role}</div>
                  <span style={{ ...s.tlPeriod, ...(job.tag === 'Dev' ? s.tlPeriodDev : s.tlPeriodOther) }}>
                    {job.period}
                  </span>
                </div>
                <div style={s.tlCompany}>
                  <strong style={s.tlCompanyName}>{job.company}</strong>
                  <span> — {job.location}</span>
                </div>
                <ul style={s.tlBullets}>
                  {job.bullets.map((b, bi) => (
                    <li key={bi} style={s.tlBullet}>
                      <span style={s.tlArrow}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div style={s.tlItem}>
              <div style={{ ...s.tlDot, ...s.tlDotFaded }} className="exp-tl-dot" />
              <div style={s.tlTop}>
                <div style={{ ...s.tlRole, ...s.tlRoleFaded }}>Experiencia adicional</div>
                <span style={{ ...s.tlPeriod, ...s.tlPeriodFaded }}>2020 – 2023</span>
              </div>
              <div style={s.tlChips}>
                {["Repartidor · Papa John's", 'Socorrista · Grupo Alagua', 'Dependiente · Mega Calzado', 'Monitor · Col. Santa María'].map((c, i) => (
                  <span key={i} style={s.tlChip}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Educación */}
          <div>
            <div style={s.eduColLabel}>
              <span style={s.eduColLabelLine} />Formación
            </div>
            {education.map((edu, i) => (
              <div
                key={i}
                style={{
                  ...s.eduCard,
                  transform: hoveredEdu === i ? 'translateY(-2px)' : 'none',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: hoveredEdu === i
                    ? 'rgba(232,58,58,0.3)'
                    : edu.tag
                    ? 'rgba(232,58,58,0.15)'
                    : 'rgba(255,255,255,0.07)',
                }}
                onMouseEnter={() => setHoveredEdu(i)}
                onMouseLeave={() => setHoveredEdu(null)}
              >
                {edu.tag && <div style={s.eduTag}>{edu.tag}</div>}
                <div style={s.eduDegree}>{edu.degree}</div>
                <div style={s.eduSchool}>{edu.school} · {edu.location}</div>
                <div style={s.eduPeriod}>{edu.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack técnico */}
        <div style={s.stackSection}>
          <div style={s.stackHeader}>
            <p style={s.stackLabel}>Stack técnico</p>
            <p style={s.stackSub}>Tecnologías con uso real en proyectos y entorno profesional</p>
          </div>
          <div style={s.stackGrid}>
            {stack.map((item, i) => (
              <span
                key={i}
                style={item.hot ? s.chipHot : s.chip}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
              >
                {item.hot && <span style={s.chipDot} />}
                {item.name}
              </span>
            ))}
          </div>

          <div style={s.softSection}>
            <p style={s.softLabel}>Habilidades personales</p>
            <div style={s.softGrid} className="exp-soft-grid">
              {softSkills.map((sk, i) => (
                <div
                  key={i}
                  style={s.softCard}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.borderColor = 'rgba(232,58,58,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  }}
                >
                  <span style={s.softDot} />
                  <span style={s.softText}>{sk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const s = {
  section:  { background: 'var(--bg)', padding: '110px 5%' },
  inner:    { maxWidth: 1200, margin: '0 auto' },
  header:   { marginBottom: 64 },
  label:    { fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 },
  labelLine:{ display: 'inline-block', width: 28, height: 1, background: 'var(--accent)' },
  title:    { fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 900, letterSpacing: '-3px', color: 'var(--text)', lineHeight: 1 },
  titleEm:  { fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)', letterSpacing: '-1px' },

  twoCol:   { display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80, alignItems: 'start', marginBottom: 80 },

  timeline: { position: 'relative', paddingLeft: 28 },
  tlLine:   { position: 'absolute', left: 0, top: 8, bottom: 0, width: 1, background: 'linear-gradient(to bottom, #e83a3a, rgba(232,58,58,0.08))' },
  tlItem:   { position: 'relative', marginBottom: 48 },
  tlDot:    { position: 'absolute', left: -34, top: 8, width: 12, height: 12, borderRadius: '50%', background: 'var(--accent)', borderWidth: '2px', borderStyle: 'solid', borderColor: 'var(--bg2)', boxShadow: '0 0 12px rgba(232,58,58,0.5)' },
  tlDotFaded: { background: 'rgba(232,58,58,0.3)', boxShadow: 'none' },
  tlTop:    { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 4, flexWrap: 'wrap' },
  tlRole:   { fontSize: 17, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' },
  tlRoleFaded: { fontSize: 14, color: 'rgba(255,255,255,0.35)', fontWeight: 500 },
  tlPeriod: { fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0 },
  tlPeriodDev:   { color: 'var(--accent)', background: 'rgba(232,58,58,0.08)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgba(232,58,58,0.2)' },
  tlPeriodOther: { color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.04)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.08)' },
  tlPeriodFaded: { color: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.03)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.06)' },
  tlCompany:     { fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 12 },
  tlCompanyName: { color: 'rgba(232,58,58,0.7)' },
  tlBullets:     { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 },
  tlBullet:      { display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, fontWeight: 300 },
  tlArrow:       { color: 'var(--accent)', flexShrink: 0, marginTop: 3, fontSize: 10 },
  tlChips:       { display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 },
  tlChip:        { fontSize: 11, color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.03)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.07)', padding: '3px 10px', borderRadius: 6 },

  eduColLabel:     { fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 },
  eduColLabelLine: { display: 'inline-block', flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' },
  eduCard:         { background: 'var(--bg)', borderRadius: 12, padding: '18px 20px', marginBottom: 8, transition: 'border-color 0.2s, transform 0.2s', cursor: 'default' },
  eduTag:          { fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6 },
  eduDegree:       { fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 4, lineHeight: 1.3 },
  eduSchool:       { fontSize: 12, color: 'rgba(232,58,58,0.65)', marginBottom: 3 },
  eduPeriod:       { fontSize: 11, color: 'rgba(255,255,255,0.25)' },

  stackSection: { paddingTop: 64, borderTop: '1px solid rgba(255,255,255,0.07)' },
  stackHeader:  { marginBottom: 28 },
  stackLabel:   { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 4 },
  stackSub:     { fontSize: 13, color: 'rgba(255,255,255,0.2)', fontWeight: 300 },
  stackGrid:    { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 },
  chip:         { fontSize: 13, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.04)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.09)', padding: '7px 14px', borderRadius: 7, transition: 'transform 0.18s', cursor: 'default' },
  chipHot:      { fontSize: 13, fontWeight: 500, color: 'rgba(232,58,58,0.85)', background: 'rgba(232,58,58,0.05)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgba(232,58,58,0.2)', padding: '7px 14px', borderRadius: 7, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform 0.18s', cursor: 'default' },
  chipDot:      { display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 },
  softSection:  {},
  softLabel:    { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 16 },
  softGrid:     { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 },
  softCard:     { background: 'rgba(255,255,255,0.02)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.07)', borderRadius: 8, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, transition: 'transform 0.18s, border-color 0.18s', cursor: 'default' },
  softDot:      { width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, opacity: 0.6 },
  softText:     { fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 300 },
};