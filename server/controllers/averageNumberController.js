const ApiError = require('../error/ApiError')

class AverageNumberController {
    numbers = []
    result = []
    calculate = () => {
        return {
            prevNumber: this.numbers[this.numbers.length - 1],
            lastAdded: this.numbers[this.numbers.length - 2],
            average: (this.numbers[this.numbers.length - 1] + this.numbers[this.numbers.length - 2]) / 2,
        }
    }

    addNumber = (req, res, next) => {
        let number = req.body.number
        if (!number) {
            next(ApiError.BadRequest('number not received'))
        }

        this.numbers.push(number)

        if (this.numbers.length === 1) {
            next(ApiError.BadRequest('add one more number'))
        } else {
            this.result.push(this.calculate())
            res.json(this.calculate())
        }

    }

    getResult = (req, res) => {
        res.json(this.result)
    }
}

module.exports = new AverageNumberController()
