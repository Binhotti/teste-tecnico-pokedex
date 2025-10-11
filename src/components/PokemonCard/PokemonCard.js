import React from "react";
import { Card } from "./styles";

function PokemonCard({ pokemon}) {
    return (
        <Card>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
        </Card>
    );
}

export default PokemonCard;