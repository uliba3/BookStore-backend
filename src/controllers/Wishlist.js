const express = require('express');
const wishlistRouter = express.Router();
const User = require('../models/user');
const { verifyRequest } = require('../utils/verify');

wishlistRouter.get('/', async (request, response) => {
    try {
        console.log("GET /api/wishlist");
        const decodedToken = verifyRequest(request);
        const user = await User.findById(decodedToken.id);
        const wishlist = user ? user.wishlist : [];
        console.log(wishlist);
        response.json(wishlist);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

wishlistRouter.post('/', async (request, response) => {
    try {
        const body = request.body;
        console.log(body);

        const decodedToken = verifyRequest(request);

        const industryIdentifiers = body.industryIdentifiers.map(identifier => ({
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
            imageLinks: body.imageLinks,
            language: body.language,
            bookId: body.bookId,
        };

        const filter = { _id: decodedToken.id };
        const update = { $push: { wishlist: newBook } };

        const updatedUser = await User.updateOne(filter, update);

        if (updatedUser.nModified === 0) {
            return response.status(404).json({ error: 'User not found' });
        }

        const user = await User.findById(decodedToken.id);
        const wishlist = user ? user.wishlist : [];

        response.json(wishlist);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

wishlistRouter.delete('/', async (request, response) => {
    try {
        const decodedToken = verifyRequest(request);
        console.log(decodedToken);
        const filter = { _id: decodedToken.id };
        const update = { $set: { wishlist: [] } };

        await User.updateOne(filter, update);
        response.json([]);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

wishlistRouter.delete('/:id', async (request, response) => {
    try {
        const decodedToken = verifyRequest(request);
        const filter = { _id: decodedToken.id };
        const update = { $pull: { wishlist: { bookId: request.params.id } } };

        await User.updateOne(filter, update);

        const user = await User.findById(decodedToken.id);
        const updatedWishlist = user ? user.wishlist.filter(book => book.bookId !== request.params.id) : [];
        response.json(updatedWishlist);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = wishlistRouter;
