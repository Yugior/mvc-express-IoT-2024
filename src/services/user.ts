import { findAllUsers } from "../models/user";

// Obtener todos los alumnos
export const findAll = async () => {
  return await findAllUsers();
};
