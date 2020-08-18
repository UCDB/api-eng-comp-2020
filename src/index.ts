import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { log } from 'console';
import router from './router';
import database from './database';

dotenv.config();

const PORT : number = parseInt(process.env.PORT as string, 10) || 3333;
const MONGO_URI : string = process.env.MONGO_URI || '';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(router);

database.connect(MONGO_URI);

app.listen(PORT, () => {
  log(`API Listening on port ${PORT}`);
});
