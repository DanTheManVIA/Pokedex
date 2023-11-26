import ContentTable from "../../components/ContentTable/ContentTable";
import {useEffect, useState} from "react";
import Pagination from "../../components/Pagination/Pagination";

export default function Pokedex(){
    const defaultUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [previousUrl, setPreviousUrl] = useState("");
    
    const fetchData = async ({url}) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results);
                console.log(data.results);
                setNextUrl(data.next);
                setPreviousUrl(data.previous);
            })
            .catch(error => console.log("Error occured while fetching pokemons: ", error))
    }

    useEffect(() => {
        fetchData({url: defaultUrl});
    }, []);
    
    
    return (
        <div>
            <ContentTable pokemonData={pokemonList} />
            <Pagination fetchDataAction={fetchData} nextApiUrl={nextUrl} previousApiUrl={previousUrl}></Pagination>
        </div>
    )
}