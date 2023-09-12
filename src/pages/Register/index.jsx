import Logo from "../../assets/Logo.svg"
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { schema } from "./validator";
import { Button2 } from "../../components/Button2";
import { useForm } from "react-hook-form";
import { StyledDiv } from "./styled";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../providers/UserProvider";
import { StyledHeader } from "./styled";
import 'react-toastify/dist/ReactToastify.css';
import { Select } from "../../components/Select";
const Register = () =>{
  const {handleRegister} = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors } 
    } = useForm({ resolver: zodResolver(schema)})

  return(
        <>        
            <StyledHeader>
                <img src={Logo} alt="Logo" />
                <div>
                    <Link to={"/"}>Voltar</Link>
                </div>
            </StyledHeader>
            
            <StyledDiv>
                <h3>Crie sua conta</h3>
                <p className="registerP">Rapido e grátis, vamos nessa</p>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <Input 
                    type="text"
                    id="name"
                    label="Nome"
                    placeholder="Digite aqui seu nome"
                    error={errors.name?.message}
                    {...register("name")}/>

                    <Input             
                    type="email"
                    id="email"
                    label="Email"
                    placeholder="Digite aqui seu email"
                    error={errors.email?.message}
                    {...register("email")}/>

                    <Input type="password"
                    id="password"
                    label="Senha"
                    placeholder="Digite aqui sua senha"
                    error={errors.password?.message}
                    {...register("password")}/>

                    <Input type="password"
                    id="confirm"
                    label="Confirmar Senha"
                    placeholder="Digite novamente sua senha"
                    error={errors.confirm?.message}
                    {...register("confirm")}/>

                    <Input type="text"
                    id="bio"
                    label="Bio"
                    placeholder="Fale sobre você"
                    error={errors.bio?.message}
                    {...register("bio")}/>

                    <Input type="text"
                    id="contact"
                    label="Contato"
                    placeholder="Opção de contato"
                    error={errors.contact?.message}
                    {...register("contact")}/>

                    
                    <Select label="Selecionar Módulo" className="select" id="course_module" {...register( "course_module")}>
                            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                            <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                            <option value="Terceiro módulo (Introdução ao Backend)">Terciero Módulo</option>
                            <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
                    </Select>
                    
                    <Button2 type="submit">Cadastrar</Button2>
                </form>
            </StyledDiv>

        </>
    )
}

export default Register