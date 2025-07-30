import { defineCollection } from "astro:content";

// Define una colección genérica para cada tipo de contenido
const aboutCollection = defineCollection({});
const aboutEnCollection = defineCollection({});
const complaintCollection = defineCollection({});
const contactCollection = defineCollection({});
const contactEnCollection = defineCollection({});
const homepageCollection = defineCollection({});
const homepageEnCollection = defineCollection({});
const howItWorksCollection = defineCollection({});
const howItWorksEnCollection = defineCollection({});
const pagesCollection = defineCollection({});

export const collections = {
  about: aboutCollection,
  aboutEn: aboutEnCollection,
  complaint: complaintCollection,
  contact: contactCollection,
  contactEn: contactEnCollection,
  homepage: homepageCollection,
  homepageEn: homepageEnCollection,
  "how-it-works": howItWorksCollection,
  "how-it-works-en": howItWorksEnCollection,
  pages: pagesCollection,
};
