// src/models/Books.js
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
        unique: true
      },
      passwordHash: String,
      history: [{
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
        categories: [String],
        imageLinks: {
            thumbnail: String,
            small: String,
            extraLarge: String,
        },
        language: String,
        bookId: String,
      }],
      wishlist: [{
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
            thumbnail: String,
            small: String,
            extraLarge: String,
        },
        language: String,
        bookId: String,
      }],
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('User', userSchema)