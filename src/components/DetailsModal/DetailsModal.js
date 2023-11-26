import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import "./DetailsModal.css";
import Card from "../Card/Card";

Modal.setAppElement("#root");
export default function DetailsModal({ isOpen, onClose, pokemonData }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleCardFlip = () => setIsFlipped(!isFlipped);
    
    useEffect(() => {
        console.log(pokemonData);
    }, [pokemonData])
    
    const handleOnClose = () => {
        onClose();
        setIsFlipped(false);
    }

    if (!pokemonData) return null;

    return (
        <Modal isOpen={isOpen} onRequestClose={handleOnClose} contentLabel="Pokemon Details" className="modal" overlayClassName="overlay">
            <div>
                <Card name={pokemonData.name} pokeImageUrl={pokemonData.sprites.front_default}></Card>
                <div>
                    <h3>Stats</h3>
                    <ul>
                        {pokemonData.stats.map((stat, index) => {
                            return <li key={index}>
                                <strong className="uppercase">{stat.stat.name}: </strong>
                                {stat.base_stat}
                            </li>
                        })}
                    </ul>
                </div>
                <div>
                    <h3>Abilities</h3>
                    <ul>
                        {pokemonData.abilities.map((ability, index) => {
                            return <li key={index}>{ability.ability.name}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h3>Characteristics</h3>
                    <p>
                        <strong>Height: </strong>
                        {pokemonData.height}
                    </p>
                    <p>
                        <strong>Weight: </strong>
                        {pokemonData.weight}
                    </p>
                </div>
            </div>
        </Modal>
    );
}
