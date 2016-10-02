var ang= /**
* myapp Module
*
* Description
*/
angular.module('myapp', ['ngStorage']);

ang.controller('myCtrl',   function(
    $scope,
    $localStorage,
    myfact,
    $sessionStorage
){
	$scope.myfact = myfact;
	$scope.storage = $localStorage;
	this.addEvent = myfact.addEvent(this.todo);
	
});

	


ang.directive('myInput',  function(){
	// Runs during compile
	var add = function(value){
		console.log(scope.localhost)
	}
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                	myCtrl.addEvent();
                });

                event.preventDefault();
            }
        });
		}
	};
});

ang.factory('myfact',  function(){
	var logic = {};
	logic.addEvent = function ( ) {
		console.log('Add Event function');
	}
	return logic;
})

