import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

//  Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('The blog project server is running');
  });

export default app;