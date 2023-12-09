"use client";
import React, { useEffect, useState } from 'react'
import MainButton from '../ui/Buttons/MainButton/MainButton'
import { StyledHeading, StyledLogin, StyledPage, StyledTextField } from './styled';
import { FormControl, TextField } from '@mui/material';
import Header from "../../components/Header/Header";
import SecondaryButton from '../ui/Buttons/SecondaryButton/SecondaryButton';

export default function Login() {
  const [theme, setTheme] = useState('light'); // Pode ser 'light' ou 'dark'
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  useEffect(() => {
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);
  return (
    <StyledPage >
      <Header />
      <StyledLogin theme={theme}>
        <section>
          <h4>Boas vindas ao</h4>
          <StyledHeading>NOME DO APP</StyledHeading>
        </section>
        <FormControl>
          <StyledTextField
            placeholder='seu@email.com' type="email" label={"Email:"} focused required />
          <TextField type="password" label={"Senha:"} required />
          <MainButton title="Login" type="submit" />
          <SecondaryButton title="Ainda não tem conta? Clique aqui!" />
        </FormControl >
      </StyledLogin>
    </StyledPage>
  )
}
