// src/data/portfolio.js
// ── Edita este archivo para actualizar el contenido del portfolio ──

export const personal = {
  name: "Rubén Marco",
  initials: "RM",
  role: "Full Stack Developer",
  tagline: "React · .NET · SQL",
  bio: [
    "Desarrollador Full Stack con formación en DAW y experiencia práctica en aplicaciones reales. Actualmente en Mercanza (Madrid), desarrollando y manteniendo una aplicación empresarial completa con React, .NET y SQL Server.",
    "Me caracterizo por una sólida ética de trabajo demostrada en más de 3 años de trayectoria ininterrumpida en entornos de alta demanda. Aprendo rápido, me adapto con facilidad y siempre busco la solución más eficiente.",
    "Además de mi stack técnico, cuento con habilidades interpersonales fuertes desarrolladas en roles de atención al cliente, logística y trabajo en equipo — lo que me hace un perfil completo y fiable."
  ],
  stats: [
    { value: "FS",  label: "Full Stack" },
    { value: "5+",  label: "Tech stacks" },
    { value: "DAW", label: "Titulación oficial" }
  ],
  contact: {
    email: "ruben14marco@gmail.com",
    linkedin: "https://www.linkedin.com/in/rubén-marco-aa992b234",
    portfolio: "http://www.unsitiogenial.es",
    location: "Madrid, España",
    languages: "Español (Nativo) · Inglés (Alto / Técnico)",
    extras: "Carnet B · Vehículo propio"
  }
};

export const skills = [
  {
    category: "Frontend",
    icon: "⚛",
    items: [
      { name: "React", hot: true },
      { name: "Angular", hot: false },
      { name: "JavaScript ES6", hot: true },
      { name: "HTML5", hot: false },
      { name: "CSS3", hot: false },
      { name: "TypeScript", hot: false }
    ]
  },
  {
    category: "Backend",
    icon: "⚙",
    items: [
      { name: ".NET (C#)", hot: true },
      { name: "PHP", hot: false },
      { name: "REST APIs", hot: false },
      { name: "Entity Framework", hot: false }
    ]
  },
  {
    category: "Bases de datos",
    icon: "🗄",
    items: [
      { name: "SQL Server", hot: true },
      { name: "MySQL", hot: false },
      { name: "T-SQL", hot: false },
      { name: "Stored Procedures", hot: false }
    ]
  },
  {
    category: "Herramientas",
    icon: "🛠",
    items: [
      { name: "Git", hot: false },
      { name: "GitHub", hot: false },
      { name: "Power BI", hot: false },
      { name: "Qlik", hot: false },
      { name: "Visual Studio", hot: false },
      { name: "VS Code", hot: false }
    ]
  }
];

export const softSkills = [
  { icon: "🤝", text: "Trabajo en equipo y comunicación efectiva" },
  { icon: "🧠", text: "Resolución analítica de problemas" },
  { icon: "⏱️", text: "Gestión eficiente de tiempos y tareas" },
  { icon: "🔄", text: "Alta capacidad de adaptación y resiliencia" },
  { icon: "🚀", text: "Aprendizaje rápido y proactividad" },
  { icon: "🎯", text: "Alta fiabilidad, puntualidad y compromiso" }
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Mercanza",
    location: "Madrid",
    period: "Feb. 2026 – Jun. 2026",
    bullets: [
      "Desarrollo y mantenimiento de la aplicación empresarial en entorno Full Stack.",
      "Creación de interfaces dinámicas y componentes reutilizables con React.",
      "Implementación de lógica de negocio y gestión de modelos de datos en .NET (C#).",
      "Diseño de consultas, gestión y optimización de bases de datos relacionales con SQL Server.",
      "Migración y actualización técnica de proyectos corporativos desarrollados en Angular.",
      "Formación y uso de herramientas de Business Intelligence: Power BI y Qlik."
    ]
  },
  {
    role: "Mozo de Almacén",
    company: "Skechers",
    location: "Madrid",
    period: "Sept. 2023 – Actualidad",
    bullets: [
      "Gestión de inventario, recepción de mercancías y logística en tienda de alto volumen.",
      "Trayectoria ininterrumpida de casi 3 años demostrando alta fiabilidad y compromiso."
    ]
  },
  {
    role: "Atención al Cliente & Logística",
    company: "Varios",
    location: "Madrid",
    period: "2020 – 2023",
    bullets: [
      "Repartidor (Papa John's), Socorrista (Grupo Alagua), Dependiente (Mega Calzado), Monitor (Col. Santa María).",
      "Resolución de problemas en tiempo real, gestión bajo presión y comunicación efectiva con clientes."
    ]
  }
];

export const education = [
  {
    degree: "CFGS Desarrollo de Aplicaciones Web (DAW)",
    school: "ThePowerFP",
    location: "Madrid",
    period: "2024 – 2026"
  },
  {
    degree: "TS Animación de Actividades Físicas (TAFAD)",
    school: "Colegio Amanecer",
    location: "Alcorcón",
    period: "2020 – 2022"
  },
  {
    degree: "Bachillerato",
    school: "Colegio Amorós",
    location: "Carabanchel",
    period: "2018 – 2020"
  }
];

// ── Añade tus proyectos aquí cuando los tengas ──
export const projects = [
  // {
  //   title: "Nombre del proyecto",
  //   description: "Descripción breve de lo que hace.",
  //   tags: ["React", ".NET", "SQL Server"],
  //   link: "https://github.com/tuusuario/proyecto",
  //   demo: "https://demo.com"
  // }
];