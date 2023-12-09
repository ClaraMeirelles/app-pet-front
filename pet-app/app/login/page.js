"use client";
import React from 'react'
import MainButton from '../ui/Buttons/MainButton/MainButton'
import { StyledLogin } from './styled';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import Header from "../components/Header/Header";
import SecondaryButton from '../ui/Buttons/SecondaryButton/SecondaryButton';

export default function Login() {
  return (
    <>
      <Header />
      <StyledLogin>
        <h4>Boas vindas ao</h4>
        <h1>NOME DO APP</h1>
        <FormControl>
          <TextField label="Outlined secondary" color="secondary" focused />
          <TextField label="Filled success" variant="filled" color="success" focused />
          <TextField required type="email" label={"Email:"} focused />
          <FormHelperText />
          <TextField required type="password" label={"Senha:"} />
          <MainButton title="Login" type="submit" />
          {/* <br/> */}

          <SecondaryButton title="Ainda não tem conta? Clique aqui!" />
        </FormControl >
      </StyledLogin>
    </>
  )
}
