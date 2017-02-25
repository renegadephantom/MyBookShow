var myApp = angular.module('myApp');

myApp.controller('BooksController',['$scope', '$http', '$location', '$routeParams',
                                        function($scope, $http, $location, $routeParams){
        console.log('BooksController Loaded');
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

        $scope.getBook = function(){
          var id = $routeParams.id;
          $http.get('/api/books/'+id).then(successCallback, errorCallback);
          function successCallback(response){
              $scope.book = response.data;
          }

          function errorCallback(response){

          }
        }
}]);
