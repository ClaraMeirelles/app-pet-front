"use client";
import React from 'react'
import { StyledSecondaryButton } from './layout'
import { Button } from '@mui/material';

export default function SecondaryButton({ title, action }) {
    return (
        <Button onClick={action} variant="text">
            {title}
        </Button>
    )
}
