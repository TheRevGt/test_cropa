import { useLayoutEffect, useRef, useState } from "react"

export const InfoPoke = ({id, name, sprites = []}) => {
  return (
    <>
    <section style={{display:"flex"}}>
        <h2>#{id} - {name} </h2>
        <div >
            {
                sprites.map( sprite =>(
                    <img src={sprite} alt={name} key={sprite} />
                ))
            }
        </div>
    </section>
    </>
  )
}
