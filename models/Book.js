const mongoose = require('mongoose');

// Schemas describe how the data looks
const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Books', BookSchema);