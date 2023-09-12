import Logo from "../../assets/Logo.svg"
import Eye from "../../assets/Eye.svg"
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaLogin } from "./validator";
import { UserContext } from "../../providers/UserProvider";
import { useState, useContext } from "react";
import { StyledDiv, StyledImg } from "./style";
import 'react-toastify/dist/ReactToastify.css';
import { Button1 } from "../../components/Button1";

const Login = () =>{
    const {handleLogin} = useContext(UserContext)
    const [isTypePassword, setIstypePassword] = useState(true)
    const {
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm({ resolver: zodResolver(schemaLogin)})

    return(
        <>
            <StyledImg src={Logo} alt="Logo" />
            <StyledDiv>
                <h3>Login</h3>
                
                <form onSubmit={handleSubmit(handleLogin)}>
                  <Input
                    type="email"
                    id="email"
                    label="Email"
                    placeholder="Digite aqui seu email"
                    error={errors.email?.message}
                    {...register("email")}/>

                    <Input type={isTypePassword ? "password" : "text"}
                    id="password"
                    label="Senha"
                    placeholder="Digite aqui sua senha"
                    error={errors.password?.message}
                    {...register("password")}>
                      <img src={Eye} className="eyeButton" onClick={() =>{setIstypePassword(!isTypePassword)}}/>
                    </Input>

                    <Button1 className="loginButton" type="submit">Entrar</Button1>
                </form>

                <p className="LoginP">Ainda não possui uma conta?</p>

                <Link to={"/register"}>Cadastrar-se</Link>
            </StyledDiv>
        </>
    )
}

export default Login