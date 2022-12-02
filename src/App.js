import axios from "axios";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
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
    <div className="App">
      <input onChange={handleChange} type="text" />
      {pokeListFiltered.map((pokemon) => {
        return <p key={pokemon.name}>{pokemon.name}</p>;
      })}
    </div>
  );
}

export default App;
