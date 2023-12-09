import { TextField } from "@mui/material";
import styled from "styled-components";
import { theme } from "../theme-provider";
//simplesmente não carrega a imagem pro bg
// import bgImage from "../../public/img/paws.png"
export const StyledPage = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* background-size: 100%; */
`
export const StyledSignup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex-grow: 1;
  align-items: center;
  justify-content: space-evenly;
  color:${(props) => props.theme === "light" ? "#171618" : "#f4eefa"};
  background-color:${(props) => props.theme === "light" ? "white" : "#171618"};
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
