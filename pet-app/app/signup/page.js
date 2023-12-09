"use client";
import React, { useEffect, useState } from 'react'
import MainButton from '../ui/Buttons/MainButton/MainButton'
import { StyledSignup, StyledPage, StyledForm } from './styled';
import { Button, FormControl, FormGroup, TextField } from '@mui/material';
import Header from "../../components/Header/Header";
import SecondaryButton from '../ui/Buttons/SecondaryButton/SecondaryButton';
import { useForm } from '../hooks/useForm';

export default function Signup() {
  const [theme, setTheme] = useState('light'); // Pode ser 'light' ou 'dark'
  const [form, setForm] = useForm({ name: "", lastName: "", email: "", password: "", passwordConfirm: "" })
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
      <StyledSignup theme={theme}>
        <StyledForm>
          <TextField color="secondary" variant="outlined" value={form.name} onChange={setForm} name="name" type="text" label={"Nome:"} required />
          <TextField variant="outlined" value={form.lastName} onChange={setForm} name="lastName" type="text" label={"Sobrenome:"} required />
          <TextField variant="outlined" value={form.email} onChange={setForm} name="email" type="email" label={"Email:"} required />
          <TextField variant="outlined" value={form.password} onChange={setForm} name="password" type="password" label={"Senha:"} required />
          <TextField variant="outlined" value={form.passwordConfirm} onChange={setForm} name="passwordConfirm" type="password" label={"Confirmar senha:"} required />
          <Button type="submit" variant='contained' >Criar conta</Button>
          <a href="../login" > <SecondaryButton title="Já tem conta? Clique aqui!" /></a>
        </StyledForm >
      </StyledSignup>
    </StyledPage>
  )
}
