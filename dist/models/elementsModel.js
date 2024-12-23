"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ElementsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: [true, 'The name of the element is required.'],
        unique: true,
    },
    descripcion: {
        type: String,
    },
    img: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});
const ElementModel = mongoose_1.default.model('Element', ElementsSchema);
exports.default = ElementModel;
