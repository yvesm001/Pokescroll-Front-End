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

  const handleAddToParty = async (pokemon) => {
    try {
      const response = await axios.post(
        "https://pokemon-data.adaptable.app/party",
        pokemon
      );
      console.log("Added to party:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NewPokedexEntry onAdd={handleAddPokemon} />
      <h1>My Pokédex</h1>
      <div className="pokemonList">
        {pokemon.length ? (
          pokemon.map((pokemon) => (
            <div key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
              <button onClick={() => handleDeletePokemon(pokemon.id)}>
                Delete
              </button>
              <button onClick={() => handleAddToParty(pokemon)}>
                Add to Party
              </button>
            </div>
          ))
        ) : (
          <p>No Pokédex entries</p>
        )}
      </div>
    </div>
  );
};

export default MyPokedex;
