const Router = require('express')
const router = new Router()
const messageRouter = require('./messageBoard')
const averageNumber = require('./averageNumber')

router.use('/message', messageRouter)
router.use('/number', averageNumber)

module.exports = router
