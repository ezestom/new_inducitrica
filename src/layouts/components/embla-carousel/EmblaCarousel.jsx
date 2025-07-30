import React from "react";
import "./EmblaCarousel.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./EmblaCarouselSelectedSnapDisplay";
import useEmblaCarousel from "embla-carousel-react";

import img1 from "/public/images/inducitrica/expo1.jpg";
import img2 from "/public/images/inducitrica/expo2.jpg";
import img3 from "/public/images/inducitrica/expo3.jpg";
import img4 from "/public/images/inducitrica/expo4.jpeg";
import img5 from "/public/images/inducitrica/expo5.jpeg";
import img6 from "/public/images/inducitrica/expo6.jpeg";
import img7 from "/public/images/inducitrica/quinta2.jpg";
import img8 from "/public/images/inducitrica/farm5.jpg";
import img9 from "/public/images/inducitrica/farm6.jpg";
import img10 from "/public/images/inducitrica/farm12.jpg";
import img11 from "/public/images/inducitrica/lemon6.jpg";
import img12 from "/public/images/inducitrica/lemon1.jpg";
import img13 from "/public/images/inducitrica/lemon14.jpg";
import img14 from "/public/images/inducitrica/quinta3.jpg";
import img15 from "/public/images/inducitrica/planta2.jpg";
import img16 from "/public/images/inducitrica/planta3.jpg";
import img17 from "/public/images/inducitrica/planta1.jpg";

const slides = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img15,
  img8,
  img9,
  img16,
  img10,
  img11,
  img17,
  img12,
  img13,
  img14,
];

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((img, index) => (
            <div
              className="embla__slide max-w-[750px] object-center"
              key={index}
            >
              <div className="embla__slide__number  bg-gray-100 p-2 lg:p-0 rounded-3xl overflow-hidden ">
                {" "}
                <img
                  src={img.src}
                  className="hover:cursor-grab lg:h-full  w-full lg:object-cover rounded-2xl lg:rounded-none"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        /> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
