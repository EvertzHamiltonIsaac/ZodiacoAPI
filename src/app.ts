// const dotenv = require('dotenv').config();
import express from 'express';
import dotenv from 'dotenv';
import ElementsRouter from './routes/elementsRoutes';
dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use('/api/v1/elements', ElementsRouter);

export default app;
