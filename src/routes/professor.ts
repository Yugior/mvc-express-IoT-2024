// routes/usuarios.ts
import { Router } from "express";
import {
  createProfessor,
  deleteProfessor,
  getProfessor,
  updateProfessor,
} from "../controllers/Professor";
import validate from "../middlewares/validate";
import { professorSchema } from "../schemas/Professor";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getProfessor);

// Crea un alumno nuevo en la BD
router.post("/", validate(professorSchema), createProfessor);

// Actualiza los datos de un alumno en la BD
router.put("/:id", validate(professorSchema), updateProfessor);

// Borra los datos de un alumno en la BD
router.delete("/:id", deleteProfessor);

export default router;
