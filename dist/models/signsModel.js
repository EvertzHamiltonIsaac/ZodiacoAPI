"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Schema
const zodiacSignsSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    date: { type: String, require: true }, //? Como se vera la fecha: "21 March - 19 April"
    element: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Element' },
    modality: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Modalities' },
    compatibilities: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'ZodiacSigns' }],
    ruling_planet: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Planets' },
    lucky_number: [{ type: Number, require: true }],
    positive_traits: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'PositiveTraits' }],
    negative_traits: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'NegativeTraits' }],
    stone: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Stones' },
    animal: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Animals' },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});
const UserModel = mongoose_1.default.model('ZodiacSigns', zodiacSignsSchema);
exports.default = UserModel;
