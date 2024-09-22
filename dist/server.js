"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dbConnection_1 = __importDefault(require("./database/dbConnection"));
const connection = new dbConnection_1.default();
connection
    .connect()
    .then(() => {
    console.log('Database Connected Succesfully!!!');
})
    .catch((err) => {
    console.log(err);
});
//? Configuracion de Variables
const port = process.env.PORT || 8000;
app_1.default.get('/', (_req, res) => {
    return res.status(200).send({ status: 'success', message: 'KLK PAPA' });
});
app_1.default.listen(port, () => {
    console.log(`App its running on port [${port}]`);
});
