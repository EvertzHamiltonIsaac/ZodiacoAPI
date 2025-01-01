import mongoose from 'mongoose';
import { IPositiveTraits } from '../utils/customInterfaces';

const PositiveTraitsSchema: mongoose.Schema<IPositiveTraits> =
  new mongoose.Schema({
    name: {
      type: String,
      require: [true, 'The name of the element is required.'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
  });

const PositiveTraitsModel = mongoose.model(
  'PositiveTraits',
  PositiveTraitsSchema
);

export default PositiveTraitsModel;
