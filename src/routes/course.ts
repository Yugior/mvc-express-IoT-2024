// routes/usuarios.ts
import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getCourse,
  updateCourse,
} from "../controllers/Course";
import validate from "../middlewares/validate";
import { courseSchema } from "../schemas/Course";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getCourse);

// Crea un alumno nuevo en la BD
router.post("/", validate(courseSchema), createCourse);

// Actualiza los datos de un alumno en la BD
router.put("/:id", validate(courseSchema), updateCourse);

// Borra los datos de un alumno en la BD
router.delete("/:id", deleteCourse);

export default router;
