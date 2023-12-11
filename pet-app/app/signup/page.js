"use client";
import React, { useEffect, useState } from 'react'
import { StyledSignup, StyledPage, StyledForm } from '../../ui/StyledSignup/styled';
import { Button, TextField } from '@mui/material';
import Header from "../../components/Header/Header";
import SecondaryButton from '../../ui/Buttons/SecondaryButton/SecondaryButton';
import { useForm } from '../../hooks/useForm';

export default function Signup() {
  const [theme, setTheme] = useState('light'); // Pode ser 'light' ou 'dark'
  const [form, setForm] = useForm({ name: "", lastName: "", email: "", password: "", passwordConfirm: "" })

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const submitForm = (e) => {
    e.preventDefault()
    console.log('Submit', form)
  }
  return (
    <StyledPage theme={theme}>
      <Header />
      <StyledSignup theme={theme}>
        <StyledForm onSubmit={submitForm} theme={theme}>
          <TextField color="secondary" variant="filled" value={form.name} onChange={setForm} name="name" type="text" label={"Nome:"} required autoFocus />
          <TextField color="secondary" variant="filled" value={form.lastName} onChange={setForm} name="lastName" type="text" label={"Sobrenome:"} required />
          <TextField color="secondary" variant="filled" value={form.email} onChange={setForm} name="email" type="email" label={"Email:"} required />
          <TextField color="secondary" variant="filled" value={form.password} onChange={setForm} name="password" type="password" label={"Senha:"} required />
          <TextField color="secondary" variant="filled" value={form.passwordConfirm} onChange={setForm} name="passwordConfirm" type="password" label={"Confirmar senha:"} required />
          <Button type="submit" variant='contained' >Criar conta</Button>
          <a href="../login" >
            <SecondaryButton title="Já tem conta? Clique aqui!" />
          </a>
        </StyledForm>
      </StyledSignup>
    </StyledPage>
  )
}
