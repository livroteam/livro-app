angular.module('MemberCtrl', []).controller('MemberController', function($scope) {

  $scope.member = [
    {
      'memberName':'Mark Whalberg',
      'memberLocation':'Alor Setar, Kedah',
      'memberID':'15519'
    },
    {
      'memberName':'Hussein Calhanoglu',
      'memberLocation':'Pulau Perhentian, Terengganu',
      'memberID':'18784'
    }
  ];

  $scope.regMember = function() {

  };

});