import { GridPokemon } from "../components/GridPokemon"

export const HomeScreen = () => {
  return (
    <section className=" text-center w- full">
      <h1 className=" font-bold text-4xl md:text-5xl w-full text-gray-900 leading-tight ">Pokedex</h1>
      <GridPokemon/>
    </section>
  )
}
