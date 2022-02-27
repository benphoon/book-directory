const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

// Import Data file
const library = require('./books.json');

// Establish instance of express app
const app = express();

// BodyParser takes the entire body portion of an incoming request stream and exposes it/makes it accessible via req.body
app.use(bodyParser.json());

//ROUTES
// Home
app.get('/', (req, res) => {
    res.send('Welcome to the book directory')
})

// Retrieve all books
app.get('/library', (req, res) => {
    res.json(library)
})

// Retrieve specific book
app.get('/library/:bookId', (req, res) => {
    const specificBook = library.book[req.params.bookId];
    res.json(specificBook)
})

// Connect to MongoDB database


// Listening on...
app.listen(3000);