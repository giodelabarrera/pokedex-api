const pokedex = require('./data/pokedex.json')
const { SORT_TYPES } = require('./types.js')

const makeFilterByQuery = (query) => (pokemon) => {
  if (!query) return true
  const {
    id: originalId,
    name: { english: originalName }
  } = pokemon
  const id = originalId.toString()
  const name = originalName.toLowerCase()
  return query === id || name.includes(query)
}

const makeFilterByTypes = (types) => (pokemon) => {
  if (!types.length) return true
  const { type: originalTypes } = pokemon
  return types.every((type) => originalTypes.includes(type))
}

const makeCombinedFilterPokemon = ({ query, types }) => (pokemon) => {
  const filterByQuery = makeFilterByQuery(query)
  const filterByTypes = makeFilterByTypes(types)
  return filterByQuery(pokemon) && filterByTypes(pokemon)
}

function sortListPokemon (sortType, listPokemon) {
  const newListPokemon = [...listPokemon]
  switch (sortType) {
    case SORT_TYPES.lowestNumber: {
      newListPokemon.sort((first, second) => (first.id > second.id ? 1 : -1))
      return newListPokemon
    }
    case SORT_TYPES.highestNumber: {
      newListPokemon.sort((first, second) => (first.id < second.id ? 1 : -1))
      return newListPokemon
    }
    case SORT_TYPES.aZ: {
      newListPokemon.sort((first, second) =>
        first.name.english > second.name.english ? 1 : -1
      )
      return newListPokemon
    }
    case SORT_TYPES.zA: {
      newListPokemon.sort((first, second) =>
        first.name.english < second.name.english ? 1 : -1
      )
      return newListPokemon
    }
  }
}

function paginate (list, limit, offset) {
  return list.slice(offset * limit, (offset + 1) * limit)
}

function getListPokemon ({
  query,
  types = [],
  sort = SORT_TYPES.lowestNumber,
  limit = 12,
  offset = 0
}) {
  const combinedFilterPokemon = makeCombinedFilterPokemon({ query, types })
  const filteredListPokemon = pokedex.filter(combinedFilterPokemon)
  const sortedListPokemon = sortListPokemon(sort, filteredListPokemon)
  // eslint-disable-next-line
  debugger;

  return {
    total: sortedListPokemon.length,
    results: paginate(sortedListPokemon, limit, offset)
  }
}

module.exports = { getListPokemon }
