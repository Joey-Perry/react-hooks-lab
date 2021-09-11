import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokemonList = () => {
    const [ pokemon, setPokemon ] = useState([]);

    const getChars = async () => {
        try {
          const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5');
          setPokemon(data.results);
        } catch(err) {
          console.log(err);
        }
      }

    useEffect(() => {
        getChars();
    }, [])

    return (
        pokemon.map(pokemon => <li><Link to={`/pokemon/${pokemon.name}`}> {pokemon.name} </Link> </li>)
    )
}

export default PokemonList;