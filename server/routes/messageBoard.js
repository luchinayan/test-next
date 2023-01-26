const Router = require('express')
const router = new Router()
const MessageBoardController = require('../controllers/messageBoardController')

router.post('/add', MessageBoardController.addMessage)
router.get('/getMessages', MessageBoardController.getMessages)

module.exports = router
