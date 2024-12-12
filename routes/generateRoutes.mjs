import express from 'express';
import  generateSudoku  from '../controllers/generateController.mjs';

const router = express.Router();


router.get('/generate-sudoku', (req, res) => {
  const puzzle = generateSudoku();
  res.json({ puzzle });
});

export default router;
