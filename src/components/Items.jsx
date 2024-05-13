import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Items() {
  const url = 'https://pokeapi.co/api/v2/pokemon/eevee';

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLoading(true);
        console.log(response.data);
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Data from the API</h2>
          <p>Pokemon ID: {pokemon.id}</p>
          <p>Name: {pokemon.name}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
}
