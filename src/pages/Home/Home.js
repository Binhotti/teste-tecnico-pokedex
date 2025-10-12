import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";
import { Title } from "../../pages/PokemonDetail/styles";

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const { themeStyles } = useTheme();
    
    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);

            const data = await response.json();

            const pokemonDetails = await Promise.all(
                data.results.map(async (p) => {
                    const response = await fetch(p.url);
                    return await response.json();
                })
            );

            setPokemons((prev) => {
                const existingIds = prev.map(p => p.id);
                const newPokemons = pokemonDetails.filter(p => !existingIds.includes(p.id));
                return [...prev, ...newPokemons];
            });
        }

        fetchPokemons();
    }, [offset]);

    return (
        <div style={{ background: themeStyles.background, color: themeStyles.text }}>
        <ThemeToggler />
        <Title>Pokedex</Title>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center', padding: 20 }}>
            {pokemons.map((poke, index) => (
                <Link
                    key={`${poke.id}-${poke.name}-${index}`}
                    to={`/pokemon/${poke.name}`}
                    style={{ display: "inline-block", textDecoration: "none" }}
                >
                    <PokemonCard pokemon={poke} />
                </Link>
            ))}
        </div>
        <button className="btn-load-more" onClick={() => setOffset((prev) => prev + 10)}>
            ⚡ Carregar mais Pokémon
        </button>
        </div>
    )

}

export default Home;