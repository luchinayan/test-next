const Router = require('express')
const router = new Router()
const AverageNumberController = require('../controllers/averageNumberController')

router.post('/add', AverageNumberController.addNumber)
router.get('/result', AverageNumberController.getResult)

module.exports = router
