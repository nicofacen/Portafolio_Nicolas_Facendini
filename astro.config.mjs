// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Dirección pública del sitio, usada para las URLs absolutas de la vista previa (Open Graph).
// En Vercel se toma sola; con un dominio propio, definir SITE_URL (ej. https://midominio.com).
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || (vercelHost ? `https://${vercelHost}` : "http://localhost:4321");

// https://astro.build/config
export default defineConfig({
  site,
  base: "/",
  integrations: [tailwind(),react()],
}); 