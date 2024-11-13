import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";


const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data);
                setIsLoading(false);
            })
    }, [id])

    return (
        <>
            {isLoading ? <Loading/> : ''}
            {!isLoading && <p>Estos son los detalles del personaje: {character.name}</p>}
        </>
    );
}

export default CharacterDetails;