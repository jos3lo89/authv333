import { z } from "zod";

export const taskSchemaZ = z.object({
  titulo: z.string({
    required_error: "titulo requerido",
  }),
  descripcion: z.string({
    required_error: "descripción requerida",
  }),
});
