import express from 'express';
import weedController from '../lib/controllers/weeds.js';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

const app = express();

app.use(express.json());

app.use(weedController)


app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
