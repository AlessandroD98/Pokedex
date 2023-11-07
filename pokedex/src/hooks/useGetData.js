import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { savePokemons } from "../features/pokemonSlice";

export const useGetData = (offset) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const [pokemons, setPokemons] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
      const data = await res.json();
      dispatch(savePokemons(data.results));
      // setPokemons(data.results);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return [loading, error];
};
