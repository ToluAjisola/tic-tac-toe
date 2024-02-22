// components/ChallengeButton.js
//import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes'

const ChallengeButton = ({ onClick }) => {
  return (
    <button className="challenge-button" onClick={onClick}>
      Challenge CPU
    </button>
  );
};

// Add prop type validation
ChallengeButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Validate that 'onClick' is a function and is required
};

export default ChallengeButton;
