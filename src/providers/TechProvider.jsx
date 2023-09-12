import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserProvider";
export const TechContext = createContext({})
export const TechProvider = ({children}) =>{
    const token = localStorage.getItem("@TOKEN")
    const [modalAdd, setModalAdd] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const {techs, setTechs} = useContext(UserContext)
    const [id, setId] = useState("")
    const [value, setValue] = useState("")
    const handleTech = async (data) =>{
        try{
            const reponse = await api.post("/users/techs", data, {
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            toast.success("Tecnologia adicionada", {autoClose: 3000})
            setModalAdd(false)
            setTechs([...techs, reponse.data])
        }catch(error){
            toast.error("Não foi possivel cadastrar essa tecnologia", {autoClose: 3000})
        }
    }
    const deleteTech = async (id) =>{
        try{
            await api.delete(`/users/techs/${id}`,{
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            const update = techs.filter((tech) => tech.id != id)
            toast.success("Tecnologia deletada", {autoClose: 3000})
            setModalEdit(false)
            setTechs(update)
        }
        catch{
            toast.error("Não foi possivel remover essa tecnologia", {autoClose: 3000})
        }
    }
    const editTech = async (data) =>{
        try{
            await api.put(`/users/techs/${id}`, data,{
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            const allTechs= await api.get(`/profile`,{
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            const update = allTechs.data.techs
            toast.success("Tecnologia Editada", {autoClose: 3000})
            setModalEdit(false)
            setTechs(update)
        }catch{
            toast.error("Não foi possivel editar essa tecnologia", {autoClose: 3000})
        }
    }
    return(
        <TechContext.Provider value={{handleTech, setModalAdd, modalAdd, deleteTech, editTech, modalEdit, setModalEdit, id, setId, setValue, value}}>
            {children}
        </TechContext.Provider>
    )
}