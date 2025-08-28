import React, { useState } from 'react'

export function useForm(initialState) {
    const [form, setForm] = useState(initialState)
    const onChangeForm = (event) => {
        if (event.target) {
            const { name, value } = event.target
            setForm({ ...form, [name]: value })
        } else {
            console.log(event)
            const { y, m, d } = event
            let date = [y, m, d]

            console.log(date)
            // setForm(...form, date:)
        }

    }

    return [form, onChangeForm]
}
