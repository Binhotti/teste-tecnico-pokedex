import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const { themeStyle } = useTheme();

    useEffect(() => {
        async function fetchPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemon(data);
        }
        fetchPokemon();
    }, [name]);

    if (!pokemon) return <p>Loading...</p>;

    return (
        <div style={{background: themeStyle.background, color: themeStyle.text}}>
            <Link to="/">Voltar</Link>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>Tipo:</h2>
            <ul>
                {pokemon.types.map((t) => (
                    <li key={t.type.name}>{t.type.name}</li>
                ))}
            </ul>

            <h2>Habilidades:</h2>
            <ul>
                {pokemon.abilities.map((a) => (
                    <li key={a.ability.name}>{a.ability.name}</li>
                ))}
            </ul>

            <h2>Movimentos:</h2>
            <ul>
                {pokemon.moves.slice(0, 10).map((m) => (
                    <li key={m.move.name}>{m.move.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonDetail;