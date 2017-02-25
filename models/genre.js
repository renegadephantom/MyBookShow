var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema)

//get genres
module.exports.getGenres = function(callback, limit){
  Genre.find(callback).limit(limit);
}

module.exports.getGenresById = function(id, callback){
  Genre.findById(id, callback);
}



//add genres
module.exports.addGenres = function(genre, callback){
  console.log(genre);
  Genre.create(genre);
}


//update genres
module.exports.updateGenre = function(id, genre, options, callback){
  console.log(id, genre);
  var query = {_id : id};
  var update = {
    name : genre.name
  }
  console.log(query._id, update.name);
  Genre.findOneAndUpdate(query, update, options, callback);
  console.log('what next');
}
