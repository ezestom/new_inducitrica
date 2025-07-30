import en from "./locales/en.json";
import es from "./locales/es.json";
import { LANGUAGES, DEFAULT_LANGUAGE } from "./config";

const locales = {
  [LANGUAGES.EN]: en,
  [LANGUAGES.ES]: es,
};

export function getI18n(lang: string) {
  return locales[lang] || locales[DEFAULT_LANGUAGE];
}
