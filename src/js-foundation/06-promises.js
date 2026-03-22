const { httpClient } = require('../plugins');

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClient.get(url);
  // const resp = await fetch(url);
  // const pokemon = await resp.json();

  return pokemon.name;

  // return (
  //   fetch(url)
  //     .then((res) => res.json())
  //     // .then((res) => {
  //     //   throw new Error('Pokemon no existe');
  //     // })
  //     .then((pokemon) => pokemon.name)
  // );
};

module.exports = getPokemonById;
