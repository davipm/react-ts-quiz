import styled, { createGlobalStyle } from "styled-components";
import mainBg from "../images/nattu-adnan-unsplash.jpg";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    font-family: 'Catamaran', sans-serif;
    font-weight: normal;
    line-height: 1.5;
    font-size: 16px;
    background: #fff url("${mainBg}") no-repeat center/cover;
  }
`;

export const Wrapper = styled.div`
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
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    font-family: "Fascinate Inline", sans-serif;
    margin: 20px;
    filter: drop-shadow(2px 2px #0085a3);
    background: linear-gradient(180deg, #fff, #87f1ff) 100% / text;
  }

  .start,
  .next {
    height: 40px;
    padding: 0 40px;
    margin: 20px 0;
    font-size: 1rem;
    background-image: linear-gradient(180deg, #ffffff, #ffcc91);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    cursor: pointer;
  }

  .start {
    max-width: 200px;
  }
`;
