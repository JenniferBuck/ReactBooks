const mongoose = require('mongoose')
const Schema = mongoose.Schema


let bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    authors: {
        type: [{ type: String, required: true }],
        required: true
    },

    description: {
        type: String
    },

    image: {
        type: String
    },

    link: {
        type: String
    }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book