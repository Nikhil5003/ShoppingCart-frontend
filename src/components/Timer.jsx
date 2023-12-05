import { useEffect, useState } from "react";

import React from "react";

const Timer = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const inputStyle = {
    border: "none",
    outline: "none",
  };
  const [timerRunning, setTimerRunning] = useState(false);
  const { hours, minutes, seconds } = time || {};
  const setTimer = (e) => {
    const { name, value } = e.target;
    setTime((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const startTimer = () => {
    setTimerRunning(!timerRunning);
  };
  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          let { hours, minutes, seconds } = prev;
          if (hours == 0 && (minutes == 0) & (seconds == 0)) {
            clearInterval(interval);
            setTimerRunning(false);
          } else {
            if (seconds > 0) {
              seconds--;
            } else if (seconds == 0 && minutes != 0) {
              minutes--;
              seconds = 59;
            } else if (hours > 0) {
              hours--;
              seconds = 59;
              minutes = 59;
            }
          }
          return {
            hours: hours,
            minutes,
            seconds,
          };
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Countdown timer</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <input
          style={inputStyle}
          type="number"
          name="hours"
          id=""
          value={hours}
          onChange={setTimer}
        />
        <input
          style={inputStyle}
          type="number"
          name="minutes"
          value={minutes}
          id=""
          onChange={setTimer}
        />
        <input
          style={inputStyle}
          type="number"
          name="seconds"
          value={seconds}
          id=""
          onChange={setTimer}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{hours < 10 ? "0" + hours : hours + ":"}</h1>
        <h1>{minutes < 10 ? "0" + minutes : minutes + " :"}</h1>
        <h1>{seconds < 10 ? "0" + seconds : seconds}</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            display: "flex",
            padding: 20,
            width: 200,
            border: "none",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            backgroundColor: timerRunning ? "red" : "green",
            cursor: "pointer",
          }}
          type="button"
          onClick={startTimer}
        >
          {!timerRunning ? "Start" : "Stop"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
