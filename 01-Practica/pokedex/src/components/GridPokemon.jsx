
import { useFetch } from "../hooks/useFetch"
import { CardPokemon } from "./CardPokemon"

export const GridPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const {data, isLoading, errors} = useFetch(url)
    return (
    <>
      <h1 className=" text-3xl font-bold underline">Pokedex</h1>
      {
        isLoading
        ? <p>Cargando</p>
        : (
          <div className=" w-full h-full flex flex-wrap space-3 justify-center">
              {data.results.map((pokemon, index) => (
                  <CardPokemon key={index} name={pokemon.name} number={index+1} />
              ))}
          </div>
          )
      }
    </>
    )
}
