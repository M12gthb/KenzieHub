import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90px;
    label{
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        color: var(--color-gray-0);
        margin-bottom: 12px;
    }
    input{
        background-color: var(--color-gray-2);
        color: var(--color-gray-0);
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        padding-left: 16px;
        height: 40px;
        border-radius: 4px;
        margin-bottom: 4px;
        border: none;
        position: relative;
    }
    input:hover{
        border: 1.2182px solid var(--color-gray-0);

    }
    .eyeButton{ 
        width: 14px;
        height: 14px;
        position: absolute;
        right: 10px;
        bottom: 85px;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: var(--color-gray-1);
        margin-top: 2px;
    }
`