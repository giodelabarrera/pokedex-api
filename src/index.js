const cors = require('cors')
const express = require('express')

const app = express()
const serverPort = process.env.PORT || 3030

const router = express.Router()
router.use('/pokemon', require('./pokemon'))
router.use('/types', require('./type'))

app.use(cors())
app.use(router)
app.listen(serverPort, function (err) {
  if (err) throw err
  console.log(`> Running on ${serverPort}.`)
})
