import Logo from "../../assets/Logo.svg"
import { Techs } from "../../components/Cards";
import { StyledDiv, StyledTech, StyledSection, StyledHeader } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { AddModal } from "../../components/AddModal";
import { EditModal } from "../../components/EditModal";
import { TechContext } from "../../providers/TechProvider";
const Dashboard = () =>{
   const {user, loading, logout } = useContext(UserContext)
   const {handleTech, setModalAdd, modalAdd,modalEdit} = useContext(TechContext)
   
   if(loading) {
     return (
       <StyledDiv>
        <img src={Logo} alt="Logo" />
        <h1>Buscando Usuário...</h1>
       </StyledDiv>
        )
      }
      return(
        <>
        {modalAdd ? <AddModal handleTech={handleTech} setModalAdd={setModalAdd}></AddModal> : null}
        {modalEdit ? <EditModal></EditModal>  : null}
        
        <StyledHeader>
            <img src={Logo} alt="Logo" />
            <button onClick={() => logout()}>Sair</button>
        </StyledHeader>

        <StyledSection>
            <h1>Olá, {user?.name}</h1>
            <p>{user?.course_module}</p>
        </StyledSection>

        <StyledTech>
          <div className="Div">
            <h3>Tecnologias</h3>
            <button onClick={() => setModalAdd(true)}>+</button>
          </div>
          <ul>
            <Techs/>
          </ul>
        </StyledTech>
        </>
    )
}
export default Dashboard