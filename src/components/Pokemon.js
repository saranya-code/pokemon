import React, { useState, useEffect } from "react";
import axios from "axios";

function Pokemon(props) {
  const { name } = props;
  const [pokemonDetails, setPokemonDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => setPokemonDetails(response.data));
  }, [name]);

  // console.log(pokemonDetails)

  return (
    <div className="col-4 border p-0 m-1 pokemon-card shadow">
      <div className="d-flex justify-content-between border-bottom p-2 pokemon-card-header">
        <div>{name}</div>
        {pokemonDetails && <div>ID: {pokemonDetails.id}</div>}
      </div>
      <div className="p-4">
        {pokemonDetails && (
          <img
            src={pokemonDetails.sprites.front_default}
            width="100%"
            height="100%"
            alt={name}
          />
        )}
      </div>
    </div>
  );
}

export default Pokemon;
