var ang =
    /**
     * myapp Module
     *
     * Description
     */
    angular.module('myapp', ['ngStorage']);

ang.controller('myCtrl', function (
    $scope,
    logic
) {
    $scope.logic = logic;
    var storage = $scope.storage;

    this.get = function () {
        return logic.getlist();
    }

  // console.log($scope.status);
    
    this.renameVar = true;
    
    this.lists = this.get();
    
    logic.getByID(2);
    
    this.add = function () {
        logic.addEvent(this.todo);
        this.todo = '';
        this.lists = this.get();
        event.preventDefault();

    };
    this.deleteItem = function (id) {
        logic.deleteItem(id);
        this.lists = this.get();
    };
    
    this.change = function (id) {
        logic.change(id);
        this.lists = this.get();
    };
    
    this.renameShow = function(id){
        logic.renameShow(id);
    };
    
    this.rename = function(id){
        logic.rename(id);
        this.lists = this.get();
    };
    
     this.toggleEditMode = function(){
         logic.renameShow();
      
  }


});

ang.factory('logic', ['$localStorage', function ($localStorage) {
    var logic = {};
    
    //$localStorage.$reset();
    var stor = $localStorage;
    //console.log('store size',stor.storage.length);
    
    logic.addEvent = function (qwe) {
        if (typeof stor.storage == "undefined") {
            var counter = 0;
        } else {
            let count =-1;
            while((stor.storage.slice(count-1, count) != ":")&&(count >= -10)){
                count --;
            }
            var counter = stor.storage.slice(count, -1);
            
                }
        counter++;
        let input = {
            name: qwe,
            status: false,
            id: counter
        }
        if (typeof stor.storage == "undefined") {
            stor.storage = JSON.stringify(input);
        } else {
            stor.storage = stor.storage + ',' + JSON.stringify(input);
        }
        //stor.storage = stor.storage + input;
        //console.log(localStorage.storage);

    };
    logic.getByID = function (id){
        let data = '[' +stor.storage + ']';
        let result;
        if(stor.storage!= undefined){
            data = JSON.parse(data);
            angular.forEach(data, function(dat,key){
            if(dat.id==id){
                //console.log(key);
                result = key;
            }
            
        });
        
        }
        console.log(result);
        return result;
    };
    
    logic.getlist = function () {
        let result = '[' + stor.storage + ']';
        
        if (stor.storage === undefined) {
            return [];
        } else {
            return JSON.parse(result);
        }
    };

    logic.deleteItem = function (id) {

        let data = JSON.parse('[' + stor.storage + ']');
        $localStorage.$reset();
        for (let inc = 0; inc <= data.length - 1; inc++) {
            if (typeof (stor.storage) == "undefined") {
                if (data[inc].id != id) {
                    stor.storage = JSON.stringify(data[inc]);
                }
            } else {
                if (data[inc].id != id) {
                    stor.storage = stor.storage + ',' + JSON.stringify(data[inc]);
                    //console.log(data[inc].id , id);
                }
            }

        }
        console.log('data:' , data , '\n storage:', stor.data);
    };
    
    logic.change = function(id){
        let info = '[' + stor.storage + ']';
        info = JSON.parse(info);
        let keyy = logic.getByID(id);
        
        switch(info[keyy].status){
            case true: info[keyy].status = false; break;
            case false: info[keyy].status = true; break;
        }
        
        console.log(typeof(info[keyy].status), info[keyy].status)
       
        info = JSON.stringify(info);
        stor.storage = info.slice(1,-1);
        //console.log(stor.storage);
    };
    
    logic.renameShow = function(id){
        $(event.target).closest('li').toggleClass('editing');
        
    };
    
    logic.rename = function(id){
        let item = logic.getByID(id);
        console.log(item);
    }

    return logic;
}]);

