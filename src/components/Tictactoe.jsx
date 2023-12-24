import React, { useEffect, useState } from "react";

const Tictactoe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  function calculateWinner(sq) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
        return sq[a];
      }
    }
    return null;
  }
  const handleClick = (i) => {
    const newSqares = squares.slice();
    newSqares[i] = isNext ? "X" : "0";
    setIsNext(!isNext);
    setSquares(newSqares);
  };
  const winner = calculateWinner(squares);
  useEffect(() => {
    if (winner) {
      alert(`winner is ${winner}`);
      setSquares(Array(9).fill(null));
    }
  }, [winner]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 20,
        backgroundColor: "purple",
      }}
    >
      {[...squares].map((ele, index) => {
        return (
          <button
            style={{
              border: "2px solid yellow",
              width: 100,
              height: 100,
              boxSizing: "border-box",
              padding: 10,
              borderRadius: "50%",
            }}
            onClick={() => handleClick(index)}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default Tictactoe;
