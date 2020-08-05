import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { allowedNodeEnvironmentFlags } from 'process';

dotenv.config();

const PORT : number = parseInt(process.env.PORT as string, 10) || 3333;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`API Started at port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Hello world');
})