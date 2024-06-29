import React, { useState } from "react";
import '../styles/Main.css';
import PUBLICIDAD1 from '../../PUBLICIDAD1.png';
import PUBLICIDAD2 from '../../PUBLICIDAD2.png';
import PUBLICIDAD3 from '../../PUBLICIDAD3.png'; // Añade otra imagen para el carrusel

const images = [
  PUBLICIDAD1,
  PUBLICIDAD2,
  PUBLICIDAD3
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full image-container" />
      </div>
      <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-lg">‹</button>
      <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-lg">›</button>
    </div>
  );
}

function Landing() {
  return (
    <div className="main">
      <div className='container_main'>
        <div className="Mapa_inicio">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4010134437785!2d-71.61831531506526!3d-35.43493389712703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c722dfe00fb1%3A0xe2cef340c74abf9f!2sFacultad%20de%20Ciencias%20de%20la%20Ingenier%C3%ADa!5e0!3m2!1ses-419!2scl!4v1717219423528!5m2!1ses-419!2scl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='Publicidad'>
          
        </div>
        <div className='Carousel'>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Landing;
