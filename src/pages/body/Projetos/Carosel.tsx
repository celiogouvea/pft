import React, { useState, useEffect } from 'react';
import Coding from '../../../assets/Coding.gif';
import Programmer from '../../../assets/Programmer.gif';
import Developer from '../../../assets/Developer activity.gif';
import './Carosel.css';
import Frontend from './Frontend';
import Backend from './Backend';
import QA from './QA';

const Carosel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const images = [
    { src: Coding, title: <Frontend/> },
    { src: Programmer, title: <Backend/> },
    { src: Developer, title: <QA/> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Carousel image ${index + 1}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''} ${index === clickedIndex ? 'clicked' : ''}`}
            onClick={() => handleClick(index)}
            style={{ zIndex: index === clickedIndex ? 2 : 1 }}
          />
        ))}
      </div>
      {clickedIndex !== null ? (
        <p className="clicked-text">{images[clickedIndex].title}</p>
      ) : (
        <p className="clicked-text">Click on any image to see more details</p>)}
    </div>
  );
}

export default Carosel;
