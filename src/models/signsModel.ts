import mongoose, { Schema } from 'mongoose';
import { ISignsModel } from '../utils/customInterfaces';

// Schema
const zodiacSignsSchema: mongoose.Schema<ISignsModel> = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    date: { type: String, require: true }, //? Como se vera la fecha: "21 March - 19 April"
    element: { type: Schema.Types.ObjectId, ref: 'Element' },
    modality: { type: Schema.Types.ObjectId, ref: 'Modalities' },
    compatibilities: [{ type: Schema.Types.ObjectId, ref: 'ZodiacSigns' }],
    ruling_planet: { type: Schema.Types.ObjectId, ref: 'Planets' },
    lucky_number: [{ type: Number, require: true }],
    positive_traits: [{ type: Schema.Types.ObjectId, ref: 'PositiveTraits' }],
    negative_traits: [{ type: Schema.Types.ObjectId, ref: 'NegativeTraits' }],
    stone: { type: Schema.Types.ObjectId, ref: 'Stones' },
    animal: { type: Schema.Types.ObjectId, ref: 'Animals' },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const UserModel: mongoose.Model<ISignsModel> = mongoose.model(
  'ZodiacSigns',
  zodiacSignsSchema
);
export default UserModel;
