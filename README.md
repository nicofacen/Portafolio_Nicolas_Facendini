# Portafolio - Nicolas Facendini

Portafolio personal de Nicolas Facendini, estudiante de la Licenciatura en Gestión de la Tecnología de la Información (UADE), orientado al desarrollo web. La interfaz está inspirada en VS Code: explorador de archivos, buscador, pestañas y barra de estado.

## Qué incluye

- Secciones: presentación, sobre mí, experiencia, habilidades, proyectos y contacto.
- Español e inglés, con un selector en la esquina superior derecha. Se recuerda la elección.
- Diseño adaptable a celular, tablet y escritorio.
- Explorador de archivos y buscador de proyectos que leen los mismos datos que la página.
- Formulario de contacto con validación y aviso de envío o error.
- Asistente con IA (Gemini) que responde preguntas sobre mi perfil.

## Tecnologías

[Astro 5](https://astro.build), [React 19](https://react.dev), [Tailwind CSS 3](https://tailwindcss.com) y [Vercel](https://vercel.com) (publicación y función serverless del chatbot).

## Cómo correrlo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
npm run preview  # sirve ./dist
```

La función del chatbot (`api/chat.js`) corre solo en Vercel: con `npm run dev` el chat se ve, pero no responde.

## Variables de entorno

Copiá `.env.example` a `.env` para trabajar en local y cargalas también en Vercel (Settings > Environment Variables).

| Variable | Para qué sirve |
| --- | --- |
| `PUBLIC_WEB3FORMS_KEY` | Clave de [Web3Forms](https://web3forms.com) para que el formulario de contacto llegue a mi correo. |
| `PUBLIC_CHATBOT_API_URL` | Dirección de la función del chatbot. En Vercel alcanza con `/api/chat`. |
| `GEMINI_API_KEY` | Clave de Google AI Studio. Solo en Vercel; no es pública. |
| `ALLOWED_ORIGIN` | (Opcional) Dominio desde el que se acepta usar el chatbot. |
| `SITE_URL` | (Opcional) Dominio propio. Si no se define, se toma el de Vercel. |

## Dónde editar el contenido

| Qué | Dónde |
| --- | --- |
| Proyectos (tarjetas, buscador y Explorador) | `src/data/projects.js`, con la captura en `public/projects/` |
| Experiencia y formación | `src/data/experience.js` |
| Textos y traducciones | `src/i18n/translations.js` |
| Lo que sabe el chatbot | `src/data/chatbotContext.js` |
| Habilidades | `src/components/about_me/Habilidades.astro` |
| CV descargable | `public/Currículum Nicolas Facendini.pdf` |
| Fotos | `public/profile_photos/` |

## Estructura

```
api/chat.js          función serverless del chatbot (Vercel)
public/              CV, fotos, favicon y capturas de proyectos
src/components/      secciones de la página, paneles laterales y chatbot
src/data/            proyectos, experiencia y contexto del chatbot
src/i18n/            traducciones y manejo del idioma
src/layouts/         estructura general (header, paneles, pestañas, barra de estado)
src/pages/           página principal
```

## Publicación en Vercel

1. Subir el repositorio a GitHub.
2. En Vercel, importar el repositorio (detecta Astro solo).
3. Cargar las variables de entorno de la tabla de arriba.
4. Desplegar. Cada `git push` a `main` publica una nueva versión.

## Contacto

- Email: [nicolas.facendini@gmail.com](mailto:nicolas.facendini@gmail.com)
- LinkedIn: [nicolas-facendini](https://www.linkedin.com/in/nicolas-facendini-b1a932297/)
- GitHub: [nicofacen](https://github.com/nicofacen)
