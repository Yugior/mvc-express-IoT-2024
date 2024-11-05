"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_flow_1 = __importDefault(require("dotenv-flow"));
if (process.env.NODE_ENV !== "production") {
    dotenv_flow_1.default.config();
}
const configOptions = {
    host: "127.0.0.1",
    user: "root",
    password: "Horasfeb@2015",
    database: "school",
    port: Number(process.env.MYSQL_PORT) || 3306,
};
const pool = promise_1.default.createPool(configOptions);
exports.default = pool;
