import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 144.06px;
            height: 19.97px;
            margin-top: 50px;
            margin-bottom: 250px;
        }
`

export const StyledHeader = styled.header`
    height: 72px;
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 105.53px;
        height: 14.63px;
    }

    button{
        border: none;
        background-color: var(--color-gray-3);
        color: var(--color-gray-0);
        font-style: normal;
        font-weight: 600;
        font-size: 1.2rem;
        width: 50px;
        height: 29px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }
`

export const StyledSection = styled.section`
    height: 131px;
    width: 100%;
    border-top: 1px solid var(--color-gray-3);
    padding-left: 15%;
    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        color: var(--color-gray-1);
    }
    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 15%;
        h1{
            margin-top: 0;
            margin-bottom: 0;
        }
    }
`
export const StyledTech = styled.section`
    width: 100%;
    border-top: 1px solid var(--color-gray-3);
    padding-left: 15%;
    padding-right: 15%;
    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    p{
        font-style: normal; 
        font-weight: 400;
        font-size: 1.6rem;
        color: #fff;
    }
    ul{
        background-color: var(--color-gray-3);
        border-radius: 4px;
        padding: 23px;
        padding-bottom: 7px;
    }
    div{
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    div > button{
        width: 32px;
        height: 32px;
        border-radius: 4px;
        background-color: var(--color-gray-3);
        color: var(--color-gray-0);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: 300;
    }
`
