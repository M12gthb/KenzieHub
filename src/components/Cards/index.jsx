import { useContext } from "react"
import { UserContext } from "../../providers/UserProvider"
import { CardTech } from "./style"
import { TechContext } from "../../providers/TechProvider"
import { NoTech } from "./style"
export const Techs = () =>{
    const {techs } = useContext(UserContext)
    const {setModalEdit, setId, setValue} = useContext(TechContext)
    const handleEdit = (id, value) =>{
        setId(id)
        setValue(value)
        setModalEdit(true)
    }
    if(techs.length > 0){
        return(
            techs.map((tech) =>{
                return(
                    <CardTech onClick={() =>handleEdit(tech.id, tech.title) } key={tech.id}>
                        <h3>{tech.title}</h3>
                        <p>{tech.status}</p>
                    </CardTech>
                )
            })
         )
    }
    else{
        return(
                <NoTech>Nenhuma tecnologia cadastrada ainda.</NoTech>
        )
    }
}