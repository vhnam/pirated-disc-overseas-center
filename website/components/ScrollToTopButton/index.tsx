import { ArrowUp } from "../Icons";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window && window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="fixed bottom-8 right-8 p-4 bg-black text-white border border-solid border-white rounded-lg hover:bg-gray-900 active:bg-gray-700"
      type="button"
      onClick={scrollToTop}
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
