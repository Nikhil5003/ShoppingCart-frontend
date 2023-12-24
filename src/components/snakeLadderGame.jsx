import React, { useState } from "react";
// import "./App.css";

const SnakeLadderGame = () => {
  const [position, setPosition] = useState(1);
  let flag = true;
  let array = [...new Array(10)].map((_, index1) => {
    return [...new Array(10)].map((_, index2) => {
      return index1 * 10 + index2 + 1;
    });
  });
  array = array.flat();
  console.log(array);
  const rollDice = () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    const newPosition = position + diceValue;

    // Define snakes and ladders
    const snakesAndLadders = {
      16: 6,
      47: 26,
      49: 11,
      56: 53,
      62: 19,
      64: 60,
      87: 24,
      93: 73,
      95: 75,
      98: 78,
    };

    // Check for snakes and ladders
    if (snakesAndLadders[newPosition]) {
      setPosition(snakesAndLadders[newPosition]);
    } else {
      setPosition(newPosition <= 100 ? newPosition : position);
    }
  };

  return (
    <div className="game-container">
      <h1>Snake and Ladder Game</h1>
      <div
        className=""
        // style={{
        //   display: "grid",
        //   gap: 20,
        //   gridTemplateR: "repeat(10,1fr)",
        // }}
      >
        {array.reverse().map((node, index) => (
          <div style={{ display: "flex" }}>
            <div
              style={{ display: "flex" }}
              key={index + 1}
              className={`cell ${position === node ? "active" : ""}`}
            >
              {node}
            </div>
          </div>
        ))}
      </div>
      <button onClick={rollDice}>Roll Dice</button>
      <p>Current Position: {position}</p>
    </div>
  );
};

export default SnakeLadderGame;
