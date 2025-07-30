import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Parallax,
  Autoplay,
  FreeMode,
  Pagination,
  Navigation,
} from "swiper/modules";

import home3 from "/public/images/slide/2.webp";
import home2 from "/public/images/slide/3.webp";
import home1 from "/public/images/slide/1.webp";
import logo from "/public/images/logo2.webp";

import "./SlideHero.css";
import HeaderLink from "../HeaderLink.jsx";

export default function App({
  title1,
  titleYellow1,
  first_paragraph1,
  second_paragraph1,
  title2,
  titleYellow2,
  first_paragraph2,
  second_paragraph2,
  title3,
  titleYellow3,
  first_paragraph3,
  second_paragraph3,
  href1,
  href2,
  href3,
}) {
  const swiperRef = useRef(null);

  const [locale, setLocale] = useState("es"); // Valor por defecto es 'es'

  useEffect(() => {
    // Comprobamos la ruta actual y ajustamos el locale
    const currentPath = window.location.pathname;
    const detectedLocale = currentPath.startsWith("/en") ? "en" : "es";
    setLocale(detectedLocale);
  }, []); // Este efecto solo se ejecuta una vez al montar el componente

  const images = [
    {
      title: title1,
      titleYellow: titleYellow1,
      first_paragraph: first_paragraph1,
      second_paragraph: second_paragraph1,
      img: home1,
      href: href1,
    },
    {
      title: title2,
      titleYellow: titleYellow2,
      first_paragraph: first_paragraph2,
      second_paragraph: second_paragraph2,
      img: home2,
      href: href2,
    },
    {
      title: title3,
      titleYellow: titleYellow3,
      first_paragraph: first_paragraph3,
      second_paragraph: second_paragraph3,
      img: home3,
      href: href3,
    },
  ];

  return (
    <>
      <Swiper
        ref={swiperRef}
        speed={1250}
        parallax={true}
        autoplay={{ delay: 7500 }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Parallax, Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="absolute z-10 w-full h-fit">
              <HeaderLink
                href={image.href}
                locale={locale}
                className="home-swiper lg:pb-16 relative z-20 flex-col lg:flex-row flex lg:items-center justify-between w-full lg:w-full h-fit cursor-grab"
              >
                <div className=" flex items-center">
                  <img
                    src={logo.src}
                    alt="logo"
                    className="max-w-[100px] lg:max-w-[12vw] lg:translate-x-[21vw] translate-y-12 lg:translate-y-6 z-10 mx-auto lg:mx-0 drop-shadow"
                  />
                  <hr class="rotate-60 h-[15vh] lg:translate-x-[22vw] z-20 border-l-2 border-white hidden lg:flex" />
                </div>

                <div className="home-swiper-bg flex flex-col items-center lg:items-start py-16 lg:py-4 px-2 lg:px-[6vw] lg:w-[70vw]">
                  <div>
                    <h4 className="home-title w-full text-white flex font-bold items-center justify-start pb-4 tracking-tight text-xl lg:!text-[2.75vw] text-nowrap">
                      {image.title}
                      <span className="home-titleYellow ml-2  font-bold tracking-tight text-xl lg:!text-[2.75vw]  text-secondary z-20">
                        {image.titleYellow}
                      </span>
                    </h4>
                    <p className="home-titleYellow text-start text-white leading-7 text-base lg:text-[1.25vw]  drop-shadow-md">
                      {image.first_paragraph}
                    </p>
                    <p className="home-titleYellow text-start text-white leading-7 text-base lg:text-[1.25vw] drop-shadow-md flex items-center justify-start">
                      {image.second_paragraph}
                    </p>
                  </div>
                </div>
              </HeaderLink>
            </div>
            <img
              src={image.img.src}
              alt={`Imagen de slide ${index + 1}`}
              className="top-0 left-0 h-screen object-cover object-bottom w-full cursor-grab"
            />
            {/* Botones y paginación fuera del SwiperSlide */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </>
  );
}
