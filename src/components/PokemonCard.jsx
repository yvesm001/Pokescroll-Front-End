// THIS COMPONENT IS EACH POKEMON RENDERED IN THE LIST POKEMON COMPONENT

import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="pokemonCard" style={{ padding: "8px" }}>
      <Link
        className="text-decoration-none"
        to={"/PokemonDetails/" + pokemon.id}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img
            to={"/PokemonDetails/:pokemonId"}
            src={pokemon.official_artwork}
          />
          <div className="card-body">
            <p>#{pokemon.id}</p>
            <h1>{pokemon.name}</h1>
            <Link to={"/PokemonDetails/" + pokemon.id} />
            <span
              className="name-type"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              {pokemon.type.map((type) => {
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
          </div>
        </div>
      </Link>
    </div>
  );
}
