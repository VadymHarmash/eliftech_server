const eventModel = require('../models/eventModel.js')

const getEvents = (req, res) => {
    eventModel
        .find()
        .then((events) => {
            res.status(200).json(events)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error retrieving events', error: error })
        })
}

const addParticipant = (req, res) => {
    const { eventId } = req.params;
    const participant = req.body;

    eventModel
        .findByIdAndUpdate(
            eventId,
            { $push: { participants: participant } },
            { new: true }
        )
        .then((updatedEvent) => {
            if (!updatedEvent) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.status(200).json(updatedEvent);
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error adding participant', error: error });
        });
};

module.exports = { getEvents, addParticipant };