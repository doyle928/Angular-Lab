(function() {
    var taskList = {
        bindings: {  
            item: "&"                    
        },
        templateUrl: "partials/list.partial.html",
        controller: function() {
            var $ctrl = this;
            $ctrl.removeItem = function (index){
                $ctrl.todoList.splice(index, 1);
                //document.getElementById("addItems").value = "";
            }     
        }
    };
    angular.module("app")
        .component("taskList", taskList);
})();