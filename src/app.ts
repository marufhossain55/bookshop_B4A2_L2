import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import BookRouter from './module/product/product.router';
app.use(cors());
app.use(express.json());
app.use('/api/products', BookRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({ status: true, message: 'server is live ⚡' });
});

export default app;
