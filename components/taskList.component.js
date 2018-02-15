(function () {
    var taskList = {
        bindings: {
            list: "<"
        },
        templateUrl: "partials/list.partial.html",
        controller: function(){
            var vm = this;
            vm.removeItem = function (index){
                vm.list.splice(index, 1);
            }
        }


    };
    angular.module("app")
        .component("taskList", taskList);
})();