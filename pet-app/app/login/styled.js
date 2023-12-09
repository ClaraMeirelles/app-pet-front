import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledPage = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const StyledLogin = styled.section`
display: flex;
  flex-direction: column;
  gap:16px;
  padding: 16px;
  flex-grow:1;
  align-items: center;
  justify-content: space-evenly;
`

export const StyledHeading = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
  font-family: "Bungee", sans-serif;

  font-size: 3rem;

`

export const StyledTextField = styled(TextField)`
  color:#FFFFFF;
  width: 90vw;
  max-width: 400px;
`
