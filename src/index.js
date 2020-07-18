const cors = require('cors')
const express = require('express')

const app = express()
const serverPort = process.env.PORT || 3030

app.use(cors())
app.use(require('./routes'))
app.listen(serverPort, function (err) {
  if (err) throw err
  console.log(`> Running on ${serverPort}.`)
})
