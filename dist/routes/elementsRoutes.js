"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ElementsRouter = express_1.default.Router();
const elementsControlles_1 = require("../controllers/elementsControlles");
ElementsRouter.route('/').post(elementsControlles_1.CreateElement);
// router
//   .route('/:id')
//   .get(getUserById)
//   .patch(updateUserById)
//   .delete(deleteUserById);
exports.default = ElementsRouter;
