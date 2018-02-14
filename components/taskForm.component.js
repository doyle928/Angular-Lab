(function() {
    var taskForm = {
        bindings: { 
            item: "&"       
        },
        templateUrl: "partials/form.partial.html",
        //controller: "FormController"
        controller: function() {
            var $ctrl = this;
            $ctrl.addItem = function (todoAdd){
                $ctrl.todoList.push($ctrl.todoAdd);
                //document.getElementById("addItems").value = "";
            }     
        }
    };
    angular.module("app")
        .component("taskForm", taskForm);
})();