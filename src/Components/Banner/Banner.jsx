import "./Banner.css";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://appsocity.vercel.app/assets/banner%201%20(1)-BGWf1G4p.png",
    "https://appsocity.vercel.app/assets/banner%20desktop%203-gvCSo0wL.png",
  ];

  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const minSwipeDistance = 50;

  // Mobile Touch
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      setCurrent((prev) => (prev + 1) % images.length);
    }

    if (distance < -minSwipeDistance) {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  // Desktop Drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      setCurrent((prev) => (prev + 1) % images.length);
    }

    if (distance < -minSwipeDistance) {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }

    setIsDragging(false);
  };

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`slide-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;