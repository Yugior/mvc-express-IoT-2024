/[5:20 p. m., 10/10/2024] +52 1 461 619 9666: // routes/usuarios.ts
import { Router } from "express";
import { getStudents } from "../controllers/user";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/students", getStudents);

export default router;
[5:31 p. m., 10/10/2024] +52 1 461 619 9666: import { Request, Response } from "express";

import { findAll } from "../services/user";

// Obtener todos los alumnos
export const getStudents = async (req: Request, res: Response) => {
  try {
    const usuarios = await findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener alumnos", error });
  }
};