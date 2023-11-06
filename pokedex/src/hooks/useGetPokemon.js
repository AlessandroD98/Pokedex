import { useEffect, useState } from "react";

export const useGetPokemon = (query) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [infoPokemon, setInfoPokemon] = useState({});

  const fechData = async () => {
    try {
      const res = await fetch(query);
      const data = await res.json();
      setInfoPokemon(data);
      console.log(data);
    } catch (e) {
      setError("Something went wrong Error:" + e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fechData();
  }, []);
  return [loading, error, infoPokemon];
};
