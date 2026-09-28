import { useSyncExternalStore } from "react";
import { DEFAULT_LANG, LANG_EVENT, getLang, t } from "./lang.js";

function subscribe(onChange) {
  window.addEventListener(LANG_EVENT, onChange);
  return () => window.removeEventListener(LANG_EVENT, onChange);
}

// El servidor siempre renderiza en español; React hidrata con eso y después pasa al idioma guardado.
export function useLang() {
  const lang = useSyncExternalStore(subscribe, getLang, () => DEFAULT_LANG);
  return { lang, t: (key, params) => t(key, lang, params) };
}
