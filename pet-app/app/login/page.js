"use client";
import React from 'react'
import MainButton from '../ui/Buttons/MainButton/MainButton'
import { StyledHeading, StyledLogin, StyledPage, StyledTextField } from './styled';
import { FormControl, TextField } from '@mui/material';
import Header from "../components/Header/Header";
import SecondaryButton from '../ui/Buttons/SecondaryButton/SecondaryButton';
import { Title } from '@mui/icons-material';

export default function Login() {
  return (
    <StyledPage>
      <Header />
      <StyledLogin>
        <section>
          <h4>Boas vindas ao</h4>
          <StyledHeading>NOME DO APP</StyledHeading>
        </section>
        <FormControl>
          <StyledTextField
            placeholder='seu@email.com' type="email" label={"Email:"} focused required />
          <TextField type="password" label={"Senha:"} required />
          <MainButton title="Login" type="submit" />
          {/* <br/> */}

          <SecondaryButton title="Ainda não tem conta? Clique aqui!" />
        </FormControl >
      </StyledLogin>
    </StyledPage>
  )
}
