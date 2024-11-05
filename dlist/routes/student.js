"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/usuarios.ts
const express_1 = require("express");
const validate_1 = __importDefault(require("../middlewares/validate"));
const student_1 = require("../schemas/student");
const student_2 = require("../controllers/student");
const router = (0, express_1.Router)();
// Regresa todos los alumnos en la base de datos
router.get("/", student_2.getStudent);
router.post("/", (0, validate_1.default)(student_1.studentSchema), student_2.createStudent);
router.delete("/:id", student_2.deleteStudent);
router.put("/:id", (0, validate_1.default)(student_1.studentSchema), student_2.updateStudent);
exports.default = router;
