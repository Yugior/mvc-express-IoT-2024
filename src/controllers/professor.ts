import { Request, Response } from "express";
import { Professor } from "../interface/Professor";
import { deleteById, findAll, insert, update } from "../services/Professor";
import { insertProfessor } from "../models/professor";

// Obtener todos los alumnos
export const getProfessor = async (req: Request, res: Response) => {
  try {
    // Obtener parámetros de paginación con valores por defecto
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    // Calcular offset
    const offset = (page - 1) * limit;
    const professors = await findAll(limit, offset);

    res.status(200).json(professors);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener profesores", error });
  }
};
export const createProfessor = async (req: Request, res: Response) => {
  try {
    const professor: Professor = req.body;
    await insertProfessor(professor);
    const newProfessor = await insert(professor);
    // Emit event via WebSocket
    const io = req.app.get("io");
    io.emit("newProfessorData", newProfessor);
    res.status(201).json({ message: "Profesor creado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al crear profesor", error });
  }
};
export const updateProfessor = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const professor: Professor = req.body;
    await update(id, professor);
    res.status(201).json({ message: "Profesor actualizado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el profesor", error });
  }
};
export const deleteProfessor = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await deleteById(id);
    res.status(201).json({ message: "Profesor eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el profesor", error });
  }
};
