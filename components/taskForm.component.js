(function () {
    var taskForm = {
        bindings: {
            
        },
        templateUrl: "partials/form.partial.html",
        //controller: "FormController"
        controller: function () {
            var vm = this;
            vm.todoList = [];
            vm.addItem = function (todoAdd) {
                vm.todoList.push(todoAdd);
                document.getElementById("addItems").value = "";
            }
        }
    };
    angular.module("app")
        .component("taskForm", taskForm);
})();