// src/components/Footer.jsx
const GITHUB   = 'https://github.com/ruben14marco';
const LINKEDIN = 'https://www.linkedin.com/in/rubén-marco-aa992b234';
const EMAIL    = 'mailto:ruben14marco@gmail.com';
const YEAR     = new Date().getFullYear();

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.inner}>

        <div style={s.left}>
          <span style={s.logo}>RM<span style={s.dot}>.</span></span>
          <span style={s.copy}>© {YEAR} Rubén Marco — Hecho con React</span>
        </div>

        <div style={s.links}>
          <a href={GITHUB}   target="_blank" rel="noreferrer" style={s.link}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          >
            <GithubIcon size={15} /> GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" style={s.link}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          >
            <LinkedInIcon size={15} /> LinkedIn
          </a>
          <a href={EMAIL} style={s.link}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          >
            <MailIcon size={15} /> Email
          </a>
        </div>

      </div>
    </footer>
  );
}

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedInIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function MailIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

const s = {
  footer: {
    background: 'var(--bg)',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '24px 5%',
  },
  inner: {
    maxWidth: 1200, margin: '0 auto',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', gap: 20,
    flexWrap: 'wrap',
  },
  left: { display: 'flex', alignItems: 'center', gap: 16 },
  logo: {
    fontFamily: 'var(--font-head)',
    fontSize: 16, fontWeight: 800,
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: '-0.5px',
  },
  dot: { color: 'var(--accent)' },
  copy: { fontSize: 12, color: 'rgba(255,255,255,0.2)' },
  links: { display: 'flex', gap: 24, alignItems: 'center' },
  link: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    fontSize: 12, color: 'rgba(255,255,255,0.3)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
};