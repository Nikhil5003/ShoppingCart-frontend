import React, { useState, useEffect } from "react";
import "./AnalogClock.css";
const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes * 60 + seconds) / 3600) * 360;
  const hourDeg = ((hours * 3600 + minutes * 60 + seconds) / (12 * 3600)) * 360;

  const secondStyle = { transform: `rotate(${secondDeg}deg)` };
  const minuteStyle = { transform: `rotate(${minuteDeg}deg)` };
  const hourStyle = { transform: `rotate(${hourDeg}deg)` };

  return (
    <div className="analog-clock">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNj9AA3DZkkaBFL3ROPq5VrEbenHlNzQbzVIabEx4ElubHWNaR7PZky9H1PQ&s"
        alt=""
      />
      <div className="hand second" style={secondStyle}></div>
      <div className="hand minute" style={minuteStyle}></div>
      <div className="hand hour" style={hourStyle}></div>
    </div>
  );
};

export default AnalogClock;
