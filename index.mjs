import express from 'express';

import bodyParser from 'body-parser';
import  sudokuRoutes  from './routes/sudokuRoutes.mjs';
import generateRoutes from './routes/generateRoutes.mjs';

const app = express();
const PORT =5000;
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/sudoku', sudokuRoutes);
app.use('/api/generate', generateRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
