const router = require('express').Router()

const { getListType } = require('./getListType.js')

router.get('/', async function (req, res) {
  try {
    const typeList = getListType()
    return res.status(200).json(typeList)
  } catch (error) {
    const { message } = error
    return res.status(500).json({ message })
  }
})

module.exports = router
