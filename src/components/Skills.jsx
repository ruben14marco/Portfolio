// src/components/Skills.jsx
import { skills, softSkills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" style={s.section}>
      <div style={s.inner}>
        <div className="reveal">
          <p style={s.label}>Technical skills / Stack técnico</p>
          <h2 style={s.title}>What I work with</h2>
          <p style={s.sub}>Mi stack en uso activo en proyectos reales.</p>
        </div>

        <div style={s.grid}>
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={`reveal reveal-delay-${gi + 1}`}
              style={s.group}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
            >
              <div style={s.groupTitle}>
                <span style={s.groupIcon}>{group.icon}</span>
                {group.category}
              </div>
              <div style={s.tags}>
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    style={item.hot ? s.tagHot : s.tag}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div style={s.softSection}>
          <p style={s.softLabel}>Habilidades personales</p>
          <div style={s.softGrid}>
            {softSkills.map((sk, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1}`}
                style={s.softCard}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(5px)'; e.currentTarget.style.borderColor = 'rgba(232,58,58,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <span style={s.softIcon}>{sk.icon}</span>
                <span style={s.softText}>{sk.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const s = {
  section:   { background: 'var(--bg)', padding: '100px 5%' },
  inner:     { maxWidth: 1200, margin: '0 auto' },
  label:     { fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 },
  title:     { fontFamily: 'var(--font-head)', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 800, letterSpacing: '-2px', color: 'var(--text)', marginBottom: 10 },
  sub:       { fontSize: 16, color: 'var(--text2)', fontWeight: 300, marginBottom: 52 },
  grid:      { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 20 },
  group:     {
    background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: 12, padding: '26px 24px',
    transition: 'transform 0.22s, border-color 0.22s',
  },
  groupTitle:{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text2)', marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid var(--border)' },
  groupIcon: { fontSize: 16 },
  tags:      { display: 'flex', flexWrap: 'wrap', gap: 8 },
  tag:       {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border2)',
    color: 'var(--text)',
    fontSize: 13, padding: '6px 14px', borderRadius: 6,
  },
  tagHot:    {
    background: 'rgba(232,58,58,0.07)',
    border: '1px solid rgba(232,58,58,0.28)',
    color: 'var(--accent2)',
    fontSize: 13, padding: '6px 14px', borderRadius: 6,
    fontWeight: 500,
  },
  softSection:{ marginTop: 64 },
  softLabel: { fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 22 },
  softGrid:  { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 },
  softCard:  {
    background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: 10, padding: '16px 20px',
    display: 'flex', alignItems: 'center', gap: 14,
    transition: 'transform 0.18s, border-color 0.18s',
  },
  softIcon:  { fontSize: 18 },
  softText:  { fontSize: 13, color: 'var(--text)', lineHeight: 1.5 },
};
