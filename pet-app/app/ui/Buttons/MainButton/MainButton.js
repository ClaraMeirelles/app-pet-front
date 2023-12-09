'use client';

import React from 'react'

import { Button } from '@mui/material';

export default function MainButton({ title, action }) {
  return (
    <Button onClick={action} variant='contained'>
      {title}
    </Button>
  )
}
