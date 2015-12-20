/***** Controllers ******/
(function () {
	'use strict';
	angular
		.module('ForecastApp')
		.controller('MainController', ['$scope', 'Denverforecast', function($scope, forecast) {
		forecast.success(function(data) {
			$scope.allData = data;
		});
	}]);
}());