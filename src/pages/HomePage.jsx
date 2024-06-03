import React from "react";
import { Link } from "react-router-dom";
import ListPokemon from "../components/ListPokemon";
import Logo from "../assets/pokemon-logo.png";

function HomePage() {
  return (
    <div>
      <img
        className=" center logo"
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
      {/* <h1
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem",
        }}
      >
        Pokemon
      </h1> */}
      <ListPokemon />
    </div>
  );
}

export default HomePage;
