(function() {
    var taskList = {
        bindings: { 
            todoList: "<"
        },
        templateUrl: "partials/list.partial.html",
        controller: "FormController"
    };
    angular.module("app")
        .component("taskList", taskList);
})();