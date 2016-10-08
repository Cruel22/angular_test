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
	var storage = $scope.storage;
    
	
    this.get = function() {
        return logic.getlist();
    }
    
    var	lists = this.get();
    this.lists = lists;
    
    this.add = function () {
        logic.addEvent(this.todo);
        this.todo = '';
        this.lists = this.get();
        event.preventDefault();
        
    }	
    
    
    console.log('Controller info', Array.isArray(lists), typeof(lists),lists);
});



ang.factory('logic', ['$localStorage', function($localStorage){
	var logic = {};
    
    //$localStorage.$reset();
    var stor = $localStorage;
    //console.log('store size',stor.storage.length);
    
	logic.addEvent =  function (qwe) {
            if( typeof stor.storage == "undefined" ){
            var counter = 0;
        }
        else {
            var counter = stor.storage.slice(-2, -1);
        }
           counter ++;
            var input = {
                name:qwe,
                status: 'in-progress',
                id:counter
            }
            if( typeof stor.storage == "undefined" ){
                stor.storage = JSON.stringify(input);
            }
            else {
                stor.storage = stor.storage + ',' + JSON.stringify(input);
            }
            //stor.storage = stor.storage + input;
            //console.log(localStorage.storage);
        
	};
	
    logic.getlist = function (){
        let result ='[' + stor.storage + ']'; 
        
        return JSON.parse(result); 
    }

	return logic;
}])

