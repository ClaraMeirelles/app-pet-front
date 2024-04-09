import styled from "styled-components";
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
  /* align-items: center; */
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex-grow: 1;
  justify-content: space-evenly;
  background-image: url('/img/paws-bg.png');
  background-repeat: no-repeat;
  background-size: 100px;
  background-size: 30%;
  background-position-x: 140%;
  background-position-y: 115%;
  
  @media screen and (min-device-width: 750px) {
    background-position: right bottom;
    background-size: 25%;
    font-size:4rem;
  
  }
`

export const StyledForm = styled.form`
   display: flex;
  flex-direction: column;
  gap:16px;
  display: flex;
  flex-direction: column;
  max-width: 60vw;
  gap:16px;
align-self: center;
  border-radius:16px;
  padding: 16px;
  div{
    *{
    color: #612096;
  }}

  @media screen and (max-device-width: 900px){
    max-width: 95vw;
    align-items: center;
  }
  `


