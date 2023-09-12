import * as z from "zod";

export const schemaEdit = z.object({
    status: z.string().nonempty()
})