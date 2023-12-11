'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header/Header'
import SecondaryButton from '../ui/Buttons/SecondaryButton/SecondaryButton'
import { StyledArticle, StyledPage, StyledSpan } from '../ui/General/styled'
export default function Home() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const prefersDarkMode = window?.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);
  return (

    <StyledPage theme={theme}>
      <Header />
      <StyledArticle>
        <h2>Sobre:</h2>
        <p>
          Boas vindas ao <StyledSpan>NOME DO APP</StyledSpan>, o seu aplicativo completo de gerenciamento de pets! Projetado com amor e cuidado, o PetCare Manager é a solução perfeita para todos os amantes de animais que desejam proporcionar o melhor cuidado possível para seus peludos.
        </p>
      </StyledArticle>
      <StyledArticle>
        <h2>Como o app pode te ajudar:</h2>
        <h3>1. Cadastro Detalhado de Pets:</h3>
        <p>
          Registre todos os detalhes importantes sobre seus pets, desde informações básicas até peculiaridades específicas da personalidade. Mantenha um perfil abrangente para cada membro peludo da sua família.
        </p>
        <h3>2. Agendamento e Lembretes:</h3>
        <p>
          Nunca mais perca uma medicação, vacinação ou visita ao veterinário. O NOME DO APP permite que você agende facilmente compromissos e receba lembretes personalizados para garantir que seu pet receba os cuidados necessários no momento certo.
        </p>
        <h3>3. Histórico de Saúde:</h3>
        <p>
          Acompanhe o histórico de peso do seu pet ao longo do tempo, proporcionando uma visão abrangente da saúde e bem-estar. Mantenha registros de exames médicos para facilitar as consultas veterinárias e garantir um cuidado personalizado.
        </p>
        <h3>4. Anotações Importantes:</h3>
        <p>
          Capture rapidamente pensamentos e informações importantes. Seja uma mudança de comportamento, uma nova preferência alimentar ou qualquer outra observação relevante, o NOME DO APP é seu espaço para anotações essenciais.
        </p>
      </StyledArticle>
      <StyledArticle>
        <p>
          <a href='/signup'>Cadastre-se agora</a> e descubra a facilidade de gerenciar todos os aspectos da saúde e do bem-estar do seu pet em um só lugar.
        </p>
        <a href='/login'>
          <SecondaryButton title="Já tem conta? faça o login!" />
        </a>
      </StyledArticle>
    </StyledPage>
  )
}
