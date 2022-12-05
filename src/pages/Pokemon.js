import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const Pokemon = () => {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log("res", res.data);
    setPokemon(res.data);
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <p>Nom : {pokemon?.name}</p>
      <p>Type : {pokemon?.types[0]?.type.name}</p>
      <img src={pokemon?.sprites?.front_default} />
    </div>
  );
};

export default Pokemon;
