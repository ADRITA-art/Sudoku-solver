import solveSudoku from '../solver.mjs';
export function isSafe(board, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num ||
      board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
      return false;
    }
  }
  return true;
}


const generatePuzzle = (req, res) => {
  const board = Array.from({ length: 9 }, () => Array(9).fill(0));

  for (let i = 0; i < 11; i++) { 
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    const num = Math.floor(Math.random() * 9) + 1;
    if (isSafe(board, row, col, num)) {
      board[row][col] = num;
    }
  }

  solveSudoku(board);

  for (let i = 0; i < 40; i++) { 
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    board[row][col] = 0;
  }

  return board;
}
export default generatePuzzle;
