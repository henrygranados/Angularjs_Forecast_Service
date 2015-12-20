/******SERVICE*********/
(function () {
	'use strict';

app.factory('Denverforecast', ['$http', function($http) { 
  return $http.get('javascript/template/jsonData.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
}());


