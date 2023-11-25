const booksRouter = require('express').Router()
const Books = require('../models/Books')

booksRouter.get('/', async (request, response) => {
    const books = await Books.find({})
    console.log(books);
    response.json(books)
})

booksRouter.post('/', async (request, response) => {
    const body = request.body
    console.log(body);
    const book = new Books({
        title: body.title,
        authors: body.authors,
        id: body.id
    })

    const savedBook = await book.save()
    response.json(savedBook)
})

booksRouter.delete('/', async (request, response) => {
    const books = await Books.deleteMany({});
    response.json(books);
})

module.exports = booksRouter