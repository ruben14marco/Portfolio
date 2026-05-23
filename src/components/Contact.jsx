// src/components/Contact.jsx
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { personal } from '../data/portfolio';

const EMAILJS_SERVICE_ID  = 'service_3847ngo';
const EMAILJS_TEMPLATE_ID = 'template_d706a0p';
const EMAILJS_PUBLIC_KEY  = 'GEA7bBO4bU4JqKrAw';

const contactLinks = [
  {
    label: 'Correo electrónico',
    val: 'ruben14marco@gmail.com',
    href: `mailto:${personal.contact.email}`,
    icon: MailIcon,
  },
  {
    label: 'LinkedIn',
    val: 'rubén-marco-aa992b234',
    href: personal.contact.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [hovered, setHovered] = useState(null);
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!fields.name.trim())    e.name    = 'Introduce tu nombre';
    if (!fields.email.trim())   e.email   = 'Introduce tu email';
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = 'Email no válido';
    if (!fields.subject.trim()) e.subject = 'Introduce un asunto';
    if (!fields.message.trim()) e.message = 'Escribe tu mensaje';
    return e;
  };

  const handleChange = (e) => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) { setErrors(validation); return; }
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  fields.name,
          from_email: fields.email,
          subject:    fields.subject,
          message:    fields.message,
          to_email:   personal.contact.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFields({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={s.section}>
      <div style={s.inner}>

        {/* Header — consistente con el resto de secciones */}
        <div style={s.header}>
          <p style={s.label}><span style={s.labelLine} />Contacto</p>
          <h2 style={s.title}>Hablemos</h2>
          <p style={s.sub}>¿Tienes una oportunidad en mente? Escríbeme y te respondo en menos de 24h.</p>
        </div>

        <div style={s.grid}>

          {/* ── Columna izquierda ── */}
          <div style={s.leftCol}>

            <div>
              <p style={s.leftHeadline}>
                Disponible para<br />
                <span style={s.leftHeadlineAccent}>nuevas oportunidades</span>
              </p>
              <p style={s.leftText}>
                Busco mi primer rol como desarrollador Full Stack. Si necesitas a alguien
                que aprende rápido, se adapta y da el 100% desde el primer día — escríbeme.
              </p>
            </div>

            <div style={s.linksList}>
              {contactLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel="noreferrer"
                    style={{ ...s.contactLink, ...(hovered === i ? s.contactLinkHover : {}) }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div style={s.contactIconWrap}><Icon size={16} /></div>
                    <div>
                      <div style={s.contactLinkLabel}>{item.label}</div>
                      <div style={s.contactLinkVal}>{item.val}</div>
                    </div>
                    <span style={s.contactArrow}>→</span>
                  </a>
                );
              })}
            </div>

            <div style={s.availBadge}>
              <span style={s.availDot} />
              Disponible para nuevas oportunidades
            </div>

            {/* CV link */}
            <a
              href="/cv-ruben-marco.pdf"
              target="_blank"
              rel="noreferrer"
              style={s.cvLink}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(232,58,58,0.35)';
                e.currentTarget.style.color = 'var(--text)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
              }}
            >
              <span>Ver CV completo ↗</span>
            </a>
          </div>

          {/* ── Formulario ── */}
          <div style={s.formCard}>
            <form ref={formRef} onSubmit={handleSubmit} noValidate style={s.form}>

              <div style={s.row}>
                <Field label="Nombre" name="name" type="text" placeholder="Juan García"
                  value={fields.name} onChange={handleChange} error={errors.name} />
                <Field label="Email" name="email" type="email" placeholder="juan@empresa.com"
                  value={fields.email} onChange={handleChange} error={errors.email} />
              </div>

              <Field label="Asunto" name="subject" type="text" placeholder="Oportunidad de trabajo"
                value={fields.subject} onChange={handleChange} error={errors.subject} />

              <Field label="Mensaje" name="message" type="textarea"
                placeholder="Cuéntame sobre la oportunidad..."
                value={fields.message} onChange={handleChange} error={errors.message} rows={5} />

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{ ...s.submit, ...(status === 'sending' ? s.submitDisabled : {}) }}
                onMouseEnter={e => {
                  if (status !== 'sending') {
                    e.currentTarget.style.background = 'var(--accent2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = status === 'sending' ? 'var(--text3)' : 'var(--accent)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje →'}
              </button>

              <p style={s.formNote}>Respondo en menos de 24h</p>

              {status === 'success' && (
                <div style={s.feedbackSuccess}>
                  Mensaje enviado correctamente. Te respondo pronto.
                </div>
              )}
              {status === 'error' && (
                <div style={s.feedbackError}>
                  Hubo un error al enviar. Escríbeme directamente a{' '}
                  <a href={`mailto:${personal.contact.email}`} style={{ color: 'var(--accent2)' }}>
                    {personal.contact.email}
                  </a>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder, value, onChange, error, rows }) {
  const [focused, setFocused] = useState(false);
  const base = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid',
    borderColor: error ? 'rgba(232,58,58,0.6)' : focused ? 'rgba(232,58,58,0.5)' : 'rgba(255,255,255,0.08)',
    borderRadius: 8,
    padding: '10px 13px',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    outline: 'none',
    width: '100%',
    boxShadow: focused && !error ? '0 0 0 3px rgba(232,58,58,0.07)' : 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <label style={s.formLabel}>{label}</label>
      {type === 'textarea' ? (
        <textarea name={name} rows={rows} placeholder={placeholder} value={value}
          onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...base, resize: 'vertical' }} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} value={value}
          onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={base} />
      )}
      {error && <span style={{ fontSize: 12, color: 'var(--accent2)', marginTop: 2 }}>{error}</span>}
    </div>
  );
}

function MailIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const s = {
  // ── Sección — fondo negro según patrón ──
  section:  { background: 'var(--bg)', padding: '110px 5%' },
  inner:    { maxWidth: 1200, margin: '0 auto' },

  // Header — consistente con About, ExperienceEducation, Projects
  header: { marginBottom: 64 },
  label: {
    fontSize: 11, fontWeight: 600, letterSpacing: '0.2em',
    textTransform: 'uppercase', color: 'var(--accent)',
    marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
  },
  labelLine: { display: 'inline-block', width: 28, height: 1, background: 'var(--accent)' },
  title: {
    fontFamily: 'var(--font-head)',
    fontSize: 'clamp(36px, 5vw, 54px)',
    fontWeight: 900, letterSpacing: '-3px',
    color: 'var(--text)', lineHeight: 1, marginBottom: 12,
  },
  sub: { fontSize: 15, color: 'var(--text3)', fontWeight: 300 },

  grid: { display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56, alignItems: 'start' },

  // Columna izquierda
  leftCol:  { display: 'flex', flexDirection: 'column', gap: 28 },
  leftHeadline: {
    fontFamily: 'var(--font-head)',
    fontSize: 22, fontWeight: 700,
    color: 'var(--text)', lineHeight: 1.3, marginBottom: 14,
  },
  leftHeadlineAccent: { color: 'var(--accent)' },
  leftText: { fontSize: 14, color: 'var(--text2)', lineHeight: 1.82, fontWeight: 300 },

  linksList:    { display: 'flex', flexDirection: 'column', gap: 10 },
  contactLink:  {
    display: 'flex', alignItems: 'center', gap: 14,
    padding: '14px 16px',
    background: 'var(--card)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 12, textDecoration: 'none',
    color: 'var(--text)',
    transition: 'border-color 0.2s, transform 0.18s',
  },
  contactLinkHover: { borderColor: 'rgba(232,58,58,0.3)', transform: 'translateX(4px)' },
  contactIconWrap:  {
    width: 36, height: 36, borderRadius: 8,
    background: 'rgba(232,58,58,0.08)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--accent2)', flexShrink: 0,
  },
  contactLinkLabel: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 2 },
  contactLinkVal:   { fontSize: 13, color: 'var(--text)' },
  contactArrow:     { marginLeft: 'auto', color: 'var(--text3)', fontSize: 14 },

  availBadge: {
    display: 'flex', alignItems: 'center', gap: 8,
    padding: '10px 14px',
    background: 'rgba(232,58,58,0.05)',
    border: '1px solid rgba(232,58,58,0.15)',
    borderRadius: 8, fontSize: 12, color: 'var(--accent2)',
  },
  availDot: {
    display: 'inline-block', width: 6, height: 6,
    borderRadius: '50%', background: 'var(--accent)',
    animation: 'pulse 2s infinite', flexShrink: 0,
  },

  cvLink: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontSize: 13, fontWeight: 500,
    color: 'rgba(255,255,255,0.45)',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '10px 18px', borderRadius: 8,
    textDecoration: 'none',
    transition: 'border-color 0.2s, color 0.2s',
    alignSelf: 'flex-start',
  },

  // Formulario
  formCard: {
    background: 'var(--bg2)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 16, padding: '28px',
  },
  form:      { display: 'flex', flexDirection: 'column', gap: 14 },
  row:       { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
  formLabel: { fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text3)' },

  submit: {
    background: 'var(--accent)', color: '#fff', border: 'none',
    padding: '12px 28px', borderRadius: 8,
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
    cursor: 'pointer', width: '100%',
    transition: 'background 0.2s, transform 0.15s',
    boxShadow: '0 4px 20px rgba(232,58,58,0.25)',
  },
  submitDisabled: { background: 'var(--text3)', cursor: 'not-allowed', boxShadow: 'none' },
  formNote: { fontSize: 11, color: 'var(--text3)', textAlign: 'center' },

  feedbackSuccess: {
    padding: '12px 16px', borderRadius: 8,
    background: 'rgba(34,197,94,0.08)',
    border: '1px solid rgba(34,197,94,0.2)',
    color: '#4ade80', fontSize: 13,
  },
  feedbackError: {
    padding: '12px 16px', borderRadius: 8,
    background: 'rgba(232,58,58,0.08)',
    border: '1px solid rgba(232,58,58,0.2)',
    color: 'var(--accent2)', fontSize: 13, lineHeight: 1.6,
  },
};