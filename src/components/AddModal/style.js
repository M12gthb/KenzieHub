import styled from "styled-components";

export const StyledModal = styled.div`
    width:90%;
    max-width:369px;
    background-color: var(--color-gray-3);
    color:var(--color-gray-0);
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    z-index: 3;
    padding-bottom:16px;
    top: 180px;
    form{
        position: relative;
        width: 90%;
        left: 50%;
        transform: translate(-50%);
    }
    section{
        padding-left: 20px;
        padding-right: 20px;
        position: relative;
        top: 0;
        width: 100%;
        height: 50px;
        background-color: var(--color-gray-2);
        display: flex;
        align-items:center;
        justify-content: space-between;
        margin-bottom:21px
    }
    section > h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
    }
    section > button{
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 600;
        font-size: 1.6rem;
        color: var(--color-gray-1);
        background: transparent;
        border: none;
    }
    
`