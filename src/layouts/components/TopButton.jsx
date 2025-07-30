import "./TopButton.css";

export function TopButton() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scroll"
      onClick={goTop}
      class="fixed bottom-3 right-4 sm:right-60 m-auto w-10 h-10 bg-white dark:bg-gray-800 shadow-lg hover:scale-105 active:scale-95 transition opacity-0 dark:border-gray-700 border"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="m-auto"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <polyline points="6 15 12 9 18 15"></polyline>
      </svg>
    </button>
  );
}
