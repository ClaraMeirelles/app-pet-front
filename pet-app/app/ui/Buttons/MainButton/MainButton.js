'use client';

import React from 'react'
import { StyledMainButton } from './layout'

export default function MainButton({ title, action }) {
  return (
    <StyledMainButton onClick={action} >
      {title}
    </StyledMainButton>
  )
}
