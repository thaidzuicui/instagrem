const express = require('express')
const cors = require('cors')
const path = require('path')
const route = require('./routes')
const db = require('./config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Connect to db
db.connect()

// Static files (public)
app.use(express.static(path.join(__dirname, 'public')))

// Routes init
route(app)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
