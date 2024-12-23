"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Schema
const zodiacSignsSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    date: { type: String, require: false }, //! Debes arreglar como se vera y se llamara este campo.
    element: { type: String, require: true }, //! Esto es una relacion.
    modality: { type: String, require: true }, //! Esto es una relacion.
    compatibilities: {}, //! Debes arreglar y esto es una relacion.
    ruling_planet: {},
    lucky_number: {},
    positive_traits: {},
    negative_traits: {},
    stone: {},
    animal: {},
    createdAt: {},
    updatedAt: {},
});
const UserModel = mongoose_1.default.model('ZodiacSigns', zodiacSignsSchema);
exports.default = UserModel;
