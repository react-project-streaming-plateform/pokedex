import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeListFiltered, setPokeListFiltered] = useState([]);

  async function getData() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
    console.log("res", res.data);
    setPokeList(res.data.results);
    setPokeListFiltered(res.data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleChange(e) {
    if (!e.target.value) {
      setPokeListFiltered(pokeList);
      return;
    }

    setPokeListFiltered(
      pokeList.filter((pokemon) => pokemon.name.includes(e.target.value))
    );
  }
  return (
    <div>
      <input onChange={handleChange} type="text" />
      {pokeListFiltered.map((pokemon, index) => {
        return (
          <p key={pokemon.name}>
            <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </p>
        );
      })}

    </div>
  )
}

export default Home