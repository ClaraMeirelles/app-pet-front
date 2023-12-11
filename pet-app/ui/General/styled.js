import styled from "styled-components";
import { theme } from "../../app/theme-provider";

export const StyledPage = styled.main`
  min-height: 100vh;
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color:${(props) => props.theme === "light" ? "white" : "#171618"};
  color:${(props) => props.theme === "light" ? "#171618" : "#f4eefa"};
  h1, h2, h3, h4, h4, a{
    color:${(props) => props.theme === "light" ? theme.palette.primary.main : theme.palette.primary.light};
  }
  a{
    text-decoration:underline;
  }
`

export const StyledArticle = styled.article`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
`

export const StyledSpan = styled.span`
    font-family: 'Bungee Shade', sans-serif;
    color:${(props) => props.theme === "light" ? theme.palette.primary.main : theme.palette.secondary.main};
`