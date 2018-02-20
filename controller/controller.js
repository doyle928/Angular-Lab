(function () {
    function FormController(TaskService) {
        var vm = this;
        vm.addItem = function (item) {
            TaskService.setTask(item);
            document.getElementById("addItems").value = "";
            console.log(item);

        };

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