//import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import Cell from "./Cell";
import "../styles/Board.css";

const Board = ({ board, handleClick }) => (
  <div className="board w-full max-w-xs mx-auto">
    {board.map((row, rowIndex) => (
      <div key={rowIndex} className="row flex">
        {row.map((_, colIndex) => (
          <Cell
            key={colIndex}
            value={board[rowIndex][colIndex]}
            onClick={() => handleClick(rowIndex, colIndex)}
          />
        ))}
      </div>
    ))}
  </div>
);

// Add prop type validation
Board.propTypes = {
  board: PropTypes.array.isRequired, // Validate that 'board' is an array and is required
  handleClick: PropTypes.func.isRequired, // Validate that 'handleClick' is a function and is required
};

export default Board;