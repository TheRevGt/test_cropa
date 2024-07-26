import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { GridImages } from "../components/GridImages";

export const PerfilScreen = () => {
    const {name} = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const {data, isLoading, errors} = useFetch(url)
    const space = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
  return (
    
    <div className=" flex w-auto mx-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-2">

    {
        isLoading
        ? <p>Cargando</p>
        : (
        <>
            <div className=" p-5 container overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <GridImages
                name={data.name}
                sprites={[
                  data.sprites.front_default,
                  data.sprites.front_shiny,
                  data.sprites.back_default,
                  data.sprites.back_shiny
                ]}
                key={name}
            />
            </div>
            <div className="p-6">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 ">
                    <span className=" font-semibold">
                        ID:  {space}
                    </span>  
                    {data.id}
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased uppercase">
                <span className=" font-semibold">
                        Nombre  {space}
                    </span>  
                {data.name}
                </p>
                <p className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased opacity-75 space-x-2">
                <span className=" font-semibold">
                    Tipo:  {space}
                </span>   
                {data.types.map((typeInfo, index) => (
                        <span key={index}>
                            {typeInfo.type.name }
                        </span>
                        ))}
                </p>
                <p className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased opacity-75 space-x-2">
                <span className=" font-semibold">
                    Regiones:  {space}
                </span>   
                    {data.abilities.map((abilitie, index) => (
                    <span key={index}>
                        {abilitie.ability.name }
                    </span>
                    ))}
                </p>
                <p className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased opacity-75 space-x-2">
                <span className=" font-semibold">
                    Abilidad:  {space}
                </span>  
                    {data.abilities.map((abilitie, index) => (
                    <span key={index}>
                        {abilitie.ability.name }
                    </span>
                    ))}
                </p>
            </div>
        </>
        )
    }
    </div>
  )
}
