// THIS COMPONENT RETRIEVES ALL POKEMON FROM THE DATA AND CONDITIONALLY RENDERS A POKEMONCARD COMPONENT FOR EACH

import React, { useEffect } from "react";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

export default function ListPokemon() {
  const [pokemon, setPokemon] = useState(null);

  const API_URL = "https://pokemon-data.adaptable.app/pokemon";

  const getAllPokemon = async () => {
    try {
      const response = await axios.get(API_URL);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="pokemonList">
      {pokemon ? (
        pokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))
      ) : (
        <h1>Catching 'em all...</h1>
      )}
    </div>
  );
}
