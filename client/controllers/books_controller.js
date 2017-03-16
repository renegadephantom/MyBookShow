var myApp = angular.module('myApp');

myApp.controller('BooksController',['$scope', '$http', '$location', '$routeParams',
                                        function($scope, $http, $location, $routeParams){
        console.log('BooksController Loaded');


        console.log('Before Route param is : '+ $routeParams.genre);

//Adding a default route param
        if(!$routeParams.genre)
          $routeParams.genre = 'Humor';
          console.log('Route param is : '+ $routeParams.genre);

        $scope.genre = $routeParams.genre;
        console.log('Genre is '+$scope.genre);
        $scope.getBooks = function(){
//          $http.get('/api/books').success(function(response){
//            $scope.books = response;
//          });
          $http.get('/api/books').then(successCallback, errorCallback);

          function successCallback(response){
              console.log(response);
              $scope.books = response.data;
          }

          function errorCallback(response){

          }
        }

        $scope.getBookById = function(){
          var id = $routeParams.id;
          $http.get('/api/books/id/'+id).then(successCallback, errorCallback);
          function successCallback(response){
              $scope.book = response.data;
          }

          function errorCallback(response){

          }
        }


        $scope.getBooksByGenre = function(genre){
          console.log('inside getBooksByGenre');
          var id = $routeParams.id;
          $http.get('/api/books/genre/'+genre).then(successCallback, errorCallback);
          function successCallback(response){
            console.log('inside success');
            console.log(response.data);
              $scope.books = response.data;
          }

          function errorCallback(response){
            console.log('inside failure');
          }
        }

}]);
