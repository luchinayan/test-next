const Router = require('express')
const router = new Router()
const MessageBoardController = require('../controllers/messageBoardController')

router.post('/add', MessageBoardController.addMessage)

module.exports = router
