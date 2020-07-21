const { getListType } = require('../getListType')

test('should return the types', () => {
  const types = getListType()
  expect(types).toHaveLength(18)
})
