import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const { isIntersecting } = entry || {};
        if (isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imageRef.current);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  return (
    <div ref={imageRef}>
      {isVisible ? (
        <Card.Img variant="top" src={src} alt={alt} />
      ) : (
        <Card.Img
          variant="top"
          src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg" // Replace with your placeholder image
          alt={""}
          //   style={{ visibility: "hidden" }}
        />
      )}
    </div>
  );
};

export default LazyImage;
