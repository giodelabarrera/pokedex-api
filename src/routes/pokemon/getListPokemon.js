const data = require('./data.json')
const { SORT_TYPES } = require('./types.js')

function getListPokemon ({ query, types, sort = SORT_TYPES.lowestNumber, limit = 12, offset = 0 }) {
  // eslint-disable-next-line
  const single = data[0]
  // eslint-disable-next-line
  debugger
}

module.exports = { getListPokemon }
