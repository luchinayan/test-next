require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandlingMiddleware')
const ApiError = require("./error/ApiError");

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)
const start = (next) => {
    try {
        app.listen(PORT, () => {
            console.log('working on port', PORT)
        })

    } catch (e) {
        next(ApiError.internal(e))
    }
}

start()
