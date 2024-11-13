import { useEffect, useState } from "react"
import Character from "./Character.js";
import Paginator from "./paginator.js";

const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
          setCharacters(data.results);
          setInfo(data.info);
          setIsLoading(false);
      })
}, [page]);

    return (

        <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {characters.map((character) => (
          <Character
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            location={character.location.name}
          />
        ))}
      </div>
      <Paginator page={page} info={info} setPage={setPage} />
    </div>
  );
}

export default RickAndMortyCharacters;
