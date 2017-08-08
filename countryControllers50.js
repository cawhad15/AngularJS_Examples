
var countryControllers50 = angular.module('countryControllers50', []);


			countryControllers50.controller('CountryListCtrl', function ($scope, countries){
		 		countries.list(function(countries) {
		 			$scope.countries = countries;
		 		});
		 	});

		 	countryControllers50.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
		 		countries.find($routeParams.countryId, function(country) {
		 			$scope.country = country;
		 		});
		 	});