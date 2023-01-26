const ApiError = require("../error/ApiError");

class MessageBoardController {
    messages = [{text: "Hello World", author: 'Node JS'}]

    addMessage = (req, res, next) => {
        try {
            const message = req.body
            this.messages.unshift({text: message.text, author: message.author})
            res.json(this.messages)
        } catch (e) {
            next(ApiError.BadRequest(e))
        }

    }
    getMessages = (req, res, next) => {
        try {
            res.json(this.messages)
        } catch (e) {
            next(ApiError.BadRequest(e))
        }
    }
}

module.exports = new MessageBoardController()
