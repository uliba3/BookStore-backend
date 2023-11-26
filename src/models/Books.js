// src/models/Books.js
const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
        title: String,
        authors: [String],
        publisher: String,
        publishedDate: String,
        description: String,
        industryIdentifiers: [{
          name: String,
          identifier: String,
      }],      
        pagecount: Number,
        imageLinks: {
            smallThumbnail: String,
            thumbnail: String,
        },
        language: String,
        id: String,
      })

booksSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Books', booksSchema)