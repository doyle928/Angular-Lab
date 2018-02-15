(function () {
    var taskForm = {
        bindings: {

        },
        templateUrl: "partials/form.partial.html",
        controller: "FormController"
        // controller: function () {
        //     var vm = this;
        //     vm.todoList = [];
        //     vm.addItem = function (todoItem) {
        //         vm.todoList.push(todoItem);
        //         document.getElementById("addItems").value = "";
        //         console.log(todoItem);
        //         console.log(vm.todoList);
        //     }
            
        // }
    };
    angular.module("app")
        .component("taskForm", taskForm);
})();