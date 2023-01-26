class MessageBoardController {
    messages = [{text: "Hello World", author: 'Node JS'}]

    addMessage=(req, res)=> {
        const message = req.body
        this.messages.push({text: message.text, author: message.author})
        res.json(this.messages)
    }
}

module.exports = new MessageBoardController()
