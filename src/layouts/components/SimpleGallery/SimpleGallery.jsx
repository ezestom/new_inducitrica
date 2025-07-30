import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div
      className="pswp-gallery top-0 z-10 grid h-full grid-cols-3 lg:grid-cols-4 place-items-center flex-wrap gap-2 lg:gap-4 overflow-x-auto sm:flex items-center justify-center w-full"
      id={props.galleryID}
    >
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          data-cropped="true"
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
          className="border-2 border-transparent object-cover transition-transform hover:transform hover:border-2 hover:border-primary-800/75 max-h-[150px] max-w-[150px] lg:max-h-[350px] lg:max-w-[350px] aspect-square relative overflow-hidden shadow-md hover:shadow-lg"
        >
          <img
            src={image.thumbnailURL}
            alt=""
            className="h-full w-full object-cover"
          />
        </a>
      ))}
    </div>
  );
}
