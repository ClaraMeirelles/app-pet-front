import { TextField } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../app/theme-provider";
//simplesmente não carrega a imagem pro bg
// import bgImage from "../../public/img/paws.png"
export const StyledPage = styled.main`
  height: 100vh;
  width: 100vw;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  /* background-size: 100%; */
  background-color:${(props) => props.theme === "light" ? "white" : "#171618"};
  color:${(props) => props.theme === "light" ? "#171618" : "#f4eefa"};

`
export const StyledLogin = styled.section`
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
  min-height: fit-content;
  overflow-x: scroll;
  
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
    color: #FFFFFF;
    width: 70vw;
    max-width: 400px;
    border: 1px solid #612096;
    border-radius: 6px;
    &:focus{
      border: 0;
    }
  }
`
export const StyledHeading = styled.h1`
  font-family: 'Bungee Shade', sans-serif;
  font-size: 3rem;
  color: ${theme.palette.secondary.main};
`

export const StyledTextField = styled(TextField)`
  color: #FFFFFF;
  width: 90vw;
  max-width: 400px;
`
