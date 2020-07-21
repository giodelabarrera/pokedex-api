const yup = require('yup')
const router = require('express').Router()

const { SORT_TYPES } = require('./types.js')
const { getListPokemon } = require('./getListPokemon.js')
const { getSinglePokemon } = require('./getSinglePokemon.js')

router.get('/', async function (req, res) {
  const { query, types, sort, limit, offset } = req.query

  // validate
  const schema = yup.object().shape({
    query: yup.string(),
    types: yup.array(), // TODO: enum of types
    sort: yup.string(yup.mixed().oneOf(Object.values(SORT_TYPES))),
    limit: yup.number().positive(),
    offset: yup.number().min(0)
  })
  try {
    await schema.validate(
      { query, types, sort, limit, offset },
      { abortEarly: false }
    )
  } catch (error) {
    const { errors, message } = error
    return res.status(400).json({ errors, message })
  }

  const params = { query, types, sort }
  if (typeof limit !== 'undefined') params.limit = Number(limit)
  if (typeof offset !== 'undefined') params.offset = Number(offset)
  try {
    const pokemonList = getListPokemon(params)
    return res.status(200).json(pokemonList)
  } catch (error) {
    const { message } = error
    return res.status(500).json({ message })
  }
})

router.get('/:idOrName', async function (req, res) {
  const { idOrName } = req.params

  // validate
  const schema = yup.object().shape({
    idOrName: yup.string().required()
  })
  try {
    await schema.validate({ idOrName }, { abortEarly: false })
  } catch (error) {
    const { errors, message } = error
    return res.status(400).json({ errors, message })
  }

  try {
    const pokemon = getSinglePokemon(idOrName)
    if (!pokemon) res.status(404).json(null)
    return res.status(200).json(pokemon)
  } catch (error) {
    const { message } = error
    return res.status(500).json({ message })
  }
})

module.exports = router
