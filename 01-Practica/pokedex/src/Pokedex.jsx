import React from 'react'
import { useFetch } from './hooks/useFetch'
import { InfoPoke } from './components/InfoPoke';

export const Pokedex = () => {
    const url = ' https://pokeapi.co/api/v2/pokemon/'
    const {data, isLoading, hasError, errror} = useFetch(url);
  return (
    <>
        <h1>Información de Pokémon</h1>
        <hr />
        {
          isLoading
          ? <p>Cargando</p>
          : (
            <ul>
            {data.results.map((pokemon, index) => (
            <li key={index}>
                <a>{pokemon.name}</a>

            </li>
            ))}
          </ul>
            )
        }
    </>
  )
}
