//! Refactorizar el Codigo para que sea mas mejor......
import ElementModel from '../models/elementsModel';
import { Response, Request } from 'express';

export const CreateElement = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log(body);
    const newElement = await ElementModel.create(body);
    await newElement.save();

    res.status(200).json({
      status: 'succesfull!!!',
      newElement: newElement,
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'try again with anothers values',
    });
  }
};
