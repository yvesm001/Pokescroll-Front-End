// Copied pokemonCard component and edited to use with PokedexDetails page so that the next and previous buttons behave differently when at the pokedex

import { Link } from "react-router-dom";

export default function PokedexCard({ pokemon }) {
  return (
    <div className="pokemonCard" style={{ padding: "8px" }}>
      <Link
        className="text-decoration-none"
        to={"/PokedexDetails/" + pokemon.id}
      >
        <div
          className="card"
          style={{ width: "18rem", border: "4px solid #413016" }}
        >
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
