import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export const CardPokemon = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const {data, isLoading, errors} = useFetch(url)

    return (
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-2">

    {
        isLoading
        ? <p>Cargando</p>
        : (
        <>
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    className="h-full w-full object-cover"
                    src={data.sprites.back_default}
                    alt={data.name}
                />
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 ">
                    # {number}
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased uppercase">
                {data.name}
                </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 space-x-2">
                Tipo: {data.types.map((typeInfo, index) => (
                        <span key={index}>
                            {typeInfo.type.name }
                        </span>
                        ))}
                </p>
                {detail && 
                <div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 space-x-2">
                Abilidad: {data.abilities.map((abilitie, index) => (
                        <span key={index}>
                            {abilitie.ability.name }
                        </span>
                        ))}
                </p>   
                </div>}
            </div>
            <div className="p-6 pt-0">
                <button
                onClick={showDetail}
                className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                >
                    {detail ? (
                        <p>Menos</p>
                    ) : (
                        <p>Más</p>
                    )}
                </button>
                <Link to={`/pokemon/${name}`}>Ver </Link>
            </div>
        </>
        )
    }
    </div>
    );
}
