import { getPokemonByNameId } from '../../src/js-foundation/06-promises';

describe('06-promises', () => {
  it('getPokemonByNameId should return a pokemon', async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonByNameId(pokemonId);

    expect(pokemonName).toBe('bulbasaur');
  });

  it('should return an error if pokemon does not exist', async () => {
    const pokemonId = 100000000;

    try {
      await getPokemonByNameId(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
