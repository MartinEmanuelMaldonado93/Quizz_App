// import { url } from 'inspector';
import styled, { createGlobalStyle } from 'styled-components';
// @ts-ignore
// Images
import BGImage from './images/Beach_unsplash.jpg';
// import picsumUrl from './images/picsum_URL';

// let bg_picsum ;
//  picsumUrl('beach',1200,700);
// 'https://picsum.photos/seed/picsum/1200/700'
// let str_picsum = `https://picsum.photos/${'beach'}/picsum/${1200}/${700}`
let seed = Math.floor(Math.random()*300);
export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
  }
  body {
    // background-image: url(${BGImage});
    background-image: url('https://picsum.photos/seed/${seed}/1200/700/?blur=5');
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 { 
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`


