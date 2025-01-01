import mongoose from 'mongoose';
import { IElement } from '../utils/customInterfaces';

const ElementsSchema: mongoose.Schema<IElement> = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'The name of the element is required.'],
    unique: true,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
});

const ElementModel = mongoose.model('Elements', ElementsSchema);

export default ElementModel;
