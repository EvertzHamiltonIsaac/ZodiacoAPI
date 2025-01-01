import mongoose from 'mongoose';
import { IRulingPlanet } from '../utils/customInterfaces';

const RulingPlanetsSchema: mongoose.Schema<IRulingPlanet> = new mongoose.Schema(
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
    img: {
      type: String,
    },
    day_of_week: { type: String },
    orbit_period: { type: String },
    mythology: { type: String },
  },
  { timestamps: true }
);

const RulingPlanetModel = mongoose.model('Planets', RulingPlanetsSchema);

export default RulingPlanetModel;
