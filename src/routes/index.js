const router = require('express').Router()

router.use('/pokemon', require('./pokemon'))

module.exports = router
