const { getListPokemon } = require('../getListPokemon')

test('should find by name as query', () => {
  const params = { query: 'pikachu' }
  const pokemonList = getListPokemon(params)
  expect(pokemonList).toHaveLength(1)
})

test('should find by name as query', () => {
  const params = { query: '1' }
  const pokemonList = getListPokemon(params)
  expect(pokemonList).toHaveLength(1)
})

test('should find by single type', () => {
  const params = { types: ['Dragon'] }
  const pokemonList = getListPokemon(params)
  expect(pokemonList).toHaveLength(45)
})

test('should find more than one type', () => {
  const params = { types: ['Fire', 'Flying'] }
  const pokemonList = getListPokemon(params)
  expect(pokemonList).toHaveLength(6)
})
