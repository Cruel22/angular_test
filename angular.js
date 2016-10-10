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
        
    };
    this.deleteItem = function(id){
        logic.deleteItem(id);
    };
    
    
    
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
        
        if(stor.storage === undefined){
            return [];
        }
        else {
            return JSON.parse(result); 
        }
    };
    
    logic.deleteItem = function(id){
        
        let data = JSON.parse( '[' + stor.storage + ']') ;
        for(let inc =0; inc <= data.length-1; inc++){
            if(inc == 0){
                    if(data[inc].id != id){
                        stor.storage = JSON.stringify(data[inc]);
                    }
                
            }
            else{
                if((data[inc].id !=id)){
                    stor.storage = stor.storage + ',' + JSON.stringify(data[inc]);
                }
               
            }
        }
        console.log(stor.storage);
       
       
    }

	return logic;
}])

