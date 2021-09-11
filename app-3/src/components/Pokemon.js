import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {

    const [pokemonStats, setPokemonStats] = useState({});
    const { name } = props.match.params;

    const getPokemon = async (name) => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            console.log(data);
            setPokemonStats(data);
        } catch(err) {
          console.log(err);
        }
      }

    useEffect(() => {
        getPokemon(name);
        console.log(pokemonStats);
    }, []);


    return (
        <>
        {/* <h1>{pokemonStats.forms[0].name}</h1> */}
        <h2>Skills</h2>
        <ul>
        {/* {pokemonStats.abilities.map((ability) => {
                return ( <li>{ability.ability.name}</li> )
        })} */}
        </ul>
        <button><Link to='/'> BACK </Link> </button>
        </>
    )
}

export default Pokemon;