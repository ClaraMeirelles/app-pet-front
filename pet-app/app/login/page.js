"use client";
import React, { useEffect, useState } from 'react'
import { StyledForm, StyledHeading, StyledLogin, StyledPage, StyledTextField } from '../../ui/StyledLogin/styled';
import { TextField } from '@mui/material';
import Header from "../../components/Header/Header";
import SecondaryButton from '../../ui/Buttons/SecondaryButton/SecondaryButton';
import { Button } from '@mui/material';
import { useForm } from '../../hooks/useForm';

export default function Login() {
  const [form, setForm] = useForm({ email: '', password: '' })
  const [theme, setTheme] = useState('light');


  // const prefersDarkMode = true
  useEffect(() => {
    const prefersDarkMode = window?.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const submitForm = (e) => {
    e.preventDefault()

    console.log('Submit', form)
  }

  return (
    <StyledPage theme={theme}>
      <Header />
      <StyledLogin >
        <section>
          <h4>Boas vindas ao</h4>
          <StyledHeading>NOME DO APP</StyledHeading>
        </section>
        <StyledForm onSubmit={submitForm}>
          <TextField variant="filled" onChange={setForm} name="email" value={form.email} placeholder='seu@email.com' type="email" label={"Email:"} required autoFocus />
          <TextField variant="filled" onChange={setForm} name="password" value={form.password} type="password" label={"Senha:"} required />
          <Button title="Login" type="submit" variant="contained" >Login</Button>
          <a href="../signup" > <SecondaryButton title="Ainda não tem conta? Clique aqui!" /></a>
        </StyledForm >
      </StyledLogin>
    </StyledPage>
  )
}
