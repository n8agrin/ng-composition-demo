var ng = require('angular');

ng.module('buttons', [])

.directive('counter', function() {
	return {
		restrict: 'E',
		controller: function() {
			this.counter = 0;
			this.increment = function() {
				this.counter = this.counter + 1;
			}.bind(this);
		},
		controllerAs: 'counterCtrl',
		template: "<div><h1>Counter</h1><h2>{{counterCtrl.counter}}</h2><my-counter-button action='counterCtrl.increment' double-value='counterCtrl.counter'></my-counter-button></div>"
	}
})

.directive('myCounterButton', function() {
	return {
		restrict: 'E',
		scope: {
			action: '=',
			doubleValue: '='
		},
		controller: ['$scope', function($scope) {
			$scope.$watch('doubleValue', function(n, o) {
				console.log('doubleValue changed to', $scope.doubleValue);
			});
		}],
		template: "<div><h1>Double</h1><h2>{{doubleValue * 2}}</h2><button ng-click='action()'>Click Me!</button></div>"
	}
});