(function () {
    var taskForm = {
        bindings: {},
        templateUrl: "partials/form.partial.html",
        controller: "FormController"

    };
    angular.module("app")
        .component("taskForm", taskForm);
})();