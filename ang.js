var ang = angular.module('myAng',[]);

ang.controller('myCont', function($scope, myFact){
    $scope.factory = myFact;
    $scope.test = 'THIS IS TESTING TEXT'; 
    $scope.model = {arr: "qwe"};
    $scope.func = function(key){
        return key*3;
    }
});
ang.factory('myFact',  function(){
    return {
        Keyword:52
    };
})
