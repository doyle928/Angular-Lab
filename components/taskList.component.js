(function() {
    var taskList = {
        bindings: {  
            addItem: "&",
            todoList: "<"                
        },
        templateUrl: "partials/list.partial.html",
        controller: function() {
            var vm = this;
            vm.todoList = [];
            vm.removeItem = function(item) {
                vm.todoList.splice(item, 1);
                console.log(item);
              };
        }
    };
    angular.module("app")
        .component("taskList", taskList);
})();