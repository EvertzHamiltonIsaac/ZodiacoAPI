"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const dotenv = require('dotenv').config();
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const elementsRoutes_1 = __importDefault(require("./routes/elementsRoutes"));
dotenv_1.default.config({ path: './.env' });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/elements', elementsRoutes_1.default);
exports.default = app;
