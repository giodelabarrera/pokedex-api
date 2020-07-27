const cors = require('cors')
const fs = require('fs')
const https = require('https')
const express = require('express')

const app = express()
const serverPort = process.env.PORT || 443

const router = express.Router()
router.use('/pokemon', require('./pokemon'))
router.use('/type', require('./type'))

app.use(cors())
app.use(router)

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
  .listen(serverPort, function () {
    console.log(`> Running on ${serverPort}.`)
  })
