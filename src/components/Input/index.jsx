import { forwardRef } from "react";
import { InputContainer } from "./style";

const Input = forwardRef(({id, label,error, children, ...rest}, ref)=>{
    return(
        <InputContainer>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input id={id} ref={ref} {...rest} />
            {children}
            {error ? <p>{error}</p> : null}
        </InputContainer>
    )
}) 

export default Input