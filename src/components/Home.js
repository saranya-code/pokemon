import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [apiDataCount, setApiDataCount] = useState(0);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      setApiDataCount(response.data.results.length);
      setPokemonData(response.data.results.slice(dataCount, dataCount + 3));
    });
  }, [dataCount]);

  //   console.log(pokemonData);
  console.log(dataCount);

  return (
    <>
      <div className="col-12 d-flex p-4">
        {pokemonData &&
          pokemonData.map((pokemon) => <Pokemon name={pokemon.name} />)}
      </div>
      <div className="d-flex justify-content-between p-4">
        <button
          className="border-0 p-2"
          onClick={() => setDataCount(dataCount - 3)}
          disabled={dataCount === 0}
          data-testid="Prev"
        >
          Prev
        </button>
        <button
          className="border-0 p-2"
          onClick={() => setDataCount(dataCount + 3)}
          disabled={apiDataCount <= dataCount + 3 ? true : false}
          data-testid="Next"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Home;
