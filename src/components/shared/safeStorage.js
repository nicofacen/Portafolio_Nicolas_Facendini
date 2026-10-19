// El almacenamiento del navegador puede estar bloqueado (navegadores embebidos como el de
// VS Code, modo privado, extensiones) o tener datos dañados. Nunca debe romper la página:
// si falla, se usa el valor por defecto y la página sigue funcionando sin recordar nada.

export function readJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function writeJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Sin almacenamiento: no se guarda y listo.
  }
}
