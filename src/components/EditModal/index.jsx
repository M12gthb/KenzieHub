import { useContext } from "react"
import { StyledBackDrop } from "../Backdrop/style"
import { Button2 } from "../Button2"
import Input from "../Input"
import { Select } from "../Select"
import { StyledModal } from "./style"
import { schemaEdit } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TechContext } from "../../providers/TechProvider"
export const EditModal = () =>{
    const {value, setModalEdit, editTech, deleteTech, id} = useContext(TechContext)
    const {
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm({ resolver: zodResolver(schemaEdit)})
    return(
    <StyledBackDrop>
        <StyledModal>
            <section>
                <h3>Tecnologia Detalhes</h3>
                <button onClick={() =>setModalEdit(false)}>X</button>
            </section>
            <form onSubmit={handleSubmit(editTech)}>

                <Input label="Nome do projeto" disabled value={value}></Input>
                <Select label="Selecionar Status" id="status" className="select" {...register( "status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </Select>

                <Button2 type="submit">Salvar alterações</Button2>
                
            </form>
                <button className="deleteButton" onClick={() => deleteTech(id)}>Excluir</button>
        </StyledModal>
    </StyledBackDrop>
    )
}