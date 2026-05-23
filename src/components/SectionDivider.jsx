// src/components/SectionDivider.jsx
export default function SectionDivider({ num, name }) {
  return (
    <div style={s.wrap}>
      <div style={s.line} />
      <div style={s.label}>
        <span style={s.num}>{num}</span>
        <span style={s.dot} />
        <span style={s.name}>{name}</span>
      </div>
      <div style={s.line} />
    </div>
  );
}

const s = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 5%',
    background: '#0c0c0e',
  },
  line: {
    flex: 1,
    height: 1,
    background: 'linear-gradient(to right, transparent, rgba(232,58,58,0.22), transparent)',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '0 24px',
    whiteSpace: 'nowrap',
  },
  num: {
    fontFamily: 'var(--font-head)',
    fontSize: 11, fontWeight: 800,
    color: 'rgba(232,58,58,0.4)',
    letterSpacing: '0.1em',
  },
  dot: {
    width: 4, height: 4,
    borderRadius: '50%',
    background: 'rgba(232,58,58,0.35)',
    display: 'inline-block',
  },
  name: {
    fontSize: 10, fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.14)',
  },
};