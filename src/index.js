const cors = require('cors')
const express = require('express')
const yup = require('yup')

const { getListPokemon } = require('./getListPokemon')

const app = express()
const serverPort = process.env.PORT || 3030

app.use(cors())

const SORT_TYPES = {
  lowestNumber: 'lowest_number',
  highestNumber: 'highest_number',
  aZ: 'a_z',
  zA: 'z_a'
}

app.get('/pokemon', async function (req, res) {
  const { query, types, sort = SORT_TYPES.lowestNumber, limit = 12, offset = 0 } = req.query

  // validate
  const schema = yup.object().shape({
    query: yup.string(),
    types: yup.array(), // TODO: enum of types
    sort: yup.string(yup.mixed().oneOf(Object.values(SORT_TYPES))),
    limit: yup.number().positive(),
    offset: yup.number().min(0)
  })
  try {
    await schema.validate({ query, types, sort, limit, offset }, { abortEarly: false })
  } catch (error) {
    const { errors, message } = error
    return res.status(400).json({ errors, message })
  }

  const params = { query, types, sort, limit, offset }
  try {
    const pokemonList = await getListPokemon(params)
    return res.status(200).json(pokemonList)
  } catch (error) {
    const { message } = error
    return res.status(500).json({ message })
  }

  // - query?: string (nombre o numero)
  // - type?: string[] (electrico, bicho, volador) = []
  // - sort?: string (a-z, z-a, numero superior, numero inferior) = numero superior
  // - limit?: number (numero de resultados a traer) = 12
  // - offset?: number (indice de paginacion) = 0
})

app.get('/pokemon/:idOrName', async function (req, res) {
  // req.params -> {idOrName: "pikachu"}

  // eslint-disable-next-line
  debugger
  res.status(200).json({ text: 'single' })
})

app.listen(serverPort, function (err) {
  if (err) throw err
  console.log(`> Running on ${serverPort}.`)
})
