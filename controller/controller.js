(function () {
    function FormController() {
        var vm = this;
        vm.todoList = [];
        vm.addItem = function (todoAdd){
            vm.todoList.push(todoAdd);
            document.getElementById("addItems").value = "";
        }     
        vm.removeItem = function (index){
            vm.todoList.splice(index, 1);
        }
    }
    angular
        .module("app")
        .controller("FormController", FormController);
})();

