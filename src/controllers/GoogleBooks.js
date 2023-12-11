const bookSearchRouter = require('express').Router()
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
require('dotenv').config();

const base_url = process.env.GOOGLEBOOKS_URI;

bookSearchRouter.get('/', async (request, response) => {
    const url = base_url + "?q=" + request.query.q + "&" + "startIndex=" + request.query.startIndex;
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
                imageLinks: book.volumeInfo.imageLinks,
                bookId: book.id,
            }
        }));
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

bookSearchRouter.get('/:id', async (request, response) => {
    const url = base_url + "/" + request.params.id;
    try {
        // Make an Axios GET request to an external API
        const apiResponse = await axios.get(url);
        
        // Handle the data from the external API
        const apiData = apiResponse.data;

        const dom = new JSDOM(apiData.volumeInfo.description);

        const description = dom.window.document.body.textContent || "";
    
        // Send a response to the client
        response.json( {
            title: apiData.volumeInfo.title,
            authors: apiData.volumeInfo.authors,
            publisher: apiData.volumeInfo.publisher,
            publishedDate: apiData.volumeInfo.publishedDate,
            description: description,
            industryIdentifiers: apiData.volumeInfo.industryIdentifiers,
            pagecount: apiData.volumeInfo.pageCount,
            categories: apiData.volumeInfo.categories,
            imageLinks: apiData.volumeInfo.imageLinks,
            language: apiData.volumeInfo.language,
            bookId: apiData.id,
        });
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = bookSearchRouter;
