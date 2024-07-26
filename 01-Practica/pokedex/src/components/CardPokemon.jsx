import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

export const CardPokemon = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const {data, isLoading, errors} = useFetch(url)

    return (
      <div className="pokemon-card">
        <div className="pokemon-image">
          <img src={sprites.front_default} alt={name} />
        </div>
        <div className="pokemon-info">
          <p className="pokemon-number">#{id}</p>
          <p className="pokemon-name">{name}</p>
          <div className="pokemon-types">
            {types.map((type, index) => (
              <span key={index} className="pokemon-type">{type.type.name}</span>
            ))}
          </div>
        </div>
      </div>
    );
}
