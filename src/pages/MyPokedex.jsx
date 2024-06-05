import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import NewPokedexEntry from "../components/NewPokedexEntry";
import PokemonCard from "../components/PokemonCard";
import { useNavigate } from "react-router-dom";
import PokedexCard from "../components/PokedexCard";

const MyPokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [party, setParty] = useState([]);
  const [messages, setMessages] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const playNotification = () => {
    const audio = new Audio("/pokemonSound.wav");
    audio.play();
  };

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
      playNotification();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToParty = async (pokemon) => {
    if (party.length >= 6) {
      setModalMessage(
        "Your party is full! Remove a Pokémon before adding another."
      );
      setIsError(true);
      playNotification();
      setModalIsOpen(true);
      return;
    }

    try {
      const newPokemon = { ...pokemon, id: `${pokemon.id}-${Date.now()}` };
      const response = await axios.post(
        "https://pokemon-data.adaptable.app/party",
        newPokemon
      );
      setParty((prevParty) => [...prevParty, response.data]);
      setModalMessage(`${pokemon.name} was added to your party!`);
      setIsError(false);
      setModalIsOpen(true);
      playNotification();
      setTimeout(() => {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [pokemon.id]: "",
        }));
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "3rem",
        gap: "20px",
      }}
    >
      <h1>My Pokédex</h1>
      <NewPokedexEntry onAdd={handleAddPokemon} />
      <div className="pokemonList">
        {pokemon.length ? (
          pokemon.map((pokemon) => (
            <div key={pokemon.id}>
              <PokedexCard pokemon={pokemon} />
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={`Modal ${isError ? "error-modal" : "success-modal"}`}
        overlayClassName="Overlay"
      >
        <img
          className="party-ball"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
          alt="Poké Ball"
        />
        <h2>{isError ? "Error" : "Success"}</h2>
        <p>{modalMessage}</p>
        {isError && (
          <div className="d-flex justify-content-evenly">
            <button onClick={closeModal}>Close</button>
            <button onClick={() => navigate("/MyParty")}>Go to Party</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MyPokedex;
