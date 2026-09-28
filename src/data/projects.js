// Fuente única de datos de los proyectos del portfolio.
// Se usa tanto en Proyectos.astro (listado principal) como en SearchPanel.jsx (buscador).
// `icons` son nombres de string que se resuelven a componentes de icono en cada contexto.
// Agregá tus proyectos siguiendo esta forma:
// {
//   title: "Nombre del proyecto",
//   description: "Descripción breve",
//   descriptionEn: "Short description", // opcional, se muestra con la página en inglés
//   image: "/ruta-a-la-imagen.png", // colocar la imagen en /public
//   linkExternal: "https://...", // opcional, link al proyecto en vivo
//   link: "/my-projects/slug-del-proyecto",
//   icons: ["Next", "Laravel"], // nombres válidos: ver iconMap en Proyectos.astro
//   finish: true, // true = completado, false = en progreso
// },
export const projects = [];
