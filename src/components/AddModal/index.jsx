import Input from "../Input"
import { Select } from "../Select"
import { Button1 } from "../Button1"
import { schemaAdd } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { StyledBackDrop } from "../Backdrop/style"
import { StyledModal } from "./style"
export const AddModal = ({setModalAdd, handleTech}) =>{
    const {
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm({ resolver: zodResolver(schemaAdd)})
    return(
    <StyledBackDrop>
        <StyledModal>
            <section>
                <h3>Cadastrar Tecnologia</h3>
                <button onClick={() =>{setModalAdd(false)}}>X</button>
            </section>
            <form onSubmit={handleSubmit(handleTech)}>
                <Input
                type="text"
                id="title"
                label="Nome"
                placeholder="Digite sua tecnologia aqui"
                error={errors.title?.message}
                {...register("title")}
                />

                <Select label="Selecionar Status" id="status" className="select" {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </Select>

                <Button1 type="submit">Cadastrar Tecnologia</Button1>
            </form>
        </StyledModal>
    </StyledBackDrop>

    )
}