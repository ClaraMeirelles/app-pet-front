"use client";
import React, { useEffect, useState } from 'react'
import MainButton from '../ui/Buttons/MainButton/MainButton'
import { StyledForm, StyledHeading, StyledLogin, StyledPage, StyledTextField } from './styled';
import { FormControl, TextField } from '@mui/material';
import Header from "../../components/Header/Header";
import SecondaryButton from '../ui/Buttons/SecondaryButton/SecondaryButton';
import { useForm } from '../hooks/useForm';
import { Button } from '@mui/material';

export default function Login() {
  const [form, setForm] = useForm({ email: '', password: '' })
  const [theme, setTheme] = useState('light'); // Pode ser 'light' ou 'dark'
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const submitForm = (e) => {
    e.preventDefault()
    console.log('Submit', form)
  }
  return (
    <StyledPage >
      <Header />
      <StyledLogin theme={theme}>
        <section>
          <h4>Boas vindas ao</h4>
          <StyledHeading>NOME DO APP</StyledHeading>
        </section>
        <StyledForm onSubmit={submitForm}>
          <TextField onChange={setForm} name="email" value={form.email} placeholder='seu@email.com' type="email" label={"Email:"} focused required />
          <TextField onChange={setForm} name="password" value={form.password} type="password" label={"Senha:"} required />
          <Button title="Login" type="submit" variant="contained" >Login</Button>
          <a href="../signup" > <SecondaryButton title="Ainda não tem conta? Clique aqui!" /></a>
        </StyledForm >
      </StyledLogin>
    </StyledPage>
  )
}
