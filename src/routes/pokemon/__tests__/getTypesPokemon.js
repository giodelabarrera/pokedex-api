const { getTypesPokemon } = require('../getTypesPokemon')

test('should return the types', () => {
  const types = getTypesPokemon()
  expect(types).toHaveLength(18)
})
