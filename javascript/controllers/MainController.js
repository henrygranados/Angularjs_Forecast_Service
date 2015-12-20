/***** Controllers ******/
(function () {
	'use strict';

app.controller('MainController', ['$scope', 'Denverforecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.allData = data;
  });
}]);
}());