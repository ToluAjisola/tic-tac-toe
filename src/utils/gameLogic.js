// utils/gameLogic.js

export const checkWinner = (board) => {
  const winningConditions = [
    // Rows
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    // Columns
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    // Diagonals
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  // Check for winner
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (a && a === b && b === c) {
      return a; // Return the winner ('X' or 'O')
    }
  }

  // Check for tie
  if (board.flat().every((cell) => cell !== null)) {
    return "Tie";
  }

  return null; // No winner yet
};

// utils/gameLogic.js

// Function to calculate CPU move
export const calculateCPUMove = (board) => {
  // Find the first empty cell and return its index
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j]) {
        return [i, j]; // Return the row and column of the empty cell
      }
    }
  }
  return null; // Return null if the board is full
};
