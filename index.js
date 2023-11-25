// index.js
const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Define a simple console logger
const logger = {
  info: console.log,
  error: console.error,
};

const booksRouter = require('./src/controllers/Books');
const bookSearchRouter = require('./src/controllers/GoogleBooks');

mongoose.set('strictQuery', false);

if (process.env.NODE_ENV === 'dev') {
    // Use the real MongoDB server for other environments
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB');
      })
      .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message);
      });
}

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse JSON requests

app.use('/api/books', booksRouter);
app.use('/api/booksSearch', bookSearchRouter);

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };;
