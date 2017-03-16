var express = require('express');

var path = require('path');

var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



app.use(express.static(__dirname+'/client'));
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//set up a route for landing page
app.get('/', function(req, res){
  res.send('hello');
});

app.get('/api/genres', function(req, res){
  console.log('got get');
  Genre.getGenres(function(err, genres){
    if(err){
      throw err;
    }
    res.json(genres);
  });
});

app.get('/api/genres/:_id', function(req, res){
  console.log('Got getGenresById')
  Genre.getGenresById(req.params._id, function(err, Genre){
    if(err){
      throw err;
    }
    res.json(Genre);
  });
});

app.post('/api/genres', function(req, res){
  var genre = req.body;
  console.log('post got');
  Genre.addGenres(genre, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

app.put('/api/genres/:_id', function(req, res){
  var id = req.params._id;
  var genre = req.body;
  console.log('Got Put');
  Genre.updateGenre(id, genre, {}, function(err, genre){
    if(err){
      throw err;
      console.log(err);
    }
    console.log('no error');
    res.json(genre);
  });
});

app.put('/api/books/:_id', function(req, res){
  var id = req.params._id;
  var book = req.body;
  console.log(book);
  Book.updateBook(id, book, {}, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
});


app.get('/api/books', function(req, res){
  console.log('calling getBooks');
  Book.getBooks(function(err, books){
    console.log(books)
    if(err){
      throw err;
    }
    res.json(books);
  });
});

app.get('/api/books/id/:_id', function(req, res){
  console.log('Got 1 getBookByGenre' + req.params._genre);
  Book.getBookById(req.params._id, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
});


app.get('/api/books/genre/:_genre', function(req, res){
  console.log('Got getBookByGenre' + req.params._genre);
  Book.getBookByGenre(req.params._genre, function(err, book){
      console.log('result' + book);
    if(err){
      throw err;
    }
    console.log('throwing back res');
    res.json(book);
  });
});

app.listen(3000);
console.log('running...');
