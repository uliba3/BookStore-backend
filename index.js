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

const bookSearchRouter = require('./src/controllers/GoogleBooks');
const usersRouter = require('./src/controllers/Users');
const loginRouter = require('./src/controllers/Login');
const historyRouter = require('./src/controllers/History');
const wishlistRouter = require('./src/controllers/Wishlist');

mongoose.set('strictQuery', false);

// Use the real MongoDB server for other environments
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    logger.info('connected to MongoDB');
})
.catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
});

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.static('dist')); // Serve static files from the 'dist' directory
app.use(express.json()); // Parse JSON requests
// Serve static files from the 'build' directory
app.use(express.static('build'));

app.use('/api/history', historyRouter);
app.use('/api/wishlist', wishlistRouter);
app.use('/api/booksSearch', bookSearchRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };;
