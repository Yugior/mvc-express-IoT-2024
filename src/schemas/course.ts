import { z } from "zod";

export const courseSchema = z.object({
  course_name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  credits: z.string().regex(/^\d$/, {
    message: "La sección credits debe ser 'Número' (por ejemplo, '5')",
  }),
  description: z
    .string()
    .min(10, { message: "El nombre debe tener al menos 10 caracteres" }),
  teacher_id: z.string().regex(/^\d$/, {
    message: "El teacher_id debe ser 'Número' (por ejemplo, '6')",
  }),
});
