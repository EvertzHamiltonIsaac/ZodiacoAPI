import mongoose from 'mongoose';
import { IModality } from '../utils/customInterfaces';

const ModalitiesSchema: mongoose.Schema<IModality> = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'The name of the element is required.'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
    },
    characteristics: [{ type: String }],
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

const ModalityModel = mongoose.model('Modalities', ModalitiesSchema);

export default ModalityModel;
