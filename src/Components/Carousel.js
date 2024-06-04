import { useState } from "react";

function Carousel({pictures}){
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
      };
    

      return(
        <div className="carousel">
            <button className="carousel-button left" onClick={prevSlide}>
                &lt;
            </button>
            <img src={pictures[currentIndex]} alt="Logement" className="carousel-image" />
            <button className="carousel-button right" onClick={nextSlide}>
                &gt;
            </button>
            <div className="carousel-count">
                {currentIndex+1}/{pictures.length}
            </div>
        </div>
      );
};

export default Carousel;