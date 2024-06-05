import React, { useState } from "react";
import ListPokemon from "../components/ListPokemon";
import Logo from "../assets/pokemon-logo.png";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <img
        className="center logo"
        src={Logo}
        alt="Pokemon logo"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          marginTop: "20px",
          width: "30%",
        }}
      />
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          marginTop: "20px",
          width: "30%",
          padding: "10px",
          fontSize: "16px",
        }}
      />
      <ListPokemon searchQuery={searchQuery} />
    </div>
  );
}

export default HomePage;
