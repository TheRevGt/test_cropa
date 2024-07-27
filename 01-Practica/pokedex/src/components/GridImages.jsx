export const GridImages = ({name, sprites = [] }) => {
    return (
      <div className=" flex flex-wrap space-3 justify-center border-b-2">
        {sprites.map( (sprite, index) =>(
          <div className=" flex w-60 flex-col rounded-xl" key={index}>
              <img src={sprite}
                alt={name}
                className=" w-full "
              />
          </div>
      ))
    }
    </div>
    )
  }
  