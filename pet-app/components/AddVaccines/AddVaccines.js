import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { StyledForm } from '../../ui/StyledPetRegistration/styled'
import { theme } from '../../app/theme-provider'
import SecondaryButton from '../../ui/Buttons/SecondaryButton/SecondaryButton'
export function AddVaccines() {
    const [form, setForm] = useForm({})
    const [initialValueNextDose, setInitialValueNextDose] = useState('')
    const submitForm = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        if (form.dateAdministered) {
            let nextDoseDue = form.dateAdministered.split("-")
            nextDoseDue[0] = +nextDoseDue[0] + 1
            nextDoseDue.join("-")
            setInitialValueNextDose(nextDoseDue.join("-"))

        }
    }, [form.dateAdministered])

    return (
        <StyledForm onSubmit={submitForm} >
            <TextField
                color="secondary"
                variant="filled"
                value={form.vaccineType}
                onChange={setForm}
                name="vaccineType"
                label={"Tipo:"}
                required
            />
            <TextField
                color="secondary"
                variant="filled"
                value={form.dateAdministered}
                onChange={setForm}
                name="dateAdministered"
                type="date"
                label={"Data:"}
                required
            />
            <TextField
                color="secondary"
                variant="filled"
                value={form.vaccineLab}
                onChange={setForm}
                name="vaccineLab"
                label={"Laboratório:"}
            />
            <TextField
                color="secondary"
                variant="filled"
                value={form.vaccineBatch}
                onChange={setForm}
                name="vaccineBatch"
                label={"Lote:"}
            />
            <TextField
                color="secondary"
                variant="filled"
                value={form.nextDoseDue}
                onChange={setForm}
                name="nextDoseDue"
                type="date"
                defaultValue={initialValueNextDose}
                label={"Próxima dose:"}
                required
            />
            <TextField
                color="secondary"
                variant="filled"
                value={form.vetAdministered}

                onChange={setForm}
                name="vetAdministered"
                label={"Vet responsável:"}
                required
            />
            <Button variant="contained" size="small">Adicionar</Button>
        </StyledForm>
    )
}
