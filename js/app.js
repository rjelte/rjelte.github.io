'use strict';

angular.module('til', ['ui.router', 'ui.bootstrap', 'til.controllers', 'gantt', 'til.directives', 'til.services', 'LocalStorageModule', 'angularSpinner'])
.config(function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state('home', {
			url: "/",
			views: {
				"nav": {
					templateUrl: "partials/nav.html",
					controller: "NavController",
				},
				"content": {
					templateUrl: "partials/home.html",
					controller: "MainController",
				}
			}
		})
		.state('demos', {
			url: "/demos",
			templateUrl: "partials/demos.html",
			views: {
				"nav": {
					templateUrl: "partials/demos-nav.html",
					controller: "NavController",
				},
				"content": {
					templateUrl: "partials/demos.html",
					controller: "DemosController",
				}
			}
		})
		.state('demos.studio', {
			url: "/studio",
			templateUrl: "partials/studio.html",
			controller: 'StudioController'
		})
		.state('demos.logic', {
			url: "/logic",
			templateUrl: "partials/logic.html",
			controller: 'LogicController'
		})
		.state('demos.tiles', {
			url: "/tiles",
			templateUrl: "partials/tiles.html",
			controller: 'TilesController'
		})
		.state('demos.schedule', {
			url: "/scheduling",
			templateUrl: "partials/schedule.html",
			controller: 'ScheduleController'
		})
		.state('demos.neural', {
			url: "/neural",
			templateUrl: "partials/neural.html",
			controller: 'NeuralController'
		});
	});

'use strict';