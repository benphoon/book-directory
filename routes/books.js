const express = require('express');
const router = express.Router();
const Book = require('../models/Book')

// ROUTES
//get - get info
//post -  eg submit a form (give info)
//delete - delete data
//patch - update a resource
//first parameter = route

// Retrieve all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch {
        res.json({ message: err })
    }
});


// Retrieve specific book
router.get('/:bookId', async (req, res) => {
    try {
        const specificBook = await Book.findById(req.params.bookId)
        res.json(specificBook)
    } catch {
        res.json({ message: err })
    }
})

// Update a specific book
router.patch('/:bookId', async (req, res) => {
    try {
        const selectedBook = await Book.updateOne(
            { _id: req.params.bookId },
            {
                $set:
                {
                    title: req.body.title,
                    year: req.body.year,
                    author: req.body.author
                }
            }
        )
        res.json(selectedBook)
    } catch {
        console.log(req.params.bookId)
        console.log(err)
        res.json({ message: err })
    }
})

// Delete a specific book
router.delete('/:bookId', async (req, res) => {
    try {
        const removedBook = await Book.remove({ _id: req.params.bookId })
        res.json(removedBook)
    } catch {
        res.json({ message: err })
    }
})


// Submit a book to the directory
router.post('/', (req, res) => {
    const book = new Book({
        title: req.body.title,
        year: req.body.year,
        author: req.body.author
    })

    book.save()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({ message: 'balls' })
        })
})

module.exports = router;