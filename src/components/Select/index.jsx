import { forwardRef } from "react"
import { StyledSelect } from "./styled"
export const Select = forwardRef(({id, label, children, ...rest}, ref) =>{
        return(
            <StyledSelect>
                {label ? <label htmlFor={id}>{label}</label> : null}
                <select id={id} ref={ref} {...rest}>
                    {children}
                </select>
            </StyledSelect>
        )
})