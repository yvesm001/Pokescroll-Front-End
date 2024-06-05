// Copied pokemonDetails component and added functions so that the next and previous buttons behave differently when at the pokedex

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PokedexDetails() {
  const API_URL = "https://pokemon-data.adaptable.app/pokedex";

  const { pokemonId } = useParams();
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();

  const playNotification = () => {
    const audio = new Audio("/pokemonSound.wav");
    audio.play();
  };

  const getCurrentPokemon = async () => {
    playNotification();
    try {
      const response = await axios.get(`${API_URL}/${pokemonId}`);
      setCurrentPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonList = async () => {
    try {
      const response = await axios.get(API_URL);
      setPokemonList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  useEffect(() => {
    getCurrentPokemon();
  }, [pokemonId]);

  //Used these functions so that when you go back from the first entry it shows the last entry and the index does not become negative
  const handlePrevious = () => {
    const currentIndex = pokemonList.findIndex(
      (p) => p.id === parseInt(pokemonId)
    );
    const previousIndex =
      (currentIndex - 1 + pokemonList.length) % pokemonList.length;
    navigate(`/PokedexDetails/${pokemonList[previousIndex].id}`);
  };

  const handleNext = () => {
    const currentIndex = pokemonList.findIndex(
      (p) => p.id === parseInt(pokemonId)
    );
    const nextIndex = (currentIndex + 1) % pokemonList.length;
    navigate(`/PokedexDetails/${pokemonList[nextIndex].id}`);
  };

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Pokedex Details
      </h1>

      {currentPokemon ? (
        <div
          className="card"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            padding: "0",
            width: "25vw",
            height: "auto",
            border: "4px solid #413016",
          }}
        >
          <img
            style={{ width: "12rem" }}
            src={currentPokemon.official_artwork}
            alt={currentPokemon.name}
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
              {currentPokemon.type.map((type) => (
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
              ))}
            </span>
            <h6>Height: {currentPokemon.height} m</h6>
            <h6>Weight: {currentPokemon.weight} kg</h6>
            <h6 style={{ margin: "5px" }}>{currentPokemon.description}</h6>
            <h6>
              Where to encounter:
              {currentPokemon.encounter_areas.map((area) => (
                <li key={area} id={area.toLowerCase()}>
                  {area}
                </li>
              ))}
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
              <button onClick={handlePrevious} style={{ marginRight: "20px" }}>
                Previous Pokemon
              </button>
              <button onClick={handleNext}>Next Pokemon</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Catching 'em all...</p>
      )}
    </div>
  );
}

export default PokedexDetails;
