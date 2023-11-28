const booksRouter = require('express').Router()
const User = require('../models/user')
import { verifyRequest } from '../utils/verify'

booksRouter.get('/', async (request, response) => {
    console.log("GET /api/books");
    const decodedToken = verifyRequest(request);
    const user = await User.findById(decodedToken.id)
    const books = user.books;
    console.log(books);
    response.json(books);
})

booksRouter.post('/', async (request, response) => {
    try {
      const body = request.body;
      console.log(body);

      const decodedToken = verifyRequest(request);
  
      const industryIdentifiers = body.industryIdentifiers.map((identifier) => {
        return { name: identifier.type, identifier: identifier.identifier };
      });
  
      const newBook = {
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
      };
  
      // Find the user by ID and update the books array
      const filter = { _id: decodedToken.id };
      const update = {
        $push: {
          books: newBook,
        },
      };
  
      const updatedUser = await User.updateOne(filter, update);
  
      if (updatedUser.nModified === 0) {
        return response.status(404).json({ error: 'User not found' });
      }
      response.json([...updatedUser.books, newBook]);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
});

booksRouter.delete('/', async (request, response) => {
    const decodedToken = verifyRequest(request);
    const filter = { _id: decodedToken.id };
    const update = {
        $set: {
            books: [],
        },
    };
    const updatedUser = await User.updateOne(filter, update);
    response.json([]);
})

booksRouter.delete('/:id', async (request, response) => {
    const decodedToken = verifyRequest(request);
    const filter = { _id: decodedToken.id };
    const update = {
        $pull: {
            books: { bookId: request.params.id },
        },
    };
    const updatedUser = await User.updateOne(filter, update);
    response.json(updatedUser.books.filter((book) => book.bookId !== request.params.id));
})

module.exports = booksRouter