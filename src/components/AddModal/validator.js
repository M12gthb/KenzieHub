import * as z from "zod";

export const schemaAdd = z.object({
    title: z.string().nonempty("Não é possivel cadastrar uma tecnologia já existente"),
    status: z.string().nonempty()
})