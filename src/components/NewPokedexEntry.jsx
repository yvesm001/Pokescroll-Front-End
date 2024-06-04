import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const NewPokedexEntry = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const playNotification = () => {
    const audio = new Audio("/pokemonSound.wav");
    audio.play();
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokemon-data.adaptable.app/pokemon"
        );
        setPokemonData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const matchedPokemon = pokemonData.find(
        (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
      );
      playNotification();
      if (matchedPokemon) {
        const postResponse = await axios.post(
          "https://pokemon-data.adaptable.app/pokedex",
          matchedPokemon
        );
        onAdd(postResponse.data);
        setName("");
        setSuggestions([]);
      } else {
        setError("No matching Pokémon found.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value) {
      const filteredSuggestions = pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setName(suggestion.name);
    setSuggestions([]);
  };

  return (
    <div className="new-pokedex-entry">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Pokémon name"
          value={name}
          onChange={handleInputChange}
          required
        />
        <button type="submit">
          Click to Add
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{
                    border: "1px solid black",
                  }}
                >
                  #{suggestion.id} {suggestion.name}{" "}
                  <img
                    src={suggestion.official_artwork}
                    style={{ height: "10vh" }}
                  />
                </li>
              ))}
            </ul>
          )}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default NewPokedexEntry;
