(function () {
    function FormController() {
        var vm = this;
        vm.todoList = [];
        vm.addItem = function (todoItem) {
            vm.todoList.push(todoItem);
            document.getElementById("addItems").value = "";
            console.log(todoItem);
            console.log(vm.todoList);
            return todoItem;
        }
        vm.removeItem = function (todoItem){
            vm.todoList.splice(todoItem, 1);
        }
        // vm.addItem = function (todoAdd){
        //     vm.todoList.push(todoAdd);
        //     document.getElementById("addItems").value = "";
        // }     
        // vm.removeItem = function (index){
        //     vm.todoList.splice(index, 1);
        // }
    }
    angular
        .module("app")
        .controller("FormController", FormController);
})();

