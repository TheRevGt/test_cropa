import React from 'react'

export const CardPokemon = () => {
    const { id, name, types, sprites } = pokemon;
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
