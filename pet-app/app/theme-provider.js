"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({

  palette: {
    primary: {
      main: '#612096',
      dark: "#401563",
      light: '#945ec0',
    },
    secondary: {
      // light: '#0066ff',
      main: '#5BCF7A',
      // dark: "#0044ff",
      // dark: será calculada com base palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Usado por `getContrastText()` para maximizar o contraste entre
    // o plano de fundo e o texto.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
});

