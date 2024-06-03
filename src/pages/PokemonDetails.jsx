import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function PokemonDetails() {
  const API_URL = "https://pokemon-data.adaptable.app/pokemon";

  const { pokemonId } = useParams();
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const navigate = useNavigate();

  const getCurrentPokemon = async () => {
    try {
      const response = await axios.get(`${API_URL}/${pokemonId}`);
      setCurrentPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentPokemon();
  }, [pokemonId]);

  return (
    <div>
      <h1>Pokemon Details</h1>
    </div>
  );
}

export default PokemonDetails;
