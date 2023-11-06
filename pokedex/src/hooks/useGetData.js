import { useEffect, useState } from "react";

export const useGetData = (offset) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
      const data = await res.json();
      setPokemons(data.results);
      setLoading(false);
      //   console.log(data)
    } catch (e) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pokemons]);

  return [loading, error, pokemons];
};
