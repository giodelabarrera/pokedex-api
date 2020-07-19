const { getSinglePokemon } = require('../getSinglePokemon')

test('should find by id', () => {
  const idOrName = '25'
  const pokemon = getSinglePokemon(idOrName)
  expect(pokemon).toBeDefined()
})

test('should find by name', () => {
  const idOrName = 'pikachu'
  const pokemon = getSinglePokemon(idOrName)
  expect(pokemon).toBeDefined()
})
