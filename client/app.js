var myApp = angular.module('myApp',['ngRoute']);

var gGenre = 'Action';

//set up all arputes
myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'BooksController',
    templateUrl : 'views/books_view.html'
  })
  .when('/books', {
    controller: 'BooksController',
    templateUrl : 'views/books_view.html'
  })
  .when('/books/details/:id', {
      controller: 'BookDetailsController',
      templateUrl : 'views/book_details_view.html'
    })
  .when('/books/add', {
    controller: 'BooksController',
    templateUrl : 'views/add_book.html'
  })
  .when('/books/edit/:id', {
    controller: 'BooksController',
    templateUrl : 'views/edit_book.html'
  })
  .when('/books/genre/:genre', {
    controller: 'BooksController',
    templateUrl : 'views/books_view.html'
  })
  .otherwise({
    redirectTo : '/'
  });



});
