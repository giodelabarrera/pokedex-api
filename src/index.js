const cors = require('cors')
const express = require('express')
// const yup = require('yup')

// const { retrieveSharedSession } = require('./retrieve-shared-session')

const app = express()
const serverPort = process.env.PORT || 3030

app.use(cors())

app.get('/pokemon', async function (req, res) {
  // - query?: string (nombre o numero)
  // - type?: string[] (electrico, bicho, volador) = []
  // - sort?: string (a-z, z-a, numero superior, numero inferior) = numero superior
  // - limit?: number (numero de resultados a traer) = 25
  // - offset?: number (indice de paginacion) = 0

  // req.query -> {list: "20"} || {}

  res.status(200).json({ text: 'list' })
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
