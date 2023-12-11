import { TextField } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../app/theme-provider";
//simplesmente não carrega a imagem pro bg
// import bgImage from "../../public/img/paws.png"
export const StyledPage = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color:${(props) => props.theme === "light" ? "#171618" : "#f4eefa"};
  background-color:${(props) => props.theme === "light" ? "white" : "#171618"};
`
export const StyledSignup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex-grow: 1;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex-grow: 1;
  align-items: center;
  justify-content: space-evenly;
  background-image: url('/img/paws-bg.png');
  background-repeat: no-repeat;
  background-size: 300px;
  background-size: 80%;
  background-position-x: 140%;
  background-position-y: 115%;
  
  @media screen and (min-device-width: 750px) {
    background-position: center bottom;
    background-size: 40%;
    font-size:4rem;
  
  }
`

export const StyledForm = styled.form`
   display: flex;
  flex-direction: column;
  gap:16px;
  display: flex;
  flex-direction: column;
  align-items:center;
  gap:16px;

  border-radius:16px;
  padding: 16px;
  div{
    *{
    color: #612096;
  }}
  input{
    color: #c1bac7;
    width: 70vw;
    max-width: 400px;
    border: 1px solid #612096;
    border-radius:6px;
    &:focus{
      border: 0;
    }
  }
`


