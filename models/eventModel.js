const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    organizer: String,
    participants: [{
        name: String,
        email: String,
        dateOfBirth: Date,
        whereHeared: String
    }]
})

const eventModel = mongoose.model('Event', eventSchema)
module.exports = eventModel