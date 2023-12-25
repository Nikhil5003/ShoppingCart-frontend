import React, { useState, useEffect } from "react";
import "./styles.css";

const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState("red");

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (currentColor) {
        case "red":
          setCurrentColor("green");
          break;
        case "yellow":
          setCurrentColor("red");
          break;
        case "green":
          setCurrentColor("yellow");
          break;
        default:
          break;
      }
    }, getColorDuration(currentColor));

    return () => clearInterval(intervalId);
  }, [currentColor]);

  const getColorDuration = (color) => {
    switch (color) {
      case "red":
        return 4000;
      case "yellow":
        return 500;
      case "green":
        return 3000;
      default:
        return 0;
    }
  };

  return (
    <div className="traffic-light">
      <div className={`light red ${currentColor === "red" ? "active" : ""}`} />
      <div
        className={`light yellow ${currentColor === "yellow" ? "active" : ""}`}
      />
      <div
        className={`light green ${currentColor === "green" ? "active" : ""}`}
      />
    </div>
  );
};

export default TrafficLight;
