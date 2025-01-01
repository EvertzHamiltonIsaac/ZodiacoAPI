import mongoose from 'mongoose';
import { IElement } from '../utils/customInterfaces';

const ElementsSchema: mongoose.Schema<IElement> = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'The name of the element is required.'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'The description of the element is required.'],
    },
    img: {
      type: String,
    },
    colors: [{ type: String }],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const ElementModel = mongoose.model('Elements', ElementsSchema);

export default ElementModel;
