const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const connectDb = require('./config/connectDb')
const errorHandler = require('./middleware/errorHandler')

connectDb()

app.use(express.json())
app.use(errorHandler)
app.listen(port, console.log(`Port is running on ${PORT}`))