import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-Negative: #59323F;
    --color-gray-0: #F8F9FA;
    --color-gray-1: #868E96;
    --color-gray-2: #343B41;
    --color-gray-3: #212529;
    --color-gray-4: #121214;
    --color-success: #3FE864;
    --color-warning: #FBEA85;
    --color-error: #E83F5B;
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    } 
  }
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    color: var(--color-gray-0);
  }
  body {
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }
  button {
    cursor: pointer;
  }
`