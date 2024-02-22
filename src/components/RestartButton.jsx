//import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes'
import "../styles/RestartButton.css";

const RestartButton = ({ onClick }) => (
  <button
    className="restart-button mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
    onClick={onClick}
  >
    Restart
  </button>
);

// Add prop type validation
RestartButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Validate that 'onClick' is a function and is required
};

export default RestartButton;
