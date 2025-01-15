import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

export default function ListPokemon({ searchQuery }) {
  const [pokemon, setPokemon] = useState(null);

  const API_URL = "https://pokescroll-data.onrender.com/pokemon";

  const getAllPokemon = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("This is our server response+++++_>", response);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  const filteredPokemon = pokemon
    ? pokemon.filter((p) =>
        p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="pokemonList">
      {pokemon ? (
        filteredPokemon.map((pokemon) => (
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
