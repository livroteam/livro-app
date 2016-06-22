angular.module('BookCtrl', ['BookService']).controller('BookController', function($scope, BookFactory) {

  $scope.books = [
    {
      'bookTitle':'Eat, Pray, Love',
      'bookOwner':'Ahmad Albab',
      'ownerLocation':'Puchong, Kuala Lumpur',
      'bookISBN':'77889898'
    },
    {
      'bookTitle':'Buku Resipi Mok Cun',
      'bookOwner':'Sufi Salee',
      'ownerLocation':'Taiping, Perak',
      'bookISBN':'95565457'
    }
  ];
  $scope.addBook = function(){

    //Random array for testing purpose
    var randomOwner = ['John Snow','Ali Muhammad','Mark Whalberg','Osama Erdogan'];
    var randomLocation = ['Senawang, Negeri Sembilan', 'Kuching, Sarawak', 'Lahad Datu, Sabah', 'Seri Iskandar, Perak'];
    var mathRandom =  Math.floor(Math.random()*randomOwner.length);

    $scope.bookOwner = randomOwner[mathRandom];
    $scope.ownerLocation = randomLocation[mathRandom];
    $scope.ownerEmail = 'randomemail@gmail.com';

    $scope.books.push({
      bookTitle: $scope.bookTitle,
      bookISBN: $scope.bookISBN,
      bookOwner: $scope.bookOwner,
      ownerLocation: $scope.ownerLocation,
      ownerEmail: $scope.ownerEmail
    });

    $scope.bookTitle = '';
    $scope.bookISBN = '';
  }

});