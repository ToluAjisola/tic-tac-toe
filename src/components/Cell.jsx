//import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import "../styles/Cell.css"; 

const Cell = ({ value, onClick }) => (
  <div
    className="cell w-1/3 h-16 flex justify-center items-center border border-gray-400 text-2xl md:text-4xl"
    onClick={onClick}
  >
    {value}
  </div>
);

// Add prop type validation
Cell.propTypes = {
  value: PropTypes.string, // Validate that 'value' is a string (could be null or 'X' or 'O')
  onClick: PropTypes.func.isRequired, // Validate that 'onClick' is a function and is required
};

export default Cell;
