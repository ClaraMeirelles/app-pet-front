"use client";
import React from 'react'
import { StyledSecondaryButton } from './layout'
import { Button } from '@mui/material';
import { theme } from '../../../app/theme-provider';

export default function SecondaryButton({ title, action }) {
    return (
        <Button onClick={action} variant="text" >
            {title}
        </Button>
    )
}
