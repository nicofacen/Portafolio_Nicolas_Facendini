// Preguntas y respuestas del asistente. El bot solo responde estas preguntas: no usa IA.
//
// - Para agregar una pregunta, sumá un objeto a `faq` con `id`, `question` ({ es, en }) y
//   `answer` (una función que recibe el idioma y devuelve el texto).
// - En las respuestas se puede usar **negrita**, [texto](enlace) y saltos de línea.
// - Las respuestas de experiencia y proyectos leen experience.js y projects.js, así que
//   se mantienen al día solas. El resto está escrito acá según tu CV.
import { experience } from "./experience.js";
import { projects } from "./projects.js";

const EMAIL = "nicolas.facendini@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/nicolas-facendini-b1a932297/";
const WHATSAPP_URL = "https://wa.me/5491126677196";
const CV_URL = "/Curr%C3%ADculum%20Nicolas%20Facendini.pdf";

const pick = (value, lang) => (typeof value === "string" ? value : value?.[lang] ?? value?.es ?? "");
const bilingual = (es, en) => (lang) => (lang === "en" ? en : es);

function experienceAnswer(lang) {
  const intro = lang === "en" ? "This is what Nicolas has done so far:" : "Esto es lo que Nicolas hizo hasta ahora:";
  const outro = lang === "en" ? "You'll find the details in the Experience section." : "Los detalles están en la sección Experiencia.";
  const lines = experience.map((item) => `• **${pick(item.title, lang)}** (${pick(item.period ?? item.kind, lang)})`);
  return [intro, ...lines, outro].join("\n");
}

function projectsAnswer(lang) {
  if (projects.length === 0) {
    return lang === "en" ? "He's preparing new projects. Check back soon!" : "Está preparando nuevos proyectos. ¡Volvé pronto!";
  }
  const intro = lang === "en" ? "These are Nicolas's projects:" : "Estos son los proyectos de Nicolas:";
  const open = lang === "en" ? "View project" : "Ver proyecto";
  const lines = projects.map((project) => {
    const description = (lang === "en" && project.descriptionEn ? project.descriptionEn : project.description).replace(/\.$/, "");
    const stack = (project.technologies ?? []).join(", ");
    const link = project.linkExternal ? ` [${open}](${project.linkExternal})` : "";
    return `• **${project.title}**: ${description}.${stack ? ` (${stack})` : ""}${link}`;
  });
  return [intro, ...lines].join("\n");
}

export const faq = [
  {
    id: "who",
    question: { es: "¿Quién es Nicolas?", en: "Who is Nicolas?" },
    answer: bilingual(
      "Nicolas Facendini es estudiante de la Licenciatura en Gestión de la Tecnología de la Información (UADE), orientado al desarrollo web y a la tecnología aplicada al negocio. Es una persona proactiva, analítica y con alta capacidad de aprendizaje.",
      "Nicolas Facendini is a student of the Bachelor's Degree in Information Technology Management (UADE), focused on web development and technology applied to business. He is proactive, analytical and a fast learner."
    ),
  },
  {
    id: "study",
    question: { es: "¿Qué estudia?", en: "What does he study?" },
    answer: bilingual(
      "Cursa la **Licenciatura en Gestión de la Tecnología de la Información** en UADE (2022 – en curso, 80% completado). Estudió desarrollo web, programación en Python y Java, algoritmos y estructuras de datos, bases de datos con SQL Server, sistemas operativos Windows y Linux, redes, UX/UI y análisis de datos.",
      "He's studying the **Bachelor's Degree in Information Technology Management** at UADE (2022 – ongoing, 80% completed). He has studied web development, Python and Java programming, algorithms and data structures, SQL Server databases, Windows and Linux operating systems, networks, UX/UI and data analysis."
    ),
  },
  {
    id: "experience",
    question: { es: "¿Qué experiencia tiene?", en: "What experience does he have?" },
    answer: experienceAnswer,
  },
  {
    id: "skills",
    question: { es: "¿Qué tecnologías maneja?", en: "Which technologies does he use?" },
    answer: bilingual(
      "• **Lenguajes:** HTML, CSS, JavaScript, Python y Java\n• **Frameworks:** React y Astro\n• **Bases de datos:** SQL (SQL Server)\n• **Herramientas:** Git, GitHub, Docker, Postman y Visual Studio Code\nAdemás tiene conocimientos de testing de aplicaciones, algoritmos, redes y sistemas operativos Windows y Linux.",
      "• **Languages:** HTML, CSS, JavaScript, Python and Java\n• **Frameworks:** React and Astro\n• **Databases:** SQL (SQL Server)\n• **Tools:** Git, GitHub, Docker, Postman and Visual Studio Code\nHe also knows application testing, algorithms, networks and Windows and Linux operating systems."
    ),
  },
  {
    id: "projects",
    question: { es: "¿Qué proyectos hizo?", en: "What projects has he built?" },
    answer: projectsAnswer,
  },
  {
    id: "languages",
    question: { es: "¿Qué idiomas habla?", en: "Which languages does he speak?" },
    answer: bilingual(
      "Habla **español** (nativo) e **inglés** (avanzado).",
      "He speaks **Spanish** (native) and **English** (advanced)."
    ),
  },
  {
    id: "job",
    question: { es: "¿Está buscando trabajo?", en: "Is he looking for a job?" },
    answer: bilingual(
      "Sí. Está buscando su primera oportunidad en IT para aportar valor y desarrollarse dentro de entornos corporativos.",
      "Yes. He's looking for his first opportunity in IT to add value and grow within corporate environments."
    ),
  },
  {
    id: "location",
    question: { es: "¿Dónde vive?", en: "Where does he live?" },
    answer: bilingual("Vive en Buenos Aires, Argentina.", "He lives in Buenos Aires, Argentina."),
  },
  {
    id: "contact",
    question: { es: "¿Cómo puedo contactarlo?", en: "How can I contact him?" },
    answer: bilingual(
      `Podés escribirle a **${EMAIL}**, por [LinkedIn](${LINKEDIN_URL}) o por [WhatsApp](${WHATSAPP_URL}). También podés usar el formulario de la sección Contacto.`,
      `You can write to **${EMAIL}**, on [LinkedIn](${LINKEDIN_URL}) or on [WhatsApp](${WHATSAPP_URL}). You can also use the form in the Contact section.`
    ),
  },
  {
    id: "cv",
    question: { es: "¿Puedo descargar su CV?", en: "Can I download his CV?" },
    answer: bilingual(
      `Sí. Podés descargarlo con el botón **CV** del inicio de la página o [desde acá](${CV_URL}).`,
      `Yes. You can download it with the **CV** button at the top of the page or [from here](${CV_URL}).`
    ),
  },
];

export function faqText(id, part, lang) {
  const item = faq.find((entry) => entry.id === id);
  if (!item) return "";
  return part === "q" ? pick(item.question, lang) : item.answer(lang);
}
