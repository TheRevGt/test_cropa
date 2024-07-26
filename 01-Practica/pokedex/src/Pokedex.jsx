import React from 'react'
import { useFetch } from './hooks/useFetch'
import { Route, Routes } from 'react-router-dom';

export const Pokedex = () => {
    const url = ' https://pokeapi.co/api/v2/pokemon/'
    const {data, isLoading, hasError, errror} = useFetch(url);
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/pokemon/:name" element={<PerfilScreen />} />
    </Routes>
  )
}
