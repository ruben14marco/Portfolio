// src/components/Footer.jsx

import { useEffect, useRef, useState } from 'react';

// ─── Datos ────────────────────────────────────────────────────────────────────
const GITHUB   = 'https://github.com/ruben14marco';
const LINKEDIN = 'https://www.linkedin.com/in/rubén-marco-aa992b234';
const GMAIL    = 'https://mail.google.com/mail/?view=cm&to=ruben14marco@gmail.com';
const YEAR     = new Date().getFullYear();

const NAV_LINKS = [
  { label: 'Sobre mí',    href: '#about'      },
  { label: 'Experiencia', href: '#experience'  },
  { label: 'Proyectos',   href: '#projects'    },
  { label: 'Contacto',    href: '#contact'     },
];


// ─── Componente principal ─────────────────────────────────────────────────────
export default function Footer() {
  const canvasRef = useRef(null);
  const videoRef  = useRef(null);
  const footerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    setIsMobile(mql.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  // Arranca el video cuando el footer entra en pantalla, se pausa al salir
  useEffect(() => {
    const video  = videoRef.current;
    const footer = footerRef.current;
    if (!video || !footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Partículas — más lentas y escasas que en el resto del portfolio
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    const footer = canvas.parentElement;
    let animId;
    let mouse = { x: -9999, y: -9999 };

    const N    = 28;
    const CONN = 160;
    const MD   = 150;
    let W, H, pts;

    const resize = () => {
      W = canvas.width  = footer.offsetWidth;
      H = canvas.height = footer.offsetHeight;
    };

    const init = () => {
      pts = Array.from({ length: N }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r:  Math.random() * 2.5 + 1,
        a:  Math.random() * 0.3 + 0.15,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < N; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,58,58,${p.a})`;
        ctx.fill();

        for (let j = i + 1; j < N; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < CONN) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(232,58,58,${(1 - d / CONN) * 0.12})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }

        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < MD) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(232,58,58,${(1 - dm / MD) * 0.3})`;
          ctx.lineWidth = 0.7; ctx.stroke();
        }
      }

      animId = requestAnimationFrame(tick);
    };

    const onMove  = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onLeave = ()  => { mouse.x = -9999; mouse.y = -9999; };

    footer.addEventListener('mousemove',  onMove);
    footer.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', () => { resize(); init(); });

    resize(); init(); tick();

    return () => {
      cancelAnimationFrame(animId);
      footer.removeEventListener('mousemove',  onMove);
      footer.removeEventListener('mouseleave', onLeave);
    };
  }, []);


  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <footer ref={footerRef} style={{ ...s.footer, padding: isMobile ? '36px 22px 28px' : '44px 5% 32px' }}>

      <div style={s.topLine} />
      <canvas ref={canvasRef} style={s.canvas} />
      <div style={s.bgText} aria-hidden="true">RUBÉN MARCO</div>

      {/* Video con fondo negro — mix-blend-mode screen elimina el negro */}
      <video
        ref={videoRef}
        src="/videofooter.mov"
        muted
        loop
        playsInline
        style={s.pixelVideo}
      />

      <div style={s.inner}>
        {isMobile ? <MobileLayout /> : <DesktopLayout />}
      </div>

    </footer>
  );
}


// ─── Layout móvil: compacto, tres filas ──────────────────────────────────────
function MobileLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Logo + badge en la misma línea */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={s.logo}>RM<span style={s.logoDot}>.</span></div>
        <Badge />
      </div>

      {/* Iconos sociales */}
      <div style={s.social}>
        <SocialIcon href="https://github.com/ruben14marco"                                 title="GitHub">   <GithubIcon />   </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/rubén-marco-aa992b234"               title="LinkedIn"> <LinkedInIcon /> </SocialIcon>
        <SocialIcon href="https://mail.google.com/mail/?view=cm&to=ruben14marco@gmail.com" title="Email">    <MailIcon />     </SocialIcon>
      </div>

      {/* Copyright */}
      <p style={{ ...s.copy, fontSize: 11 }}>
        © {new Date().getFullYear()} <strong style={s.copyStrong}>Rubén Marco</strong> — Hecho con React
      </p>

    </div>
  );
}


// ─── Layout desktop: dos filas completas ─────────────────────────────────────
function DesktopLayout() {
  return (
    <>
      {/* Fila superior */}
      <div style={s.top}>
        <div>
          <div style={s.logo}>RM<span style={s.logoDot}>.</span></div>
          <p style={s.tagline}>
            Desarrollador Full Stack con base en Madrid.<br />
            Buscando el primer equipo donde crecer de verdad.
          </p>
        </div>

        <div style={s.right}>
          <Badge />
          <nav style={s.nav}>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} style={s.navLink}
                onMouseEnter={e => e.currentTarget.style.color = '#e83a3a'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Fila inferior */}
      <div style={s.bottom}>
        <p style={s.copy}>
          © {YEAR} <strong style={s.copyStrong}>Rubén Marco</strong> — Hecho con React
        </p>
        <div style={s.social}>
          <SocialIcon href={GITHUB}   title="GitHub">   <GithubIcon />   </SocialIcon>
          <SocialIcon href={LINKEDIN} title="LinkedIn"> <LinkedInIcon /> </SocialIcon>
          <SocialIcon href={GMAIL}    title="Email">    <MailIcon />     </SocialIcon>
        </div>
      </div>
    </>
  );
}


// ─── Badge "open to work" ─────────────────────────────────────────────────────
function Badge() {
  return (
    <span style={s.badge}>
      <span style={s.badgeDot} />
      Open to work
    </span>
  );
}


// ─── Botón icono social ───────────────────────────────────────────────────────
function SocialIcon({ href, title, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title} style={s.icon}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,58,58,0.45)'; e.currentTarget.style.color = '#e83a3a'; e.currentTarget.style.background = 'rgba(232,58,58,0.07)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.28)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
    >
      {children}
    </a>
  );
}


// ─── Iconos SVG ───────────────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}


// ─── Estilos ──────────────────────────────────────────────────────────────────
const s = {
  // Sección
  footer:    { position: 'relative', overflow: 'hidden', background: '#08080a' },
  canvas:    { position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 },
  topLine:   { position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(232,58,58,0.6) 30%, rgba(232,58,58,0.6) 70%, transparent 100%)', zIndex: 2 },
  bgText:    { position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-head)', fontSize: 'clamp(40px, 9vw, 88px)', fontWeight: 900, letterSpacing: '-4px', color: 'rgba(232,58,58,0.04)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', zIndex: 1, lineHeight: 1 },
  inner:     { maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 },

  // Desktop
  top:       { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 28, borderBottom: '1px solid rgba(255,255,255,0.05)', gap: 24, flexWrap: 'wrap' },
  right:     { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 },
  bottom:    { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, gap: 20, flexWrap: 'wrap' },
  nav:       { display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' },
  navLink:   { fontSize: 12.5, color: 'rgba(255,255,255,0.28)', textDecoration: 'none', fontWeight: 400, transition: 'color 0.2s' },
  tagline:   { fontSize: 12.5, color: 'rgba(255,255,255,0.2)', fontWeight: 300, maxWidth: 260, lineHeight: 1.65 },

  // Compartidos
  logo:      { fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 900, letterSpacing: '-1.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1, marginBottom: 10 },
  logoDot:   { color: '#e83a3a' },
  badge:     { display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e83a3a', background: 'rgba(232,58,58,0.07)', border: '1px solid rgba(232,58,58,0.2)', padding: '5px 12px', borderRadius: 100 },
  badgeDot:  { width: 4, height: 4, borderRadius: '50%', background: '#e83a3a', animation: 'pulse 2s infinite', display: 'inline-block' },
  social:    { display: 'flex', gap: 8 },
  icon:      { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 9, border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s, background 0.2s', background: 'rgba(255,255,255,0.02)' },
  copy:      { fontSize: 11.5, color: 'rgba(255,255,255,0.15)', fontWeight: 300 },
  copyStrong:{ color: 'rgba(255,255,255,0.28)', fontWeight: 500 },

  // Video pixel con fondo negro — screen blend elimina el negro y deja solo el personaje
  pixelVideo: { position: 'absolute', bottom: 16, right: 24, width: 72, height: 72, objectFit: 'contain', zIndex: 3, imageRendering: 'pixelated', mixBlendMode: 'screen' },
};