app.controller('HomeController', ['$scope', 'emails', function($scope, emails) {
  emails.success(function(data) {
    $scope.emails = data;
    $scope.unreadCheck = function() {
      //return $scope.emails[index].unread == false;
      document.querySelector(".btn").style.display = "none";
    }; 
  });
}]);