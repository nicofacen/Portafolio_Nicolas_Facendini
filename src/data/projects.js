// Fuente única de datos de los proyectos del portfolio.
// Se usa en Proyectos.astro (listado principal), SearchPanel.jsx (buscador), el Explorador y chatFaq.js (chatbot).
//
// Para agregar un proyecto, sumá un objeto con esta forma:
// {
//   title: "Nombre del proyecto",
//   description: "Descripción breve",
//   descriptionEn: "Short description", // opcional, se muestra con la página en inglés
//   image: "/projects/nombre.jpg", // captura 16:9, guardada en /public/projects
//   linkExternal: "https://...", // opcional, link al proyecto en vivo
//   technologies: ["React", "Tailwind CSS"], // se muestran como etiquetas
//   finish: true, // true = completado, false = en progreso
// },
// Id de la tarjeta en la página (para enlazar desde el Explorador): "GastroQode" -> "proyecto-gastroqode".
export function projectId(project) {
  const slug = project.title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `proyecto-${slug}`;
}

export const projects = [
  {
    title: "GastroQode",
    description:
      "Sitio web de GastroQode, un servicio de menús digitales con QR para restaurantes. Presenta la propuesta, casos de éxito, una comparativa con la carta en papel, planes y preguntas frecuentes.",
    descriptionEn:
      "Website for GastroQode, a QR digital menu service for restaurants. It presents the offer, success stories, a comparison with paper menus, plans and frequently asked questions.",
    image: "/projects/gastroqode.jpg",
    linkExternal: "https://gastroqode.com/",
    technologies: ["React", "Tailwind CSS", "Vite"],
    finish: true,
  },
];
