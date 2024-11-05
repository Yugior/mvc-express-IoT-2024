// routes/usuarios.ts
import { Router } from "express";
import validate from "../middlewares/validate";
import { studentSchema } from "../schemas/student";
import {
  createStudent,
  deleteStudent,
  getStudent,
  updateStudent,
} from "../controllers/student";

const router = Router();

// Regresa todos los alumnos en la base de datos

router.get("/", getStudent);
router.post("/", validate(studentSchema), createStudent);
router.delete("/:id", deleteStudent);
router.put("/:id", validate(studentSchema), updateStudent);
export default router;
