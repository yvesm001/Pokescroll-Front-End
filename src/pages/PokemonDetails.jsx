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
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Pokemon Details
      </h1>

      {currentPokemon ? (
        <div
          className="card"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "15rem" }}
            src={currentPokemon.official_artwork}
          />
          <div className="card-body">
            <h3>#{currentPokemon.id}</h3>
            <h2>{currentPokemon.name}</h2>
            <h4>{currentPokemon.category}</h4>
            <span
              className="name-type"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              {currentPokemon.type.map((type) => {
                return (
                  <p
                    className="rounded-pill"
                    style={{
                      color: "white",
                      padding: "8px",
                      display: "flex",
                    }}
                    key={type}
                    id={type.toLowerCase()}
                  >
                    {type}
                  </p>
                );
              })}
            </span>
            <h6>Heigth: {currentPokemon.height} m</h6>
            <h6>Weigth: {currentPokemon.weight} kg</h6>
            <h6>{currentPokemon.description}</h6>
            <br></br>
            <h6>
              {" "}
              Where to encounter:
              {currentPokemon.encounter_areas.map((area) => {
                return (
                  <li key={area} id={area.toLowerCase()}>
                    {area}
                  </li>
                );
              })}
            </h6>
            <br></br>
            <p>Cry:</p>
            <audio
              style={{ marginBottom: "10px" }}
              controls
              src={currentPokemon.sound}
            />
            <br></br>
            <div className="btnDetails">
              <button
                onClick={() => {
                  currentPokemon.id != 1
                    ? navigate(`/PokemonDetails/${currentPokemon.id - 1}`)
                    : navigate(`/PokemonDetails/151`);
                }}
              >
                {" "}
                Previous Pokemon{" "}
              </button>

              <button
                onClick={() => {
                  currentPokemon.id != 151
                    ? navigate(`/PokemonDetails/${currentPokemon.id + 1}`)
                    : navigate(`/PokemonDetails/1`);
                }}
              >
                {" "}
                Next Pokemon
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Catching 'em all...</p>
      )}
    </div>
  );
}

export default PokemonDetails;
