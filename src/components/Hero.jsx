// src/components/Hero.jsx
import '../Hero.css';
export default function Hero() {
  return (
    <section id="hero" className="hero-section">

      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-grid" />

      <div className="hero-layout">

        {/* ── IZQUIERDA ── */}
        <div className="hero-left">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Disponible para trabajar
          </div>

          <p className="hero-greeting">Hola, soy</p>
          <h1 className="hero-name">
            Rubén<br />
            <span className="hero-name-accent">Marco</span>
          </h1>

          <div className="hero-role-row">
            <span className="hero-role">Desarrollador Full Stack</span>
            <span className="hero-sep">·</span>
            <span className="hero-role-junior">Junior</span>
          </div>
          <span className="hero-stack">React · .NET / C# · SQL Server</span>

          <p className="hero-desc">
            Recién formado en <strong>Desarrollo de Aplicaciones Web</strong>,
            con experiencia real en Mercanza trabajando en un entorno Full Stack profesional.
            Busco mi primer empleo donde seguir creciendo y aportar desde el primer día.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Contáctame →</a>
            <a href="#experience" className="btn-secondary">Ver mi trabajo</a>
          </div>

          <div className="hero-stats">
            {[
              { n: '4', suf: '+', l: 'meses en\nempresa real' },
              { n: '6', suf: '+', l: 'tecnologías\naprendidas' },
              { n: '3', suf: '+', l: 'años de\ntrabajo duro' },
            ].map((st, i) => (
              <div key={i} className={`hero-stat ${i > 0 ? 'hero-stat-border' : ''}`}>
                <div className="hero-stat-n">{st.n}<span className="hero-stat-accent">{st.suf}</span></div>
                <div className="hero-stat-l">{st.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DERECHA — FOTO ── */}
        <div className="hero-right">
          <div className="hero-photo-wrap">
            <div className="hero-ring">
              <span className="hero-ring-dot" style={{ top: '2%', left: '50%', transform: 'translateX(-50%)' }} />
              <span className="hero-ring-dot" style={{ bottom: '2%', left: '50%', transform: 'translateX(-50%)' }} />
              <span className="hero-ring-dot" style={{ left: '2%', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            <div className="hero-photo-frame">
              <img
                src="/foto.png"
                alt="Rubén Marco"
                className="hero-photo-img"
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero-photo-fallback">
                <span className="hero-initials">RM</span>
              </div>
            </div>
          </div>
          <div className="hero-photo-card">
            <div className="hero-card-name">Rubén Marco</div>
            <div className="hero-card-role">
              <span className="hero-card-dot" />
              Disponible · Madrid
            </div>
          </div>
        </div>

      </div>

      <div className="hero-scroll-hint">
        <div className="hero-scroll-bar" />
        <span>scroll</span>
      </div>

    </section>
  );
}