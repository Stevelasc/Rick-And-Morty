import { useEffect, useState } from "react"
import Character from "./Character.js";
import Paginator from "./paginator.js";

const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    },[])

    return (

        <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            location={character.location.name}
            episode={character.episode[0].name}
          />
        ))}
      </div>
    </div>
  );
}

export default RickAndMortyCharacters;
