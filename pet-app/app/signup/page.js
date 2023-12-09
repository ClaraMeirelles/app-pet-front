"use client";
import React, { useEffect, useState } from 'react'
import MainButton from '../ui/Buttons/MainButton/MainButton'
import { StyledSignup, StyledPage } from './styled';
import { FormControl, TextField } from '@mui/material';
import Header from "../../components/Header/Header";
import SecondaryButton from '../ui/Buttons/SecondaryButton/SecondaryButton';

export default function Signup() {
  const [theme, setTheme] = useState('light'); // Pode ser 'light' ou 'dark'
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  useEffect(() => {
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);
  return (
    <StyledPage >
      <Header />
      <StyledSignup theme={theme}>
        <FormControl>
          <TextField name="name" type="text" label={"Nome:"} required />
          <TextField name="lastName" type="text" label={"Sobrenome:"} required />
          <TextField name="email" type="email" label={"Email:"} required />
          <TextField name="password" type="password" label={"Senha:"} required />
          <TextField name="passwordConfirm" type="password" label={"Confirmar senha:"} required />
          <MainButton title="Criar conta" type="submit" />
          <a href="../login" > <SecondaryButton title="Já tem conta? Clique aqui!" /></a>
        </FormControl >
      </StyledSignup>
    </StyledPage>
  )
}
