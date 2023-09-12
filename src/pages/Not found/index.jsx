import Logo from "../../assets/Logo.svg"
import { StyledHeader } from "./style"
const NotFound = () =>{
    return(
        <>
            <StyledHeader>
                <img src={Logo} alt="Logo" />
                <h1>404 Error Not Found</h1>
            </StyledHeader>
        </>
    )
}
export default NotFound