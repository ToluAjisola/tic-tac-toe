//import React from "react";
import "../styles/Status.css";
import PropTypes from 'prop-types'; // Import PropTypes

const Status = ({ winner, isXNext }) => {
  if (winner) {
    return (
      <div className="status text-xl md:text-2xl">
        {winner === "Tie" ? "It's a Tie!" : `${winner} wins!`}
      </div>
    );
  }
  return (
    <div className="status text-xl md:text-2xl">
      Next player: {isXNext ? "X" : "O"}
    </div>
  );
};

// Add prop type validation
Status.propTypes = {
  winner: PropTypes.string, // Validate that 'winner' is a string (could be null) - not required as it can be null initially
  isXNext: PropTypes.bool.isRequired, // Validate that 'isXNext' is a boolean and is required
};

export default Status;