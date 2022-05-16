import styled, { createGlobalStyle } from 'styled-components';


let seed = Math.floor(Math.random()*300);

export const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
  }
  body { 
    display: flex;
    justify-content: center;
    background-image: url('https://picsum.photos/seed/${seed}/1200/700/?blur=5');
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    width: 100vw;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;
