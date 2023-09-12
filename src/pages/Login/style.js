import styled from "styled-components";

export const StyledImg = styled.img`
    width: 144.06px;
    height: 20px;
    position: absolute;
    left: 50%;
    top: 77.33px;
    transform: translate(-50%);
`
export const StyledDiv = styled.div`
    position: relative;
    top: 146px;
    max-width: 369px;
    width: 90%;
    height: 502px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    background-color: var(--color-gray-3);

    h3{
        font-style: normal;
        font-weight: 700;
        position: absolute;
        top: 33.69px;
        left: 50%;
        transform: translate(-50%);
    }

    form{
        display: flex;
        flex-direction: column;
        position: relative;
        top: 100px;
        left: 50%;
        transform: translate(-50%);
        width: 90%;
    }
    .LoginP{
        font-style: normal;
        font-weight: 600;
        font-size: 1.2rem;
        color: var(--color-gray-1);
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top: 360px;
        width: 100%;
        text-align: center;
    }
    a{
        text-decoration: none;
        color: var(--color-gray-0);
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        position: absolute;
        top: 400px;
        left: 50%;
        transform: translate(-50%);
        background-color: var(--color-gray-1);
        width: 90%;
        height: 48px;
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 50px;
    }
`