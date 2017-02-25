var mongoose = require('mongoose');

//Genre Schema
var booksSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  publisher: {
    type: String,
  },
  pages: {
    type: String,
  },
  image_url: {
    type: String,
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Book = module.exports = mongoose.model('Book', booksSchema)

//get genres
module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback){
  Book.findById(id, callback);
}

module.exports.addBook = function(book, callback){
  console.log(book);
  Book.create(book);
}


//update books
module.exports.updateBook = function(id, book, options, callback){
  var query = {_id : id};
  var update = {
    title : book.title
  }
  Book.findOneAndUpdate(query, update, options, callback);
}
