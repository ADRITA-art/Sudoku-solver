import solveSudoku from '../solver.mjs';

const isValidGrid = (grid) => {
  return Array.isArray(grid) && grid.length === 9 && grid.every(row => Array.isArray(row) && row.length === 9);
};

const solvePuzzle = (req, res) => {
  const { grid } = req.body;

  if (!isValidGrid(grid)) {
    return res.status(400).json({ error: 'Invalid Sudoku grid format. Please provide a 9x9 grid.' });
  }

  const solvedGrid = JSON.parse(JSON.stringify(grid)); // Deep copy the grid
  if (solveSudoku(solvedGrid)) {
    res.json({ solvedGrid });
  } else {
    res.status(400).json({ error: 'Sudoku puzzle cannot be solved.' });
  }
};
export default solvePuzzle;
