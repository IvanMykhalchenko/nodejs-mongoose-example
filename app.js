import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { StatusCodes } from 'http-status-codes';

import contactsRouter from './routers/api/contacts/index.js';

const app = express();

app.use(logger('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND)
    .json({status: StatusCodes.NOT_FOUND, type: 'error', message: 'Not found'})
})

app.use((err, req, res, next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({status: StatusCodes.INTERNAL_SERVER_ERROR, type: 'faild',  message: err.message});
})

export default app;