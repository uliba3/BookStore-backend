const bookSearchRouter = require('express').Router()
const axios = require('axios');
require('dotenv').config();

const base_url = process.env.GOOGLEBOOKS_URI;

bookSearchRouter.get('/', async (request, response) => {
    const url = base_url + "q=" + request.query.q + "&" + "startIndex=" + request.query.startIndex;
    try {
        // Make an Axios GET request to an external API
        const apiResponse = await axios.get(url);
        
        // Handle the data from the external API
        const apiData = apiResponse.data;
    
        // Send a response to the client
        response.json( apiData.items.map( book => {
            return {
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                publisher: book.volumeInfo.publisher,
                publishedDate: book.volumeInfo.publishedDate,
                description: book.volumeInfo.description,
                industryIdentifiers: book.volumeInfo.industryIdentifiers,
                pagecount: book.volumeInfo.pageCount,
                imageLinks: book.volumeInfo.imageLinks,
                language: book.volumeInfo.language,
                id: book.id,
            }
        }));
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = bookSearchRouter;
