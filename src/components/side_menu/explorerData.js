import { projects, projectId } from "@data/projects.js";

export const explorerItems = [
  {
    type: "folder",
    name: "portfolio",
    open: true,
    children: [
      {
        type: "folder",
        name: "public",
        open: true,
        children: [
          {
            type: "folder",
            name: "about_me",
            open: true,
            children: [
              { type: "file", name: "sobre-mi", labelKey: "explorer.aboutMe", url: "/#sobre-mi" },
              { type: "file", name: "experiencia", labelKey: "explorer.experience", url: "/#experiencia" },
              { type: "file", name: "habilidades", labelKey: "explorer.skills", url: "/#habilidades" },
              { type: "file", name: "proyectos", labelKey: "explorer.projects", url: "/#proyectos" },
              { type: "file", name: "contacto", labelKey: "explorer.contact", url: "/#contacto" },
            ],
          },
        ],
      },
      {
        type: "folder",
        name: "src",
        open: true,
        children: [
          {
            type: "folder",
            name: "my_projects",
            open: false,
            // Un archivo por proyecto de projects.js: al tocarlo lleva a su tarjeta.
            children: projects.map((project) => ({
              type: "file",
              name: project.title,
              url: `/#${projectId(project)}`,
              id: projectId(project),
            })),
          },
        ],
      }
    ],
  },
];

export function getSectionId(filename) {
  // Quita la extensión y reemplaza guiones por guiones bajos si quieres
  return filename;
}
