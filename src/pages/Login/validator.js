import * as z from "zod";

export const schemaLogin = z.object({
    email: z.string().nonempty("O e-mail é obrigatório")
    .email("Digite seu email corretamente"),
    password: z.string().nonempty("Digite sua senha corretamente")
});