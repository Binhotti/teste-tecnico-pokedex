import React from "react";
import { Card } from "./styles";


function PokemonCard({ pokemon, onClick }) {
    return (
        <Card onClick={onClick} role="button" tabIndex={0}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <div className="types">
                {pokemon.types.map((t) => (
                    <span key={t.type.name} className="type">
                        {t.type.name}
                    </span>
                ))}
            </div>
        </Card>
    );
}

export default PokemonCard;