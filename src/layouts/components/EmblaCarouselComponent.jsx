import EmblaCarousel from "../components/embla-carousel/EmblaCarousel.jsx";
import expo1 from "/public/images/inducitrica/expo1.jpg";
import expo2 from "/public/images/inducitrica/expo2.jpg";
import expo3 from "/public/images/inducitrica/expo3.jpg";

const IMAGES = [{ src: expo1.src }, { src: expo2.src }, { src: expo3.src }];

const OPTIONS = {};

export function EmblaCarouselComponent() {
  return <EmblaCarousel slides={IMAGES} options={OPTIONS} />;
}
