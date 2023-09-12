import styled from "styled-components";

export const StyledSelect = styled.div`
    label{
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        color: var(--color-gray-0);
    }
    select{
           color: var(--color-gray-1);
           font-style: normal;
           font-weight: 400;
           font-size: 1.2rem;
           padding-left: 16px;
           display: flex;
           flex-direction: row;
           align-items: center;
           height: 40px;
           width: 100%;
           border: 1.2182px solid var(--color-gray-0);
           border-radius: 4px;
           margin-bottom: 4px;
           margin-top: 12px;
           background-color: var(--color-gray-2);
           outline: none;
           border: none;
           margin-bottom: 20px;
    }
`