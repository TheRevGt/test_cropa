import React from 'react'
import { useFetch } from './hooks/useFetch'
import { InfoPoke } from './components/InfoPoke';
import { Link } from 'react-router-dom';

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
              <>
              <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`} className="pokemon-card">
                <p className="pokemon-name">{pokemon.name}</p>
                <p className="pokemon-number">#{pokemon.url.split('/')[6]}</p>
              </Link>
              </>
            ))}
          </ul>
            )
        }
    </>
  )
}
