import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, h4, p, button {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
  code {
    font-family: 'Roboto', sans-serif;
    letter-spacing: -3.11px;
  }
  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  body::-webkit-scrollbar {
    width: 6px;     /* Tamaño del scroll en vertical */
    height: 4px;    /* Tamaño del scroll en horizontal */
    display: block;  /* Ocultar scroll */
  }
  /* Ponemos un color de fondo y redondeamos las esquinas del thumb */
  body::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  body::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
  }
  
  /* Cambiamos el fondo cuando esté en active */
  body::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }
  /* Ponemos un color de fondo y redondeamos las esquinas del track */
  .scroll-containe::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 10px;
  }
  /* Cambiamos el fondo cuando esté en active o hover */
  .scroll-containe::-webkit-scrollbar-track:hover,
  .scroll-containe::-webkit-scrollbar-track:active {
  background: #d4d4d4;
  }   
`