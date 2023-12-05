import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor((time / 60) % 60);
  const hours = Math.floor((time / 3600) % 60);
  const [timerStart, setTimerStart] = useState(false);
  const startTimer = () => {
    setTimerStart(!timerStart);
  };
  const resetTimer = () => {
    setTimerStart(false);
    setTime(0);
  };
  useEffect(() => {
    let interval;
    if (timerStart) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerStart]);
  return (
    <div>
      <h1>
        <span>
          <b>
            {" "}
            {hours < 10 ? "0" + hours : hours} :{" "}
            {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds}
          </b>
        </span>
      </h1>

      <div>
        <Button
          variant="contained"
          style={{ backgroundColor: timerStart && "red" }}
          onClick={startTimer}
        >
          {!timerStart ? "Start" : "stop"}
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          type="button"
          onClick={resetTimer}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default StopWatch;
