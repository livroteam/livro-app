angular.module('BookService', []).factory('BookFactory', ['$http', function($http) {

  var urlBase = '/api/book';
  var BookFactory = {};

  BookFactory.getBooks = function(){
    return $http.get(urlBase);
  }

  BookFactory.getBook = function(isbn){
    return $http.get(urlBase + '/' + isbn);
  }

  return BookFactory;

}]);