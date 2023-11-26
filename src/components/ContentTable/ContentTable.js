import Card from "../Card/Card";
import "./ContentTable.css";
import {useEffect, useState} from "react";
import DetailsModal from "../DetailsModal/DetailsModal";

export default function ContentTable({pokemonData}) {
    const [pokemonDetailsList, setPokemonDetailsList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    
    const fetchData = async () => {
        const tasks = pokemonData.map(pokemon => {
            return fetch(pokemon.url)
                .then(response => response.json())
                .catch(error => console.log("Error while fetching detailed data for a pokemon", error));
        })
        
        try{
            const data = await Promise.all(tasks);
            setPokemonDetailsList(data);
        }catch(error){
            console.log("Error while awaiting the detailed data for all pokemons", error);
        }
    }
    
    const openModal = () => {
        setIsModalOpen(true);
    }
    
    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    const handleOnClick = (id) => {
       let pokemon = pokemonDetailsList.find(pokemon => pokemon.id == id);
       setSelectedPokemon(pokemon);
       openModal();
    }
    
    useEffect(() => {
        fetchData();
    },[pokemonData])
    
    return (
        <div>
            <div className="card-grid">
                {pokemonDetailsList.map((pokemon) => (
                    <Card key={pokemon.id} onClick={() => handleOnClick(pokemon.id)} name={pokemon.name} pokeImageUrl={pokemon.sprites.front_default}/>
                ))}
            </div>
            <DetailsModal isOpen={isModalOpen} onClose={closeModal} pokemonData={selectedPokemon}></DetailsModal>
        </div>
    )
}