import styled from "styled-components";

export const CardTech = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-gray-4);
    border-radius: 4px;
    height: 49px;
    margin-bottom:16px;
    padding-left: 22.22px;
    padding-right: 22.22px;
    cursor: pointer;
    :hover{
        background-color: var( --color-gray-2)
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 1.2182rem;
    }
`
export const NoTech = styled.h1`
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom:20px;
`