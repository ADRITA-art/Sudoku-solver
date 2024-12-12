import express from 'express';
import  solvePuzzle  from '../controllers/solveController.mjs';

const router = express.Router();


router.post('/solve', solvePuzzle);

export default router;
