import { z } from "zod";

export const userSchemaRegisterZ = z.object({
  usuario: z.string({
    required_error: "usuario requerido",
  }),
  correo: z
    .string({
      required_error: "correo requerido",
    })
    .email({
      message: "correo invalido",
    }),
  clave: z
    .string({
      required_error: "clave requerida",
    })
    .min(6, {
      message: "clave minimo de 6 caracteres",
    }),
});

export const userSchemaLoginZ = z.object({
  correo: z
    .string({
      required_error: "correo requerido",
    })
    .email({
      message: "correo invalido",
    }),
  clave: z
    .string({
      required_error: "clave requerida",
    })
    .min(6, {
      message: "clave minimo de 6 caracteres",
    }),
});
