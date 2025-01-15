// THIS COMPONENT RENDERS THE POKEMONS DETAILS AFTER A CARD IS CLICKED

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function PokemonDetails() {
  const API_URL = "https://pokescroll-data.onrender.com/pokemon";

  const { pokemonId } = useParams();
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const playNotification = () => {
    const audio = new Audio("/pokemonSound.mp3");
    audio.play();
  };

  const navigate = useNavigate();

  const getCurrentPokemon = async () => {
    playNotification();
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
          className=" card pokemon-entry"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "auto",
            padding: "0",
            width: "25vw",
            height: "auto",
            border: "4px solid #413016",
            backgroundColor: "#ecdcc5",
          }}
        >
          <img
            style={{ width: "12rem" }}
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
            <h6
              style={{
                margin: "10px",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              {currentPokemon.description}
            </h6>
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
            <p style={{ marginBottom: "2px" }}>Cry:</p>
            <audio
              style={{
                border: "2px solid #413016",
                borderRadius: "21px",
                height: "30px",
                marginBottom: "10px",
              }}
              controls
              src={currentPokemon.sound}
            />
            <div className="btnDetails" style={{ marginBottom: "15px" }}>
              <button
                onClick={() => {
                  currentPokemon.id != 1
                    ? navigate(`/PokemonDetails/${currentPokemon.id - 1}`)
                    : navigate(`/PokemonDetails/151`);
                }}
                style={{ marginRight: "20px" }}
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
