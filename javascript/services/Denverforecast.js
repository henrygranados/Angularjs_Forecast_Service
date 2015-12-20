/******SERVICE*********/
(function () {
	'use strict';

	angular
		.module('ForecastApp')
		.factory('Denverforecast', ['$http', function($http) { 
		return $http.get('javascript/template/jsonData.json') 
		.success(function(data) { 
			return data; 
		}) 
		.error(function(err) { 
			return err; 
		}); 
	}]);
}());


