// src/components/Hero.jsx
// ─────────────────────────────────────────────
// INSTRUCCIONES:
// 1. Copia tu vídeo a /public/hero-video.mp4
// 2. Copia tu foto a /public/foto.png
// ─────────────────────────────────────────────

export default function Hero() {
  return (
    <section id="hero" style={s.section}>

      {/* ── Vídeo de fondo ── */}
      <video autoPlay loop muted playsInline style={s.videoBg}>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div style={s.overlay} />
      <div style={s.bgGrid} />

      {/* ── Layout principal ── */}
      <div style={s.layout}>

        {/* ── IZQUIERDA ── */}
        <div style={s.left}>

          <div style={s.badge}>
            <span style={s.badgeDot} />
            Disponible para trabajar
          </div>

          <p style={s.greeting}>Hola, soy</p>
          <h1 style={s.name}>
            Rubén<br />
            <span style={s.nameAccent}>Marco</span>
          </h1>

          <div style={s.roleRow}>
            <span style={s.role}>Desarrollador Full Stack</span>
            <span style={s.sep}>·</span>
            <span style={s.roleJunior}>Junior</span>
          </div>
          <span style={s.stackInline}>React · .NET / C# · SQL Server</span>

          <p style={s.desc}>
            Recién formado en <strong style={s.strong}>Desarrollo de Aplicaciones Web</strong>,
            con experiencia real en Mercanza trabajando en un entorno Full Stack profesional.
            Busco mi primer empleo donde seguir creciendo y aportar desde el primer día.
          </p>

          <div style={s.actions}>
            <a
              href="#contact"
              style={s.btnPrimary}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#c42e2e';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Contáctame →
            </a>
            <a
              href="#experience"
              style={s.btnSecondary}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
              }}
            >
              Ver mi trabajo
            </a>
          </div>

          {/* Stats — honestos y concretos */}
          <div style={s.statsRow}>
            {[
              { n: '4', suf: '+', l: 'meses en\nempresa real' },
              { n: '6', suf: '+', l: 'tecnologías\naprendidas' },
              { n: '3', suf: '+', l: 'años de\ntrabajo duro' },
            ].map((st, i) => (
              <div key={i} style={{ ...s.stat, ...(i > 0 ? s.statBorder : {}) }}>
                <div style={s.statN}>
                  {st.n}<span style={s.statAccent}>{st.suf}</span>
                </div>
                <div style={s.statL}>{st.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DERECHA — FOTO ── */}
        <div style={s.right}>
          <div style={s.photoWrap}>
            <div style={s.ring}>
              <span style={{ ...s.ringDot, top: '2%', left: '50%', transform: 'translateX(-50%)' }} />
              <span style={{ ...s.ringDot, bottom: '2%', left: '50%', transform: 'translateX(-50%)' }} />
              <span style={{ ...s.ringDot, left: '2%', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            <div style={s.photoFrame}>
              <img
                src="/foto.png"
                alt="Rubén Marco — Desarrollador Full Stack"
                style={s.photoImg}
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div style={s.photoFallback}>
                <span style={s.initials}>RM</span>
                <span style={s.fallbackHint}>Añade /public/foto.png</span>
              </div>
            </div>
          </div>

          <div style={s.photoCard}>
            <div style={s.cardName}>Rubén Marco</div>
            <div style={s.cardRole}>
              <span style={s.cardDot} />
              Disponible · Madrid
            </div>
          </div>
        </div>

      </div>

      <div style={s.scrollHint}>
        <div style={s.scrollBar} />
        <span>scroll</span>
      </div>

    </section>
  );
}

const s = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '110px 6% 80px',
    position: 'relative',
    overflow: 'hidden',
    background: '#0a0a0c',
  },
  videoBg: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover', zIndex: 0,
  },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(135deg, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.88) 50%, rgba(10,10,12,0.72) 100%)',
    zIndex: 1,
  },
  bgGrid: {
    position: 'absolute', inset: 0, zIndex: 2,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    pointerEvents: 'none',
  },
  layout: {
    position: 'relative', zIndex: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 40,
  },
  left: { flex: 1, maxWidth: 580 },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: 'rgba(232,58,58,0.08)',
    border: '1px solid rgba(232,58,58,0.22)',
    color: 'var(--accent)',
    fontSize: 10, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    padding: '6px 14px', borderRadius: 100,
    marginBottom: 32,
  },
  badgeDot: {
    display: 'inline-block',
    width: 6, height: 6, borderRadius: '50%',
    background: 'var(--accent)',
    animation: 'pulse 2s infinite',
  },
  greeting: {
    fontSize: 16, fontWeight: 300,
    color: 'rgba(255,255,255,0.4)',
    marginBottom: 6, letterSpacing: '0.02em',
  },
  name: {
    fontFamily: 'var(--font-head)',
    fontSize: 'clamp(48px, 6.5vw, 82px)',
    fontWeight: 900,
    letterSpacing: '-3px', lineHeight: 0.95,
    color: 'var(--text)', marginBottom: 22,
  },
  nameAccent: { color: 'var(--accent)' },
  roleRow: {
    display: 'flex', alignItems: 'center', gap: 10,
    marginBottom: 6, flexWrap: 'wrap',
  },
  role: {
    fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 400,
    color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.2px',
  },
  roleJunior: {
    fontSize: 14, fontWeight: 400,
    color: 'rgba(255,255,255,0.3)',
  },
  sep: { color: 'rgba(232,58,58,0.4)' },
  stackInline: {
    display: 'block',
    fontSize: 13, fontWeight: 500,
    color: 'rgba(232,58,58,0.75)',
    letterSpacing: '0.04em',
    marginBottom: 28,
  },
  desc: {
    fontSize: 15, fontWeight: 300,
    color: 'rgba(255,255,255,0.48)',
    lineHeight: 1.9, maxWidth: 490,
    marginBottom: 40,
    paddingLeft: 14,
    borderLeft: '2px solid rgba(232,58,58,0.28)',
  },
  strong: { color: 'rgba(255,255,255,0.8)', fontWeight: 500 },
  actions: {
    display: 'flex', gap: 10, flexWrap: 'wrap',
    marginBottom: 52,
  },
  btnPrimary: {
    background: 'var(--accent)', color: '#fff',
    padding: '13px 28px', borderRadius: 7,
    fontSize: 13, fontWeight: 600, letterSpacing: '0.02em',
    textDecoration: 'none', display: 'inline-block',
    boxShadow: '0 4px 20px rgba(232,58,58,0.32)',
    transition: 'background 0.2s, transform 0.15s',
  },
  btnSecondary: {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(8px)',
    color: 'rgba(255,255,255,0.65)',
    border: '1px solid rgba(255,255,255,0.12)',
    padding: '12px 26px', borderRadius: 7,
    fontSize: 13, fontWeight: 400,
    textDecoration: 'none', display: 'inline-block',
    transition: 'border-color 0.2s, transform 0.15s, color 0.2s',
  },
  statsRow: {
    display: 'flex', gap: 0,
    paddingTop: 32,
    borderTop: '1px solid rgba(255,255,255,0.07)',
  },
  stat: { padding: '0 28px 0 0' },
  statBorder: {
    paddingLeft: 28,
    borderLeft: '1px solid rgba(255,255,255,0.07)',
  },
  statN: {
    fontFamily: 'var(--font-head)',
    fontSize: 34, fontWeight: 800,
    color: 'var(--text)', lineHeight: 1, marginBottom: 4,
  },
  statAccent: { color: 'var(--accent)' },
  statL: {
    fontSize: 11, color: 'rgba(255,255,255,0.3)',
    letterSpacing: '0.05em', lineHeight: 1.5,
    whiteSpace: 'pre-line',
  },
  right: {
    flexShrink: 0,
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', gap: 16,
  },
  photoWrap: {
    position: 'relative',
    width: 260, height: 320,
  },
  ring: {
    position: 'absolute',
    inset: -18,
    borderRadius: '50%',
    border: '1px solid rgba(232,58,58,0.18)',
    animation: 'spin-slow 22s linear infinite',
  },
  ringDot: {
    position: 'absolute',
    width: 7, height: 7, borderRadius: '50%',
    background: 'var(--accent)', opacity: 0.55,
    display: 'block',
  },
  photoFrame: {
    position: 'relative', zIndex: 2,
    width: 260, height: 320,
    borderRadius: '140px 140px 80px 80px',
    overflow: 'hidden',
    border: '1.5px solid rgba(232,58,58,0.22)',
    background: 'rgba(20,20,24,0.6)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  photoImg: {
    width: '100%', height: '100%',
    objectFit: 'contain',
    objectPosition: 'center bottom',
    display: 'block',
    transform: 'scale(1.5)',
  },
  photoFallback: {
    display: 'none',
    flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    gap: 10,
    width: '100%', height: '100%',
    background: 'linear-gradient(180deg, rgba(232,58,58,0.06) 0%, rgba(10,10,12,0.4) 100%)',
  },
  initials: {
    fontSize: 64, fontWeight: 800,
    color: 'rgba(232,58,58,0.5)',
    letterSpacing: '-3px', lineHeight: 1,
  },
  fallbackHint: {
    fontSize: 10, color: 'rgba(255,255,255,0.2)',
    letterSpacing: '0.1em', textTransform: 'uppercase',
    textAlign: 'center', padding: '0 20px', lineHeight: 1.6,
  },
  photoCard: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 10,
    padding: '12px 20px',
    textAlign: 'center',
    width: 220,
  },
  cardName: {
    fontSize: 14, fontWeight: 600, color: 'var(--text)',
    marginBottom: 2, letterSpacing: '-0.3px',
  },
  cardRole: {
    fontSize: 11, color: 'rgba(255,255,255,0.35)',
    letterSpacing: '0.04em',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
  },
  cardDot: {
    display: 'inline-block',
    width: 5, height: 5, borderRadius: '50%',
    background: '#22c55e', flexShrink: 0,
  },
  scrollHint: {
    position: 'absolute',
    bottom: 28, left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 5,
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
    color: 'rgba(255,255,255,0.18)',
    fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
  },
  scrollBar: {
    width: 1, height: 36,
    background: 'linear-gradient(to bottom, rgba(232,58,58,0.55), transparent)',
    animation: 'scrollDown 2s ease-in-out infinite',
  },
};