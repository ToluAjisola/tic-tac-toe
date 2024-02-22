// App.js

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./styles/App.css";
import Board from "./components/Board";
import Status from "./components/Status";
import RestartButton from "./components/RestartButton";
import { checkWinner } from "./utils/gameLogic";

const BOARD_SIZE = 3;

const App = () => {
  const [board, setBoard] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null))
  );
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (row, col) => {
    if (winner || board[row][col]) return;

    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? (isXNext ? "X" : "O") : cell
      )
    );
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setWinner(checkWinner(newBoard));
  };

  const handleRestart = () => {
    setBoard(
      Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null))
    );
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="App">
      <h1 className="text-3xl md:text-4xl mb-8">Tic Tac Toe</h1>
      <Status winner={winner} isXNext={isXNext} />
      <Board board={board} handleClick={handleClick} />
      <RestartButton onClick={handleRestart} />
    </div>
  );
};

export default App;
