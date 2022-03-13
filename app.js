const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

// Establish instance of express app
const app = express();

// BodyParser takes the entire body portion of an incoming request stream and exposes it/makes it accessible via req.body
app.use(bodyParser.json());

//ROUTES
// Home
app.get('/', (req, res) => {
    res.send('Welcome to the book directory')
})

// Books
const booksRoute = require('./routes/books')
app.use('/books', booksRoute)

// Posts
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute);

// Connect to MongoDB database
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to Database!');
})

// Listening on...
app.listen(3000);