import { translations } from "./translations.js";

export const LANGS = ["es", "en"];
export const DEFAULT_LANG = "es";
export const LANG_EVENT = "langchange";
const STORAGE_KEY = "lang";

export function getLang() {
  const lang = document.documentElement.lang;
  return LANGS.includes(lang) ? lang : DEFAULT_LANG;
}

export function t(key, lang, params) {
  let text = translations[lang]?.[key] ?? translations[DEFAULT_LANG][key] ?? key;
  if (params) {
    for (const [name, value] of Object.entries(params)) {
      text = text.replaceAll(`{${name}}`, String(value));
    }
  }
  return text;
}

const ATTRIBUTE_BINDINGS = [
  ["data-i18n-placeholder", "placeholder"],
  ["data-i18n-title", "title"],
  ["data-i18n-aria-label", "aria-label"],
];

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"), lang);
  });

  for (const [dataAttr, targetAttr] of ATTRIBUTE_BINDINGS) {
    document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
      el.setAttribute(targetAttr, t(el.getAttribute(dataAttr), lang));
    });
  }

  // Contenido que viene de datos (ej. descripciones de proyectos) trae ambos textos en el propio elemento.
  document.querySelectorAll("[data-lang-es]").forEach((el) => {
    el.textContent = el.getAttribute(`data-lang-${lang}`) ?? el.getAttribute("data-lang-es");
  });

  document.querySelectorAll("[data-lang-option]").forEach((el) => {
    const active = String(el.getAttribute("data-lang-option") === lang);
    el.setAttribute("data-active", active);
    el.setAttribute("aria-pressed", active);
  });
}

export function setLang(lang) {
  const next = LANGS.includes(lang) ? lang : DEFAULT_LANG;
  document.documentElement.lang = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {}
  applyTranslations(next);
  document.documentElement.classList.remove("i18n-pending");
  window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: next }));
}

export function restoreLang() {
  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch {}
  setLang(stored ?? DEFAULT_LANG);
}
