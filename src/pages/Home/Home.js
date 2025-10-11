import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";

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

        setPokemons((prev) => [...prev, ...pokemonDetails]);
    }

        fetchPokemons();
    }, [offset]);

    return (
        <div style={{ background: themeStyles.background, color: themeStyles.text }}>
        <ThemeToggler />
        <h1>Pokedex</h1>
        <div>
            {pokemons.map((poke) => (
                <Link key={poke.name} to={`/pokemon/${poke.name}`}>
                    <PokemonCard pokemon={poke} />
                </Link>
            ))}
        </div>
        <button onClick={() => setOffset((prev) => prev + 10)}>Carregar mais</button>
        </div>
    )

}

export default Home;