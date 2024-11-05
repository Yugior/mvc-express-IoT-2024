"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_flow_1 = __importDefault(require("dotenv-flow"));
const express_1 = __importDefault(require("express"));
const unknown_resources_1 = __importDefault(require("./middlewares/unknown-resources"));
const student_1 = __importDefault(require("./routes/student"));
//Para poder acceder a las variables del ambiente (.env)
if (process.env.NODE_ENV !== "production") {
    dotenv_flow_1.default.config();
}
const app = (0, express_1.default)();
// Middleware para parsear JSON
app.use(express_1.default.json());
app.use("/api/v1/student", student_1.default);
app.use(unknown_resources_1.default);
app.listen(3001, function () {
    console.log("Escuchando puerto " + 3001);
});
