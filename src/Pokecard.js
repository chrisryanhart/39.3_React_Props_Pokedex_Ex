import React from 'react';
import "./Pokecard.css"



const Pokecard = ({pokemon={id: 4, name: 'Charmander', type: 'fire', base_experience: 62}}) => {
    return (
        <div className="Pokecard">
            <div className="Pokecard-container" key={pokemon.id}>
                <p><b>{pokemon.name}</b></p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt=""/>    
                <p>Type: {pokemon.type}</p>    
                <p>EXP: {pokemon.base_experience}</p>    
            </div>
        </div>
    );
}

export default Pokecard;