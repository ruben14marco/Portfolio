// src/components/ParticlesBg.jsx
import { useEffect, useRef } from 'react';

export default function ParticlesBg({ colorRGB = '19, 19, 26' }) { // <-- Por defecto usa el color de "Sobre Mí"
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = 0;
    let height = 0;
    let particles = [];

    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isMobile = window.innerWidth < 850;
    
    const PARTICLE_COUNT = isMobile ? 30 : 90; 

    const resize = () => {
      if (!canvas.parentElement) return;
      const newWidth = canvas.parentElement.offsetWidth;
      const newHeight = canvas.parentElement.offsetHeight;
      
      if (particles.length > 0 && newHeight > height + 50) {
        particles.forEach(p => {
          if (Math.random() > 0.2) p.y = Math.random() * newHeight;
        });
      }
      
      width = newWidth;
      height = newHeight;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    let mouse = { x: null, y: null, active: false, radius: 160 };

    const onMove = (e) => {
      if (isTouchDevice) return; 
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    
    const onLeave = () => { mouse.active = false; };

    if (canvas.parentElement && !isTouchDevice) {
      canvas.parentElement.addEventListener('mousemove', onMove);
      canvas.parentElement.addEventListener('mouseleave', onLeave);
    }

    particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.25 + 0.1; 
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: Math.random() * 1.2 + 0.5,
        alpha: Math.random() * 0.15 + 0.05,
        phase: Math.random() * 100, 
        speedPhase: Math.random() * 0.01 + 0.002,
      };
    });

    const draw = () => {
      // AQUÍ PINTAMOS EL COLOR QUE LE PASEMOS A LA SECCIÓN
      ctx.fillStyle = `rgba(${colorRGB}, 0.15)`; 
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.phase += p.speedPhase;

        let ax = Math.sin(p.phase + p.y * 0.005) * 0.04;
        let ay = Math.cos(p.phase + p.x * 0.005) * 0.04;

        if (!isTouchDevice && mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const pullX = (dx / dist) * force * 0.1;
            const pullY = (dy / dist) * force * 0.1;
            const tangentX = (-dy / dist) * force * 0.3;
            const tangentY = (dx / dist) * force * 0.3;

            ax += pullX + tangentX;
            ay += pullY + tangentY;
          }
        }

        p.vx += ax;
        p.vy += ay;
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        let finalAlpha = p.alpha;
        let finalColor = `rgba(232, 58, 58, ${finalAlpha})`;

        if (!isTouchDevice && mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const factor = (mouse.radius - dist) / mouse.radius;
            finalAlpha = p.alpha + factor * 0.3;
            finalColor = `rgba(${232 + Math.floor(factor * 10)}, ${58 + Math.floor(factor * 10)}, 58, ${finalAlpha})`;
          }
        }

        ctx.fillStyle = finalColor;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', onMove);
        canvas.parentElement.removeEventListener('mouseleave', onLeave);
      }
    };
  }, [colorRGB]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  );
}