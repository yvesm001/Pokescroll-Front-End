import React from "react";
import { Link } from "react-router-dom";
import ListPokemon from "../components/ListPokemon";

function HomePage() {
  return (
    <div>
      <h1> Home Page</h1>
      <ListPokemon />
    </div>
  );
}

export default HomePage;
