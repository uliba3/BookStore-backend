// src/models/Books.js
const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
        title: {
          type: String,
          required: true
        },
        authors: [{
          type: String,
          required: true
        }],
        imageLink: {
          type: String,
          required: true
        },
        isbn13: String,
        isbn13: String,
      })

booksSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Books', booksSchema)