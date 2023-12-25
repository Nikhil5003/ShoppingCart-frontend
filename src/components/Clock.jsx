import { useState, useEffect } from "react";
export default function Clock() {
  const [time, setTime] = useState(new Date());
  const hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const seconds =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  const totalTime =
    hour >= 12
      ? (hour - 12 <= 10 ? "0" + (hour - 12) : hour - 12) +
        ":" +
        minutes +
        ":" +
        seconds
      : hour + ":" + minutes + ":" + seconds;
  const timeStamp = hour >= 12 ? "PM" : "AM";
  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1>
      {totalTime} {timeStamp}
    </h1>
  );
}
