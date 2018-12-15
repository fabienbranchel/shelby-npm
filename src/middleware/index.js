"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const redux_1 = require("redux");
exports.default = redux_1.applyMiddleware(redux_thunk_1.default, logger_1.default);
