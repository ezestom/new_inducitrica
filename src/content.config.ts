import { defineCollection } from "astro:content";

// Define una colección genérica para cada tipo de contenido
const aboutCollection = defineCollection({});
const aboutEnCollection = defineCollection({});
const complaintCollection = defineCollection({});
const contactCollection = defineCollection({});
const contactEnCollection = defineCollection({});
const homepageCollection = defineCollection({});
const homepageEnCollection = defineCollection({});
const pagesCollection = defineCollection({});

export const collections = {
  complaint: complaintCollection,
  contact: contactCollection,
  contactEn: contactEnCollection,
  homepage: homepageCollection,
  homepageEn: homepageEnCollection,
  pages: pagesCollection,
};
