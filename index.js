require('dotenv').config()

const express = require('express')
const app = express()
const eventController = require('./controllers/eventController')
const connectDB = require('./database')

const PORT = process.env.PORT || 5000
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

connectDB()

app.get('/events', eventController.getEvents)
app.post('/events/:eventId/participants', eventController.addParticipant);

app.listen(PORT, (err) => err ? console.log(err) : console.log(`Listening port ${PORT}`))