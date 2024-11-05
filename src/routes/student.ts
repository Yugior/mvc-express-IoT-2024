// routes/usuarios.ts
import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getStudent,
  updateStudent,
} from "../controllers/student";
import validate from "../middlewares/validate";
import { studentSchema } from "../schemas/student";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getStudent);

// Crea un alumno nuevo en la BD
router.post("/", validate(studentSchema), createStudent);

// Actualiza los datos de un alumno en la BD
router.put("/:id", validate(studentSchema), updateStudent);

// Borra los datos de un alumno en la BD
router.delete("/:id", deleteStudent);

export default router;
