var ang= /**
* myapp Module
*
* Description
*/
angular.module('myapp', ['ngStorage']);

ang.controller('myCtrl',   function(
    $scope,
    logic
){
	$scope.logic = logic;
	var storage = $scope.storage ;
	this.add = function () {
        logic.addEvent(this.todo);
        this.todo = '';
        event.preventDefault();
    }	

	
});

	


ang.directive('myInput',  function(){
	// Runs during compile
	var add = function(value){
		
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
                    scope.myCtrl.add();
                });

                event.preventDefault();
            }
        });
		}
	};
});

ang.factory('logic', ['$localStorage', function($localStorage){
	var logic = {};
    var stor= localStorage;
    var counter = 0 ;
    
	logic.addEvent =  function (qwe) {
       counter ++;
        var input = {
            name:qwe,
            id:counter
        }
        JSON.stringify(input);
        console.log(input);
        console.log(typeof(input));
       //stor.storage = stor.storage + input;
		//console.log(localStorage.storage);
        
	};
	

	return logic;
}])

