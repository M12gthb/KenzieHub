import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({})

export const UserProvider = ({children}) =>{
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [techs, setTechs] = useState([])
    const token = localStorage.getItem("@TOKEN")
    
    useEffect(() => {
      async function getUser() {
        try {
          if(!token){
            return navigate("/")
          }
          const response = await api.get("/profile",{
            headers:{
              authorization: `Bearer ${token}`
            }
          })
          setUser(response.data)
          setTechs(response.data.techs)
          navigate("/dashboard")
        } catch (error) {
          localStorage.removeItem("@TOKEN")
          navigate("/")
        } finally {
          setLoading(false);
        }
      }
      getUser();
    }, []);
    
    const handleLogin = async (data) => {
      try {
        const response = await api.post("/sessions", data)
        const {user: userResponse, token} = response.data
        setUser(userResponse)
        localStorage.setItem("@TOKEN", token)
        navigate(`/dashboard`)
        } catch (error) {
          toast.error("Algo deu errado!Verifique as informações!", {autoClose: 3000})
        }
      }
      
    const handleRegister = async (data) => {
      try {
          await api.post("/users", data)
          toast.success("Conta criada com sucesso!", {autoClose:3000})
          setTimeout(() => {
            navigate("/")  
          },5000)
        } catch (error) {
          toast.error("Ops! Algo deu errado", {autoClose: 3000})
        }
      }
      
      const logout = () =>{
        localStorage.removeItem("@TOKEN")
        navigate("/")
      }
      return(
        <UserContext.Provider value={{handleLogin, handleRegister, user, loading, techs, logout, token, navigate,setTechs}}>
            {children}
        </UserContext.Provider>
    )
}