const pokedex = require('./data/pokedex.json')
const { SORT_TYPES } = require('./types.js')

const makeFilterByQuery = query => pokemon => {
  if (!query) return true
  const { id: originalId, name: { english: originalName } } = pokemon
  const id = originalId.toString()
  const name = originalName.toLowerCase()
  return query === id || name.includes(query)
}

const makeFilterByTypes = types => pokemon => {
  if (!types.length) return true
  const { type: originalTypes } = pokemon
  return types.every(type => originalTypes.includes(type))
}

const makeCombinedFilterPokemon = ({ query, types }) => pokemon => {
  const filterByQuery = makeFilterByQuery(query)
  const filterByTypes = makeFilterByTypes(types)
  return filterByQuery(pokemon) && filterByTypes(pokemon)
}

const sortListPokemon = (sortType, listPokemon) => {
  const listPokemonToOrder = [...listPokemon]
  switch (sortType) {
    case SORT_TYPES.lowestNumber: {
      listPokemonToOrder.sort((firstPokemon, secondPokemon) => firstPokemon.id > secondPokemon.id ? 1 : -1)
      return listPokemonToOrder
    }
    case SORT_TYPES.highestNumber: {
      listPokemonToOrder.sort((firstPokemon, secondPokemon) => firstPokemon.id < secondPokemon.id ? 1 : -1)
      return listPokemonToOrder
    }
    case SORT_TYPES.aZ: {
      listPokemonToOrder.sort((firstPokemon, secondPokemon) => firstPokemon.name.english > secondPokemon.name.english ? 1 : -1)
      return listPokemonToOrder
    }
    case SORT_TYPES.zA: {
      listPokemonToOrder.sort((firstPokemon, secondPokemon) => firstPokemon.name.english < secondPokemon.name.english ? 1 : -1)
      return listPokemonToOrder
    }
  }
}

function getListPokemon ({ query, types = [], sort = SORT_TYPES.lowestNumber, limit = 12, offset = 0 }) {
  const combinedFilterPokemon = makeCombinedFilterPokemon({ query, types })
  const filteredListPokemon = pokedex.filter(combinedFilterPokemon)
  const sortedListPokemon = sortListPokemon(sort, filteredListPokemon)
  return sortedListPokemon
}

module.exports = { getListPokemon }
