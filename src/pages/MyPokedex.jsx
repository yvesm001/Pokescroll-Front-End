import React, { useState, useEffect } from "react";
import axios from "axios";
import NewPokedexEntry from "../components/NewPokedexEntry";
import PokemonCard from "../components/PokemonCard";

const MyPokedex = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokemon-data.adaptable.app/pokedex"
        );
        setPokemon(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
  }, []);

  const handleAddPokemon = (newPokemon) => {
    setPokemon((prevPokemon) => [...prevPokemon, newPokemon]);
  };

  const handleDeletePokemon = async (id) => {
    try {
      await axios.delete(`https://pokemon-data.adaptable.app/pokedex/${id}`);
      setPokemon((prevPokemon) =>
        prevPokemon.filter((pokemon) => pokemon.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewPokedexEntry from '../components/NewPokedexEntry';
import PokemonCard from '../components/PokemonCard';

const MyPokedex = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokemon-data.adaptable.app/pokedex');
          setPokemon(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
  }, []);

  const handleAddPokemon = (newPokemon) => {
    setPokemon((prevPokemon) => [...prevPokemon, newPokemon]);
  };

  const handleDeletePokemon = async (id) => {
    try {
      await axios.delete(`https://pokemon-data.adaptable.app/pokedex/${id}`);
      setPokemon((prevPokemon) => prevPokemon.filter((pokemon) => pokemon.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NewPokedexEntry onAdd={handleAddPokemon} />

      <div className="pokedex">
        {pokemon ? (
          pokemon.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-entry">
              <PokemonCard pokemon={pokemon} />
              <button onClick={() => handleDeletePokemon(pokemon.id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No Pokémon</p>
        )}
      </div>
      <NewPokedexEntry onAdd={handleAddPokemon} />

      <div className="pokedex">
        {pokemon ? (
          pokemon.map((pokemon) => (
            
            <div key={pokemon.id} className="pokemon-entry">
            <PokemonCard pokemon={pokemon} />
            <button onClick={() => handleDeletePokemon(pokemon.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No Pokémon</p>
        )}
      </div>
    </div>
  );
};

export default MyPokedex;