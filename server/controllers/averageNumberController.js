const ApiError = require('../error/ApiError')

class AverageNumberController {
    numbers = []
    result = []
    calculate = () => {
        return {
            lastAdded: this.numbers[this.numbers.length - 1],
            prevNumber: this.numbers[this.numbers.length - 2],
            average: (this.numbers[this.numbers.length - 1] + this.numbers[this.numbers.length - 2]) / 2,
        }
    }

    addNumber = (req, res, next) => {
        try {
            let number = req.body.number
            if (!number) {
                next(ApiError.BadRequest('number not received'))
            }

            this.numbers.push(number)

            if (this.numbers.length === 1) {
                next(ApiError.BadRequest('add one more number to calculate average between 2 numbers'))
            } else {
                this.result.unshift(this.calculate())
                res.json(this.calculate())
            }
        } catch (e) {
            next(ApiError.BadRequest(e))
        }


    }

    getResult = (req, res, next) => {
        try {
            res.json(this.result)

        } catch (e) {
            next(ApiError.BadRequest(e))

        }
    }
}

module.exports = new AverageNumberController()
