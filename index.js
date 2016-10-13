var ng = require('angular');

ng.module('buttons', [])

.directive('counter', function() {
	return {
		restrict: 'E',
		controller: function() {
			this.counter = 0

			this.increment = function() {
				this.counter = this.counter + 1;
			}.bind(this)

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
		controller: function() {},
		controllerAs: 'myCounterButtonCtrl',
		bindToController: true,
		template: "<div><h1>Double</h1><h2>{{myCounterButtonCtrl.doubleValue * 2}}</h2><button ng-click='myCounterButtonCtrl.action()'>Click Me!</button></div>"
	}
});