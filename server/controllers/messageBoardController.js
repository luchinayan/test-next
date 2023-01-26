class MessageBoardController {
    messages = [{text: "Hello World", author: 'Node JS'}]

    addMessage=(req, res)=> {
        const message = req.body
        this.messages.unshift({text: message.text, author: message.author})
        res.json(this.messages)
    }
    getMessages=(req, res)=> {
        res.json(this.messages)
    }
}

module.exports = new MessageBoardController()
