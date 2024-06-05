import { useState } from "react";
import fleche from '../Images/carousel_button.svg';
import petiteFleche from '../Images/carousel_button_petit.svg';

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
          {pictures.length > 1 && (
              <button className="carousel-button left" onClick={prevSlide}>
                  <picture>
                    <source media="(max-width: 375px)" srcSet={petiteFleche} />
                    <img src={fleche} alt="Flèche du Carrousel"  />
                </picture>
              </button>
          )}
          <img src={pictures[currentIndex]} alt="Logement" className="carousel-image" />
          {pictures.length > 1 && (
              <button className="carousel-button right" onClick={nextSlide}>
                  <picture>
                    <source media="(max-width: 375px)" srcSet={petiteFleche} />
                    <img src={fleche} alt="Flèche du Carrousel"  />
                </picture>
              </button>
          )}
          {pictures.length > 1 && (
              <div className="carousel-count">
                  {currentIndex + 1}/{pictures.length}
              </div>
          )}
      </div>
      );
};

export default Carousel;