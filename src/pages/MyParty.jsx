import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function MyParty() {
  const [party, setParty] = useState([]);

  const getParty = async () => {
    try {
      const response = await axios.get(
        "https://pokemon-data.adaptable.app/party"
      );
      setParty(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParty();
  }, []);

  const handleDeletePokemon = async (id) => {
    try {
      await axios.delete(`https://pokemon-data.adaptable.app/party/${id}`);
      setParty((prevPokemon) =>
        prevPokemon.filter((pokemon) => pokemon.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const handleEditPokemon = async (id) => {
  //   try {
  //     await axios.
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div>
      <h1>My Party Page</h1>
      <ul className="list-group">
        {party.length ? (
          party.map((pokemon) => (
            <li key={pokemon.id} className="list-group-item">
              <div className="pokemon-entry">
                <div className="pokemon-info">
                  <h3 className="pokemon-name">{pokemon.name}</h3>
                  <img
                    src={pokemon.official_artwork}
                    alt={pokemon.name}
                    className="pokemon-image"
                  />
                </div>
                <ul className="move-list">
                  <h3>Moves</h3>
                  {pokemon.learnable_moves.slice(0, 4).map((move, index) => (
                    <li key={index} className="move">
                      {move}
                    </li>
                  ))}
                </ul>
                <div className="d-flex flex-column gap-1">
                  <button>Edit</button>
                  <button onClick={() => handleDeletePokemon(pokemon.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>No Pokémon in party</p>
        )}
      </ul>
    </div>
  );
}

export default MyParty;
