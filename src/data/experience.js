// Fuente única de la sección "Experiencia". La usan Experience.astro (la página) y
// chatbotContext.js (el chatbot), así los dos cuentan lo mismo.
//
// Cada texto va en español (es) e inglés (en). Para agregar un ítem, sumá un objeto al array:
//   kind:        etiqueta corta si no hay fechas (opcional si hay `period`)
//   period:      fechas, ej. { es: "2023 – 2024", en: "2023 – 2024" } (opcional)
//   title:       puesto o actividad
//   org:         lugar o institución (opcional)
//   description: qué hiciste y qué lograste
//   tags:        etiquetas; un string vale para ambos idiomas, o { es, en }
export const experience = [
  {
    period: { es: "2021 – Actualidad", en: "2021 – Present" },
    title: {
      es: "Presencia digital y desarrollo web",
      en: "Digital presence and web development",
    },
    org: {
      es: "Comercio de lencería · Lomas de Zamora",
      en: "Lingerie shop · Lomas de Zamora",
    },
    description: {
      es: "Gestioné las redes sociales del comercio: creé contenido, respondí las consultas de sus clientes y fui mejorando su presencia digital. Hoy estoy desarrollando su página web con HTML, CSS y JavaScript para que quienes la visiten tengan una experiencia online clara y cómoda.",
      en: "I managed the shop's social media: I created content, answered customer questions and steadily improved its digital presence. Today I'm building its website with HTML, CSS and JavaScript so visitors get a clear, comfortable online experience.",
    },
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      { es: "Redes sociales", en: "Social media" },
      { es: "Atención al cliente", en: "Customer service" },
    ],
  },
  {
    kind: { es: "Experiencia práctica", en: "Hands-on experience" },
    title: { es: "Testing de aplicaciones", en: "Application testing" },
    description: {
      es: "Realicé trabajos de testing de aplicaciones: probé funcionalidades, detecté errores y verifiqué que todo funcionara como se esperaba. Es una forma de trabajar que me ayuda a pensar como usuario y a cuidar los detalles que hacen que un producto se sienta bien.",
      en: "I carried out application testing work: I tried out features, detected bugs and checked that everything worked as expected. It's a way of working that helps me think like a user and care about the details that make a product feel right.",
    },
    tags: [
      { es: "Testing de aplicaciones", en: "Application testing" },
      { es: "Detección de errores", en: "Bug detection" },
    ],
  },
  {
    period: { es: "2022 – En curso (80%)", en: "2022 – Ongoing (80%)" },
    title: {
      es: "Licenciatura en Gestión de la Tecnología de la Información",
      en: "Bachelor's Degree in Information Technology Management",
    },
    org: {
      es: "UADE · Universidad Argentina de la Empresa",
      en: "UADE · Universidad Argentina de la Empresa",
    },
    description: {
      es: "Una formación que une tecnología y negocio. Cursé desarrollo web, programación en Python y Java, algoritmos y estructuras de datos, bases de datos con SQL Server, sistemas operativos Windows y Linux, redes y diseño de interfaces (UX/UI), además de análisis de datos, gestión de tecnología e innovación y sistemas de información.",
      en: "A degree that connects technology and business. I've studied web development, Python and Java programming, algorithms and data structures, SQL Server databases, Windows and Linux operating systems, networks and interface design (UX/UI), plus data analysis, technology and innovation management and information systems.",
    },
    tags: [
      "Python",
      "Java",
      "SQL Server",
      { es: "Algoritmos", en: "Algorithms" },
      { es: "Redes", en: "Networks" },
      "UX/UI",
      { es: "Análisis de datos", en: "Data analysis" },
    ],
  },
];
