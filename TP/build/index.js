"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PING_LISTEN_PORT = 4888;
app.get("/ping", (req, res) => {
    res.json(req.headers);
});
app.use(function (req, res, next) {
    var err = new Error("Not Found");
    res.status(404).end(); // using response here
    next(err);
});
app.listen(PING_LISTEN_PORT, () => {
    return console.log(`Express is listening at http://localhost:${PING_LISTEN_PORT}`);
});
