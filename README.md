# Portfolio — Rubén Marco

Portfolio personal desarrollado en **React 18**. Diseño oscuro con acento rojo, tipografías Syne + DM Sans, animaciones de scroll reveal y estructura de componentes limpia.

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx       ← Navegación fija con blur
│   ├── Hero.jsx         ← Sección principal
│   ├── About.jsx        ← Sobre mí + info de contacto
│   ├── Skills.jsx       ← Stack técnico + habilidades
│   ├── Experience.jsx   ← Timeline de experiencia laboral
│   ├── Education.jsx    ← Formación académica
│   ├── Contact.jsx      ← Formulario + links de contacto
│   └── Footer.jsx       ← Pie de página
├── data/
│   └── portfolio.js     ← ⭐ EDITA AQUÍ todo el contenido
├── hooks/
│   └── useScrollReveal.js ← Hook para animaciones de scroll
├── App.jsx
├── index.js
└── index.css            ← Variables CSS globales
```

## Cómo actualizar el contenido

Todo el contenido está centralizado en `src/data/portfolio.js`. Solo tienes que editar ese archivo:

- **Datos personales** → objeto `personal`
- **Skills técnicos** → array `skills`
- **Experiencia laboral** → array `experience`
- **Educación** → array `education`
- **Proyectos** → array `projects` (cuando los tengas)

## Añadir tu foto

En `src/components/Hero.jsx`, busca el div con estilo `avatar` y reemplaza el texto `RM` por:

```jsx
<img src="/foto.jpg" alt="Rubén Marco" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
```

Coloca `foto.jpg` en la carpeta `public/`.

## Desarrollo local

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## Despliegue en Vercel (gratis)

1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com) → "New Project"
3. Importa el repositorio → Vercel detecta React automáticamente
4. Deploy → tendrás una URL pública en segundos

## Despliegue en Netlify (alternativa gratis)

```bash
npm run build
```

Arrastra la carpeta `build/` a [netlify.com/drop](https://app.netlify.com/drop)

---

Made with React 18 · Diseño oscuro · 2026
