const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }, 
    image:
    {
        type: String,
        require: true
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;