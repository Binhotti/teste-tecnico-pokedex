import React from 'react';
import { SearchContainer, SearchInput, SearchIcon } from './styles';

function SearchBar({ value, onChange, placeholder = "Buscar Pokémon..." }) {
    return (    
        <SearchContainer>
            <SearchIcon>🔍</SearchIcon>
            <SearchInput
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </SearchContainer>
    );
}

export default SearchBar;