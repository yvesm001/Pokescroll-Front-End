import React, { useState, useEffect } from "react";
import axios from "axios";
import NewPokedexEntry from "../components/NewPokedexEntry";
import PokemonCard from "../components/PokemonCard";

const MyPokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [party, setParty] = useState([]);
  const [messages, setMessages] = useState({}); 

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

    const fetchParty = async () => {
      try {
        const response = await axios.get(
          "https://pokemon-data.adaptable.app/party"
        );
        setParty(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
    fetchParty();
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
    if (party.length >= 6) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [pokemon.id]: "Your party is full! Remove a Pokémon before adding another.",
      }));
      return;
    }

    try {
      const response = await axios.post(
        "https://pokemon-data.adaptable.app/party",
        pokemon
      );
      setParty((prevParty) => [...prevParty, response.data]);
      setMessages((prevMessages) => ({
        ...prevMessages,
        [pokemon.id]: `${pokemon.name} was added to your party!`,
      }));
      setTimeout(() => {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [pokemon.id]: "",
        }));
      }, 3000); 
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
              {messages[pokemon.id] && (
                <div className="message">{messages[pokemon.id]}</div>
              )}
              <PokemonCard pokemon={pokemon} />
              <div className="d-flex justify-content-center gap-1">
                <button onClick={() => handleDeletePokemon(pokemon.id)}>
                  Delete
                </button>
                <button onClick={() => handleAddToParty(pokemon)}>
                  Add to Party
                </button>
              </div>
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
