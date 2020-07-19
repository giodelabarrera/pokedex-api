const pokedex = require('./data/pokedex.json')

function getSinglePokemon (idOrName) {
  return pokedex.find(pokemon => {
    const { id: originalId, name: { english: originalName } } = pokemon
    const id = originalId.toString()
    const name = originalName.toLowerCase()
    return idOrName === id || name.includes(idOrName)
  })
}

module.exports = { getSinglePokemon }
