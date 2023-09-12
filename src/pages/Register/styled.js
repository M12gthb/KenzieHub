import styled from "styled-components";

export const StyledHeader = styled.header`
    max-width: 370px;
    width: 90%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    top: 38px;
    left: 50%;
    transform: translate(-50%);
    margin-bottom: 46px;
    margin-top: 58.03px;
    img{
        width: 122.06px;
        height: 21.21px;
    }
    a{
        text-decoration: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 79.54px;
        height: 31.95px;
        background: var(--color-gray-3);
        border-radius: 4px;
        color: var(--color-gray-0);
    }
`

export const StyledDiv = styled.div`
    position: relative;
    margin-bottom: 16px;
    top: 55px;
    width: 100%;
    height: 891.19px;
    max-width: 370px;
    left: 50%;
    transform: translate(-50%);
    background-color: var(--color-gray-3);
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    h3{
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        text-align: center;
        top: 42px;
        margin-bottom: 22px;
    }
    .registerP{
        position: relative;
        left: 50%;
        transform: translate(-50%);
        color: var(--color-gray-1);
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        text-align: center;
        top: 50px;
    }
    form{
        position: relative;
        top: 80px;
        display: flex;
        flex-direction: column;
    }
` 