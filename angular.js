var ang= /**
* myapp Module
*
* Description
*/
angular.module('myapp', ['ngStorage']);

ang.controller('myCtrl',   function(
    $scope,
    $localStorage,
    localstore,
    myfact,
    $sessionStorage
){
	$scope.localstore = localstore;
	$scope.myfact = myfact;
	$scope.storage = $localStorage;
	console.log('storage', $scope.storage.name);
	$scope.addEvent = function(event){
		localstore.store.push(event);
		console.log(localstore.store);
		$scope.todo=null;}
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
                	scope.addEvent(scope.todo);
                });

                event.preventDefault();
            }
        });
		}
	};
});

ang.factory('myfact',  function(){
	return {
		mem: {
			test: function(){
				return 'qqq';
			},
			create: function(qwe){
				console.log(localstore);
			}
		},
		store: {
			name: '1',
			status: "complete"
		}
	};
})

ang.factory('localstore', function(){
	return {
		store: [
			{
				name:'',
				id:1
			},
			{
				name:'',
				id:2
			}
		]
	};
})