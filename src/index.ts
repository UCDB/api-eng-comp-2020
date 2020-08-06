import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import * as dotenv from 'dotenv';
import router from './router';

dotenv.config();

const PORT : number = parseInt(process.env.PORT as string, 10) || 3333;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API Listening on port ${PORT}`);
});
