import * as z from "zod";

export const schema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().min(1, "O e-mail é obrigatório")
    .email("O e-mail deve estar no formato correto"),
    password: z.string().min(8, { message:"A senha deve ter pelo menos 8 caracteres"})
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(/(?=.*?[\W])/, "É necessário pelo menos um caractere especial"),
    confirm: z.string({ required_error: 'Campo obrigatório!' }),
    bio: z.string().min(1,"Faça uma breve descrição sua"),
    contact: z.string().min(1, "Informe seu contato"),
    course_module: z.string().min(1, "Selecione o módulo"),
}).refine(({password, confirm}) => password === confirm,{message: "As senhas precisam ser iguais", path:["confirm"]})