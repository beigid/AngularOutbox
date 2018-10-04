app.controller('HomeController', ['$scope', 'emails', function($scope, emails) {
  emails.success(function(data) {
    $scope.emails = data;
    $scope.unreadCheck = function() {
      $scope.emails.unread == false;
      console.log("test for button switch")
    }; 
  });
}]);