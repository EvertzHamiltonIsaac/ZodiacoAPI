import mongoose from 'mongoose';

// Schema
const zodiacSignsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  element: { type: String, require: true }, //! Esto es una relacion.
  qualities: { type: String, require: true }, //! Esto es una relacion.
  fechas: { type: String, require: false }, //! Debes arreglar como se vera y se llamara este campo.
  compatibilities: { type: String, require: true }, //! Debes arreglar y esto es una relacion
});

const UserModel = mongoose.model('ZodiacSigns', zodiacSignsSchema);
export default UserModel;
