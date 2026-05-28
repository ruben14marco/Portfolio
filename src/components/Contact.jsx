// src/components/Contact.jsx
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ParticlesBg from './ParticlesBg'; 

const EMAILJS_SERVICE_ID  = 'service_3847ngo';
const EMAILJS_TEMPLATE_ID = 'template_d706a0p';
const EMAILJS_PUBLIC_KEY  = 'GEA7bBO4bU4JqKrAw';

const MY_EMAIL = 'ruben14marco@gmail.com';
const MY_LINKEDIN = 'https://www.linkedin.com/in/rubén-marco-aa992b234';

const contactLinks = [
  { label: 'Correo electrónico', val: 'ruben14marco@gmail.com', href: `mailto:${MY_EMAIL}`, icon: MailIcon },
  { label: 'LinkedIn', val: 'rubén-marco', href: MY_LINKEDIN, icon: LinkedInIcon, external: true },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus]   = useState('idle');
  const [hovered, setHovered] = useState(null);
  const [fields, setFields]   = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors]   = useState({});
  
  // Detector de móvil integrado
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 850px)');
    setIsMobile(mql.matches);
    const handleChange = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const validate = () => {
    const e = {};
    if (!fields.name.trim())    e.name    = 'Dime cómo te llamas';
    if (!fields.email.trim())   e.email   = 'Necesito tu email para responderte';
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = 'El formato del email no parece válido';
    if (!fields.subject.trim()) e.subject = 'Añade un asunto breve';
    if (!fields.message.trim()) e.message = 'No te olvides de escribir el mensaje';
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
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  fields.name,
        from_email: fields.email,
        subject:    fields.subject,
        message:    fields.message,
        to_email:   MY_EMAIL,
      }, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setFields({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ ...s.section, padding: isMobile ? '80px 20px' : '110px 5%' }}>
      
      {/* FONDO INTERACTIVO OSCURO */}
      <ParticlesBg colorRGB="8, 8, 10" />

      <div style={s.inner}>

        <div style={s.header}>
          <p style={s.label}><span style={s.labelLine} />Contacto</p>
          <h2 style={s.title}>Hablemos</h2>
          <p style={s.sub}>Si crees que mi perfil encaja en tu equipo, escríbeme. Respondo rápido.</p>
        </div>

        {/* Layout Responsive */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 50 : 80, alignItems: 'start' }}>

          {/* Columna izquierda */}
          <div style={{ flex: 1, minWidth: isMobile ? '100%' : '300px' }}>
            <div>
              <p style={s.leftHeadline}>
                Buscando mi<br />
                <span style={s.leftHeadlineAccent}>primer equipo</span>
              </p>
              <p style={s.leftText}>
                Busco una empresa donde poder aportar valor desde el primer día. Si necesitas a un perfil Junior con ganas, capacidad de trabajo real y que no se rinde ante los problemas, aquí me tienes.
              </p>
            </div>

            <div style={s.linksList}>
              {contactLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a key={i} href={item.href}
                    target={item.external ? '_blank' : undefined} rel="noreferrer"
                    style={{ ...s.contactLink, ...(hovered === i ? s.contactLinkHover : {}) }}
                    onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                  >
                    <div style={s.contactIconWrap}><Icon size={16} /></div>
                    <div>
                      <div style={s.contactLinkLabel}>{item.label}</div>
                      <div style={s.contactLinkVal}>{item.val}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div style={{ marginTop: 32 }}>
              <a href="/cv-ruben-marco.pdf" target="_blank" rel="noreferrer" style={s.cvLink}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,58,58,0.35)'; e.currentTarget.style.color = 'var(--text)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
              >
                Ver CV completo
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div style={{ ...s.formCard, flex: 1.5, width: '100%' }}>
            <form ref={formRef} onSubmit={handleSubmit} noValidate style={s.form}>

              {/* Nombre + Email responsive */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
                <Field label="Nombre" name="name" type="text" placeholder="Tu nombre..."
                  value={fields.name} onChange={handleChange} error={errors.name} />
                <Field label="Email" name="email" type="email" placeholder="tu@email.com"
                  value={fields.email} onChange={handleChange} error={errors.email} />
              </div>

              <Field label="Asunto" name="subject" type="text" placeholder="¿De qué trata el mensaje?"
                value={fields.subject} onChange={handleChange} error={errors.subject} />
              <Field label="Mensaje" name="message" type="textarea" placeholder="Hola Rubén, te escribo porque..."
                value={fields.message} onChange={handleChange} error={errors.message} rows={5} />

              <button type="submit" disabled={status === 'sending'}
                style={{ ...s.submit, ...(status === 'sending' ? s.submitDisabled : {}) }}
                onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.background = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}}
                onMouseLeave={e => { e.currentTarget.style.background = status === 'sending' ? 'var(--text3)' : 'var(--accent)'; e.currentTarget.style.transform = 'none'; }}
              >
                {status === 'sending' ? 'Enviando mensaje...' : 'Enviar mensaje'}
              </button>

              {status === 'success' && <div style={s.feedbackSuccess}>Mensaje enviado. Te contestaré lo antes posible.</div>}
              {status === 'error' && (
                <div style={s.feedbackError}>
                  Ha habido un error en el servidor. Por favor, escríbeme directamente a{' '}
                  <a href={`mailto:${MY_EMAIL}`} style={{ color: 'var(--accent2)' }}>{MY_EMAIL}</a>
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
    borderWidth: 1, borderStyle: 'solid',
    borderColor: error ? 'rgba(232,58,58,0.6)' : focused ? 'rgba(232,58,58,0.5)' : 'rgba(255,255,255,0.08)',
    borderRadius: 8, padding: '10px 13px',
    color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 13,
    outline: 'none', width: '100%',
    boxShadow: focused && !error ? '0 0 0 3px rgba(232,58,58,0.07)' : 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <label style={s.formLabel}>{label}</label>
      {type === 'textarea'
        ? <textarea name={name} rows={rows} placeholder={placeholder} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={{ ...base, resize: 'vertical' }} />
        : <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={base} />
      }
      {error && <span style={{ fontSize: 12, color: 'var(--accent2)', marginTop: 2 }}>{error}</span>}
    </div>
  );
}

function MailIcon({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}
function LinkedInIcon({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
}

const s = {
  section:  { background: 'var(--bg)', position: 'relative', overflow: 'hidden' },
  inner:    { maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 },
  header:   { marginBottom: 50 },
  label:    { fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 },
  labelLine:{ display: 'inline-block', width: 28, height: 1, background: 'var(--accent)' },
  title:    { fontFamily: 'var(--font-head)', fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 900, letterSpacing: '-3px', color: 'var(--text)', lineHeight: 1, marginBottom: 12 },
  sub:      { fontSize: 15, color: 'var(--text3)', fontWeight: 300, maxWidth: 500 },
  
  leftCol:  { display: 'flex', flexDirection: 'column', gap: 32 },
  leftHeadline: { fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, marginBottom: 14 },
  leftHeadlineAccent: { color: 'var(--accent)' },
  leftText: { fontSize: 14, color: 'var(--text2)', lineHeight: 1.82, fontWeight: 300 },
  
  linksList:    { display: 'flex', flexDirection: 'column', gap: 10 },
  contactLink:  { display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: 'var(--card)', borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.06)', borderRadius: 12, textDecoration: 'none', color: 'var(--text)', transition: 'border-color 0.2s, transform 0.18s' },
  contactLinkHover: { borderColor: 'rgba(232,58,58,0.3)', transform: 'translateX(4px)' },
  contactIconWrap:  { width: 36, height: 36, borderRadius: 8, background: 'rgba(232,58,58,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent2)', flexShrink: 0 },
  contactLinkLabel: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 2 },
  contactLinkVal:   { fontSize: 13, color: 'var(--text)' },
  
  cvLink:     { display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)', borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.08)', padding: '10px 18px', borderRadius: 8, textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s', alignSelf: 'flex-start' },
  
  formCard:  { background: 'var(--bg2)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '28px' },
  form:      { display: 'flex', flexDirection: 'column', gap: 16 },
  formLabel: { fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text3)' },
  submit:    { background: 'var(--accent)', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, cursor: 'pointer', width: '100%', transition: 'background 0.2s, transform 0.15s', boxShadow: '0 4px 20px rgba(232,58,58,0.25)', marginTop: 8 },
  submitDisabled: { background: 'var(--text3)', cursor: 'not-allowed', boxShadow: 'none' },
  
  feedbackSuccess: { padding: '12px 16px', borderRadius: 8, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#4ade80', fontSize: 13, marginTop: 10 },
  feedbackError:   { padding: '12px 16px', borderRadius: 8, background: 'rgba(232,58,58,0.08)', border: '1px solid rgba(232,58,58,0.2)', color: 'var(--accent2)', fontSize: 13, lineHeight: 1.6, marginTop: 10 },
};