// routes/usuarios.ts
import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getStudent,
  getStudents,
  updateStudent,
} from "../controllers/student";

const router = Router();

// Regresa todos los alumnos en la base de datos

router.get("/", getStudent);
router.post("/", createStudent);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);
export default router;
