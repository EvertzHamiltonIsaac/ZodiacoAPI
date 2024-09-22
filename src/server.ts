//? Imports
import { Request, Response } from 'express';
import application from './app';
import DBconnection from './database/dbConnection';

const connection = new DBconnection();

connection
  .connect()
  .then(() => {
    console.log('Database Connected Succesfully!!!');
  })
  .catch((err) => {
    console.log(err);
  });

//? Configuracion de Variables
const port = process.env.PORT || 8000;

application.get('/', (_req: Request, res: Response): Response => {
  return res.status(200).send({ status: 'success', message: 'KLK PAPA' });
});

application.listen(port, () => {
  console.log(`App its running on port [${port}]`);
});
