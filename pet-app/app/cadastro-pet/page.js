"use client";
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyledSignup, StyledPage, StyledForm } from '../../ui/StyledPetRegistration/styled';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Header from "../../components/Header/Header";
import SecondaryButton from '../../ui/Buttons/SecondaryButton/SecondaryButton';
import { useForm } from '../../hooks/useForm';
import { AddVaccines } from '../../components/AddVaccines/AddVaccines';
import { Vaccines } from '../../components/Vaccines/Vaccines';

export default function PetRegistration() {
  const [theme, setTheme] = useState('dark'); // Pode ser 'light' ou 'dark' 
  const [edit, setEdit] = useState(false);
  const [petId, setPetId] = useState("")
  const [addVaccines, setAddVaccines] = useState(false)
  const [form, setForm] = useForm({
    name: "",
    dateOfBirth: "",
    species: "",
    breed: "",
    other: ""
  })


  useLayoutEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
    const petIdStorage = window.localStorage.getItem("pet-id")
    console.log(petIdStorage)
    setPetId(petIdStorage)
    if (petIdStorage) {
      setEdit(true)
    }
  }, []);
  window.localStorage.setItem("pet-id", "asdf123")
  const submitForm = (e) => {
    e.preventDefault()
    let formSubmit = { ...form }
    if (form.species == "other") {
      console.log("entrou")
      formSubmit.species = formSubmit.other
    }
    console.log('Submit', formSubmit)
  }
  console.log(({ edit }))
  return (
    <StyledPage theme={theme}>
      <Header />
      <StyledSignup theme={theme}>
        <StyledForm onSubmit={submitForm} theme={theme}>
          <TextField
            color="secondary"
            variant="filled"
            value={form.name}
            onChange={setForm}
            name="name"
            type="text"
            label={"Nome:"}
            required
            autoFocus
          />
          <TextField
            color="secondary"
            variant="filled"
            value={form.dateOfBirth}
            onChange={setForm}
            name="dateOfBirth"
            type="date"
            label={"Nascimento:"}
            required
          />
          <FormControl sx={{ minWidth: 120 }} >
            <InputLabel id="demo-simple-select-label" >Espécie</InputLabel>
            <Select
              value={form.species}
              label="Espécie"
              onChange={setForm}
              name={"species"}
              color='secondary'
              variant="filled"
              required
            >
              <MenuItem value={"cat"}>Gato</MenuItem>
              <MenuItem value={"dog"}>Cachorro</MenuItem>
              <MenuItem value={"other"}>Outro</MenuItem>
            </Select>
          </FormControl>
          {form.species === "other" &&
            <TextField
              color="secondary"
              variant="filled"
              value={form.other}
              onChange={setForm}
              name="other"
              type="text"
              label={"Digite a espécie:"}
              required
              autoFocus
            />
          }
          <TextField
            color="secondary"
            variant="filled"
            value={form.breed}
            onChange={setForm}
            name="breed"
            type="text"
            label={"Raça:"}
          />
          {edit &&
            <>
              <TextField
                color="secondary"
                variant="filled"
                value={form.weight}
                onChange={setForm}
                name="weight"
                type="text"
                label={"Digite o peso:"}
                required
                autoFocus
              />
              {addVaccines && <>
                <Vaccines />
                <AddVaccines /></>}
              <Button onClick={() => { setAddVaccines(!addVaccines) }}>Adicionar vacinas</Button>
            </>

          }
          <>
            <Button type="submit" variant='contained'>{edit ? "Salvar alterações" : "Adicionar Pet"}</Button>
            <a href="../login" >
              <SecondaryButton title="Voltar para meus pets" />
            </a>
          </>
        </StyledForm>
      </StyledSignup>
    </StyledPage>
  )
}
