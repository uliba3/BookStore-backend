const express = require('express');
const historyRouter = express.Router();
const User = require('../models/user');
const { verifyRequest } = require('../utils/verify');

historyRouter.get('/', async (request, response) => {
    try {
        console.log("GET /api/history");
        const decodedToken = verifyRequest(request);
        const user = await User.findById(decodedToken.id);
        const history = user ? user.history : [];
        console.log(history);
        response.json(history);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

historyRouter.post('/', async (request, response) => {
    try {
        const body = request.body;
        console.log(body);

        const decodedToken = verifyRequest(request);

        const industryIdentifiers = (body.industryIdentifiers || []).map(identifier => ({
            name: identifier.type,
            identifier: identifier.identifier
        }));

        const newBook = {
            title: body.title,
            authors: body.authors,
            publisher: body.publisher,
            publishedDate: body.publishedDate,
            description: body.description,
            industryIdentifiers: industryIdentifiers,
            pagecount: body.pageCount,
            categories: body.categories,
            imageLinks: body.imageLinks,
            language: body.language,
            bookId: body.bookId,
        };

        const filter = { _id: decodedToken.id };
        const update = { $push: { history: newBook } };

        const updatedUser = await User.updateOne(filter, update);

        if (updatedUser.nModified === 0) {
            return response.status(404).json({ error: 'User not found' });
        }

        const user = await User.findById(decodedToken.id);
        const history = user ? user.history : [];

        response.json(history);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

historyRouter.delete('/', async (request, response) => {
    try {
        const decodedToken = verifyRequest(request);
        console.log(decodedToken);
        const filter = { _id: decodedToken.id };
        const update = { $set: { history: [] } };

        await User.updateOne(filter, update);
        response.json([]);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

historyRouter.delete('/:id', async (request, response) => {
    try {
        const decodedToken = verifyRequest(request);
        const filter = { _id: decodedToken.id };
        const update = { $pull: { history: { bookId: request.params.id } } };

        await User.updateOne(filter, update);

        const user = await User.findById(decodedToken.id);
        const history = user ? user.history.filter(book => book.bookId !== request.params.id) : [];
        response.json(history);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = historyRouter;
