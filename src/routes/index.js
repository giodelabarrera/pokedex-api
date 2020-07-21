const router = require('express').Router()

router.use('/pokemon', require('./pokemon'))
router.use('/types', require('./type'))

module.exports = router
