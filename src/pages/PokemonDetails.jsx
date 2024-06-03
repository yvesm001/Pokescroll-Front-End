// THIS COMPONENT RENDERS THE POKEMONS DETAILS AFTER A CARD IS CLICKED

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

      {currentPokemon ? (
        <div>
          <img src={currentPokemon.official_artwork} />
          <p>#{currentPokemon.id}</p>
          <h3>{currentPokemon.name}</h3>
          <p>{currentPokemon.category}</p>

          {currentPokemon.type.map((type) => {
            return (
              <p key={type} id={type.toLowerCase()}>
                {type}
              </p>
            );
          })}

          <p>{currentPokemon.height} m</p>
          <p>{currentPokemon.weight} kg</p>
          <p>{currentPokemon.description}</p>

          <p>
            {" "}
            Where to encounter:
            {currentPokemon.encounter_areas.map((area) => {
              return (
                <li key={area} id={area.toLowerCase()}>
                  {area}
                </li>
              );
            })}
          </p>

          <audio controls src={currentPokemon.sound} />

          <button
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            Back to Home{" "}
          </button>

          <button
            onClick={() => {
              navigate(`/PokemonDetails/${currentPokemon.id + 1}`);
            }}
          >
            {" "}
            Next Pokemon
          </button>

          <button
            onClick={() => {
              console.log(currentPokemon.name);
            }}
            type="button"
            data-id={currentPokemon.id}
          >
            Add to Party{" "}
          </button>
        </div>
      ) : (
        <p>Catching 'em all...</p>
      )}
    </div>
  );
}

export default PokemonDetails;
