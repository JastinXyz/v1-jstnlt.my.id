import React, { useState, useEffect } from "react";

const BackToTop = ({ showBelow = 100 }) => {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > showBelow) {
      setShowScroll(true);
      document.getElementById('backtotop').classList.remove('hidden')
    } else if (showScroll && window.pageYOffset <= showBelow) {
      setShowScroll(false);
      document.getElementById("backtotop").classList.add("hidden");
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      id="backtotop"
      type="button"
      onClick={scrollTop}
      className="hidden inline-block p-3 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
      style={{
        position: "fixed",
        bottom: 30 + "px",
        right: 30 + "px",
        opacity: 0.4,
        zIndex: 999,
      }}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="w-4 h-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
      </svg>
    </button>
  );
};

export { BackToTop };
