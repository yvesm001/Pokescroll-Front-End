// THIS COMPONENT IS EACH POKEMON RENDERED IN THE LIST POKEMON COMPONENT

import React from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  return (
    <div>
      <Link to={"/PokemonDetails/" + pokemon.id}>
        <img src={pokemon.official_artwork} />

        <div>
          <p>#{pokemon.id}</p>
          <h1>{pokemon.name}</h1>

          {/* Iterates through type and generates label for each */}
          <div>
            {pokemon.type.map((type) => {
              return (
                <p key={type} id={type.toLowerCase()}>
                  {type}
                </p>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
