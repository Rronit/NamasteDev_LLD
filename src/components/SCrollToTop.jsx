import { useEffect,  useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll(e) {
    console.log(document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight)
    if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      setIsVisible(true)
    }

  }

  useEffect(() => {
    // Add scroll event listener to toggle visibility
    // let container = topRef.current;
    // if (container) {

      window.addEventListener('scroll', handleScroll)
    // }
    return () => {
      // if (container) {
        window.removeEventListener('scroll', handleScroll)
      // }
    }
  }, []);

  function scrollToTop() {
    // Implement smooth scroll to top
    // document.documentElement.scrollTop = 0;
    window.scrollTo({top:0,behavior:"smooth"})
  }
  return (
    <div className="backToTop">
      <h1 >Back To Top</h1>

      {/* Add some content to enable scrolling */}
      <div style={{ height: 1000, border: "1px solid black" }}></div>

      <div className="container">
        {/* Show this button only after scrolling down */}
        {isVisible  && <button
          className="backtotop-btn"
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
        >
          Back to Top
        </button>}
      </div>
    </div>
  );
}
export default BackToTop;
