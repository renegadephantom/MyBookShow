var myApp = angular.module('myApp',['ngRoute']);

//set up all arputes
myApp.config(function($routeProvider){
  console.log('Naveen' + $routeProvider);
  $routeProvider.when('/', {
    controller: 'BooksController',
    templateUrl : 'views/books_view.html'
  })
  .when('/books', {
    controller: 'BooksController',
    templateUrl : 'views/books_view.html'
  })
  .when('/books/details/:id', {
      controller: 'BooksController',
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
  .otherwise({
    redirectTo : '/'
  });



});
