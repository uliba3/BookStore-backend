const booksRouter = require('express').Router()
const Books = require('../models/Books')

booksRouter.get('/', async (request, response) => {
    console.log("GET /api/books");
    const books = await Books.find({})
    console.log(books);
    response.json(books)
})

booksRouter.post('/', async (request, response) => {
    const body = request.body
    console.log(body);
    const industryIdentifiers = body.industryIdentifiers.map( identifier => { 
        return { name: identifier.type, identifier: identifier.identifier 
    }});
    const book = new Books({
        title: body.title,
        authors: body.authors,
        publisher: body.publisher,
        publishedDate: body.publishedDate,
        description: body.description,
        industryIdentifiers: industryIdentifiers,
        pagecount: body.pageCount,
        imageLinks: body.imageLinks,
        language: body.language,
        bookId: body.bookId,
    })

    console.log(book);
    const savedBook = await book.save()
    response.json(savedBook)
})

booksRouter.delete('/', async (request, response) => {
    const books = await Books.deleteMany({});
    response.json(books);
})

booksRouter.delete('/:id', async (request, response) => {
    const book = await Books.deleteMany({bookId: request.params.id});
    response.json(book)
})

module.exports = booksRouter