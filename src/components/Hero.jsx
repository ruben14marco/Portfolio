// Hero.jsx
// Sección principal del portfolio. Video de fondo, texto a la izquierda, foto a la derecha.

import '../Hero.css';

// Los stats que aparecen abajo del todo
const stats = [
  { n: '4', suf: '+', label: 'meses en\nempresa real' },
  { n: '6', suf: '+', label: 'tecnologías\naprendidas'  },
  { n: '3', suf: '+', label: 'años de\ntrabajo duro'   },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">

      {/* Video de fondo — si no carga muestra el color de fondo */}
      <video autoPlay loop muted playsInline preload="auto" className="hero-video">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-grid" />

      <div className="hero-layout">

        {/* Columna izquierda — todo el texto */}
        <div className="hero-left">

          {/* Badge de disponibilidad */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Disponible para trabajar
          </div>

          {/* Nombre */}
          <p className="hero-greeting">Hola, soy</p>
          <h1 className="hero-name">
            Rubén<br />
            <span className="hero-name-accent">Marco</span>
          </h1>

          {/* Rol y stack como etiquetas, sin puntos raros */}
          <p className="hero-role">Desarrollador Full Stack</p>
          <div className="hero-stack-row">
            <span className="hero-stack-item">React</span>
            <span className="hero-stack-item">.NET / C#</span>
            <span className="hero-stack-item">SQL Server</span>
          </div>

          {/* Descripción — escrita como persona, no como chatbot */}
          <p className="hero-desc">
            Recién formado en <strong>Desarrollo de Aplicaciones Web</strong>,
            con experiencia real en Mercanza trabajando en un entorno Full Stack profesional.
            Busco mi primer empleo donde seguir creciendo y aportar desde el primer día.
          </p>

          {/* Botones de acción */}
          <div className="hero-actions">
            <a href="#contact"  className="btn-primary">Contáctame</a>
            <a href="#projects" className="btn-secondary">Ver mi trabajo</a>
          </div>

          {/* Stats honestos */}
          <div className="hero-stats">
            {stats.map((st, i) => (
              <div key={i} className={`hero-stat ${i > 0 ? 'hero-stat-border' : ''}`}>
                <div className="hero-stat-n">
                  {st.n}<span className="hero-stat-accent">{st.suf}</span>
                </div>
                <div className="hero-stat-l">{st.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha — foto */}
        <div className="hero-right">
          <div className="hero-photo-wrap">

            {/* Anillo decorativo que gira */}
            <div className="hero-ring">
              <span className="hero-ring-dot" style={{ top: '2%',  left: '50%', transform: 'translateX(-50%)' }} />
              <span className="hero-ring-dot" style={{ bottom: '2%', left: '50%', transform: 'translateX(-50%)' }} />
              <span className="hero-ring-dot" style={{ left: '2%', top: '50%',  transform: 'translateY(-50%)' }} />
            </div>

            {/* Marco de la foto — si no encuentra foto.png muestra las iniciales */}
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

          {/* Info debajo de la foto */}
          <div className="hero-photo-card">
            <div className="hero-card-name">Rubén Marco</div>
            <div className="hero-card-role">
              <span className="hero-card-dot" />
              24 años · Madrid
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}