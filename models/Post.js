const mongoose = require('mongoose');

// Schemas describe how the data looks
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Posts', PostSchema);