// App.js

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Board from "./components/Board";
import Status from "./components/Status";
import RestartButton from "./components/RestartButton";
import ChallengeButton from "./components/ChallengeButton";
import { checkWinner, calculateCPUMove } from "./utils/gameLogic";

const BOARD_SIZE = 3;

const App = () => {
  const [board, setBoard] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null))
  );
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameMode, setGameMode] = useState("normal");

  useEffect(() => {
    if (gameMode === "cpu" && !isXNext && winner === null) {
      // Only make CPU move if game mode is 'cpu'
      // CPU move
      const [row, col] = calculateCPUMove(board);
      if (row !== null && col !== null) {
        const newBoard = [...board];
        newBoard[row][col] = "O";
        setBoard(newBoard);
        setIsXNext(true);
        setWinner(checkWinner(newBoard));
      }
    }
  }, [board, isXNext, winner, gameMode]);

  const handleClick = (row, col) => {
    if (winner || board[row][col] || (gameMode === "cpu" && !isXNext)) return; // Disable player moves if game mode is 'cpu' and it's not player's turn

    const newBoard = [...board];
    newBoard[row][col] = isXNext ? "X" : "O";
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
    setGameMode("normal"); // Reset game mode to 'normal'
  };

  const handleChallengeCPU = () => {
    setBoard(
      Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null))
    );
    setIsXNext(true); // Player starts first in CPU mode
    setWinner(null);
    setGameMode("cpu"); // Set game mode to 'cpu'
  };

  return (
    <div className="App">
      <h1 className="text-3xl md:text-4xl mb-8">{`Tic Tac Toe - ${
        gameMode === "normal" ? "Normal Mode" : "CPU Mode"
      }`}</h1>
      <Status winner={winner} isXNext={isXNext} />
      <Board board={board} handleClick={handleClick} />
      <div className="button-container">
        <RestartButton onClick={handleRestart} />
        {gameMode === "normal" && (
          <ChallengeButton onClick={handleChallengeCPU} />
        )}{" "}
        {/* Render the ChallengeButton only in normal mode */}
      </div>
    </div>
  );
};

export default App;