import { z } from "zod";

export const professorSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  last_name: z
    .string()
    .min(2, { message: "El apellido debe tener al menos 2 caracteres" }),

  department: z
    .string()
    .min(2, { message: "El departamento debe tener al menos 2 caracteres" })
    .refine((val) => /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/.test(val), {
      message:
        "Cada palabra del departamento debe comenzar con una letra mayúscula",
    }),

  email: z.string().email({ message: "Debe ser un email válido" }),
  address: z
    .string()
    .regex(/^[A-Za-z\s]+ \d+, [A-Za-z\s]+$/, {
      message: "El formato de la dirección debe ser 'Road Number, City'",
    })
    .refine(
      (direccion) => {
        // Opcional: Validar que el número sea válido
        const numero = direccion.split(" ")[1].replace(",", "");
        return !isNaN(Number(numero));
      },
      { message: "El número de la dirección debe ser válido" },
    )
    .optional(),
  phone: z
    .string()
    .regex(/^\d{3}-\d{4}$/, {
      message: "El formato del teléfono debe ser '555-1234'",
    })
    .optional(),
});
