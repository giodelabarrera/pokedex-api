const { getListPokemon } = require('../getListPokemon')
const { SORT_TYPES } = require('../types')

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

test('should order by A-Z', () => {
  const params = { sort: SORT_TYPES.aZ }
  const pokemonList = getListPokemon(params)
  const firstPokemon = pokemonList[0]
  expect(firstPokemon.name.english).toBe('Abomasnow')
})

test('should order by Z-A', () => {
  const params = { sort: SORT_TYPES.zA }
  const pokemonList = getListPokemon(params)
  const firstPokemon = pokemonList[0]
  expect(firstPokemon.name.english).toBe('Zygarde')
})

test('should order by lowest number', () => {
  const params = { sort: SORT_TYPES.lowestNumber }
  const pokemonList = getListPokemon(params)
  const firstPokemon = pokemonList[0]
  expect(firstPokemon.name.english).toBe('Bulbasaur')
})

test('should order by highest number', () => {
  const params = { sort: SORT_TYPES.highestNumber }
  const pokemonList = getListPokemon(params)
  const firstPokemon = pokemonList[0]
  expect(firstPokemon.name.english).toBe('Melmetal')
})
