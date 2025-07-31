export const languages: Record<string, { code: string; name: string }> = {
  es: {
    code: "es",
    name: "ES",
  },
  en: {
    code: "en",
    name: "EN",
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.about": "Nosotros",
    "nav.products": "Productos",
    "nav.productJuice": "Jugo de limón",
    "nav.productPeel": "Cáscara de limón",
    "nav.productOil": "Aceite de limón",
    "nav.environment": "Medio ambiente",
    "nav.ethics": "Ética",
    "nav.community": "Comunidad",
  },
  en: {
    "nav.about": "About",
    "nav.products": "Products",
    "nav.productJuice": "Lemon Juice",
    "nav.productPeel": "Lemon Peel",
    "nav.productOil": "Lemon Oil",
    "nav.environment": "Environment",
    "nav.ethics": "Ethics",
    "nav.community": "Community",
  },
} as const;

export const routes = {
  es: {
    inicio: "",
    nosotros: "about",
    contacto: "contact",
  },
  en: {
    home: "",
    about: "about",
    contact: "contact",
  },
};
