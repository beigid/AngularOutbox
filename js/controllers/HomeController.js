app.controller('HomeController', ['$scope', 'emails', function($scope, emails) {
  emails.success(function(data) {
    $scope.emails = data;
  });
$scope.unreadCheck = function(index) {
	$scope.emails[index].unread = false;

};
  
}]);