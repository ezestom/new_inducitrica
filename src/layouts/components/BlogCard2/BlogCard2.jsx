import { useState, useEffect } from "react";
import "./BlogCard2.css";
import close from "/public/images/icons/x.svg";

export function BlogCard2({
  image,
  epigraph,
  title,
  subtitle,
  description1 = "",
  description2 = "",
  description3 = "",
  description4 = "",
  description5 = "",
  description6 = "",
  description7 = "",
  description8 = "",
  description9 = "",
  link = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    console.log("open");
    // stop scroll
    document.body.style.overflow = "hidden";
  };
  const closeDialog = () => {
    setIsOpen(false);
    console.log("close");
    // close the modal

    // enable scroll
    document.body.style.overflow = "auto";
  };

  // create a function, if press esc close the modal

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      onClick={openDialog}
      className="group relative flex flex-col overflow-hidden w-full cursor-pointer h-full"
      role="button"
      aria-label="Open blog post dialog"
    >
      <figure className="relative">
        <img
          src={image}
          alt="art cover"
          loading="lazy"
          className="h-[100px] lg:h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </figure>
      <div className="relative pt-2 lg:pt-4 flex flex-col flex-1">
        <h3 className="mt-1.5 flex-shrink-0 text-start text-lg font-medium text-primary lg:text-2xl line-clamp-2">
          {title}
        </h3>
        <hr className="w-[5rem] border-t-2 border-tertiary my-2" />
        <p className="mt-1 line-clamp-4 text-tertiary text-sm lg:text-base">
          {subtitle}
        </p>
        {/* <div className="mt-auto flex gap-4">
          <button
            type="button"
            className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
            onClick={openDialog}
          >
            {read_more}
          </button>
        </div> */}
      </div>

      {isOpen && (
        <section
          className="fixed inset-0 z-50 w-full items-center justify-center bg-black bg-opacity-50 flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <article className="relative h-full w-full max-w-4xl bg-white dark:bg-gray-800 overflow-y-scroll max-h-[99%] border border-gray-100 dark:shadow-none dark:border-gray-700">
            <div className="relative overflow-hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeDialog();
                }}
                type="button"
                className="w-fit fixed sm:top-0 top-1 right-0 p-2 bg-black rounded-e-none rounded-t-none hover:scale-105 transition duration-300 z-[100]"
              >
                <img src={close.src} alt="close" className="w-10" />
              </button>
              <img
                src={image}
                alt="art cover"
                loading="lazy"
                className="w-full h-[300px] md:h-[50vh] object-cover mx-auto shadow-2xl shadow-gray-600/10"
              />
            </div>
            <p class="text-base text-primary font-italic py-2 opacity-75 px-4 md:px-8">
              {epigraph}
            </p>
            <hr class="border-t border-primary opacity-25" />
            <div className="p-4 md:p-8 group">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full group-hover:text-green-600 text-black dark:text-green-300 font-semibold mt-4 transition"
                >
                  <span className="text-sm">{read_more}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-2 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              )}
              <h3 className="text-3xl pb-4 font-bold text-primary dark:text-white">
                {title}
              </h3>
              <h4 class="text-tertiary leading-normal text-base lg:text-xl text-pretty pb-2">
                {subtitle}
              </h4>
              {description1 && (
                <p className="mt-6 text-base text-primary font-serif text-pretty">
                  {description1}
                </p>
              )}
              {description2 && (
                <p className="mt-6 text-base text-primary font-serif text-pretty">
                  {description2}
                </p>
              )}
              {description3 && (
                <p className="mt-6 text-base text-primary font-serif text-pretty">
                  {description3}
                </p>
              )}
              {description4 && (
                <p className="mt-6 text-base text-primary font-serif text-pretty">
                  {description4}
                </p>
              )}
              {description5 && (
                <p className="mt-6 text-base text-primary font-serif text-pretty">
                  {description5}
                </p>
              )}
              {description6 && (
                <p className="mt-6 text-base text-primary font-serif text-pretty">
                  {description6}
                </p>
              )}
              {description7 && (
                <p className="mt-6 text-base text-primary font-serif text-pretty">
                  {description7}
                </p>
              )}
              {description8 && (
                <p className="mt-6 text-base text-primary font-serif text-pretty">
                  {description8}
                </p>
              )}
              {description9 && (
                <p className="mt-6 text-base text-primary font-serif text-pretty">
                  {description9}
                </p>
              )}
            </div>
          </article>
        </section>
      )}
    </div>
  );
}
