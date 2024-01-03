import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  const startTimer = () => {
    setTimerStart(!timerStart);
  };
  const resetTimer = () => {
    setTimerStart(false);
    setProgress(0);
  };
  useEffect(() => {
    let timer;
    if (timerStart) {
      timer = setInterval(() => {
        setProgress((p) => {
          return p < 100 ? p + 1 : 0;
        });
      }, 200);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timerStart]);
  return (
    <>
      <h1>this is progress bar</h1>
      <div className="progress_bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
        <div className="text">
          {progress < 10 ? "0" + progress + "%" : progress + "%"}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: timerStart ? "red" : "green" }}
          onClick={startTimer}
        >
          {!timerStart ? "Start" : "stop"}
        </Button>
        <Button
          style={{ marginLeft: 20, backgroundColor: "red" }}
          variant="contained"
          type="button"
          onClick={resetTimer}
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default ProgressBar;
