var countryApp = angular.module('countryApp', [
	'ngRoute',
	'countryControllers50',
	'countriesFactory50',
	'countryDirective50'
	]);

countryApp.config(function($routeProvider) {
		 		$routeProvider.

		 		when('/', {
		 			templateUrl: 'country-list_46.html',
		 			controller: 'CountryListCtrl'
		 		}).
		 		when('/:countryId', {
		 			templateUrl: 'country-detail_45.html',
		 			controller: 'CountryDetailCtrl'
		 		}).
		 		otherwise({
		 			redirectTo: '/'
		 		});
		 	});
