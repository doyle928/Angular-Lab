(function () {
    var count = 0
    function Blur() {
        
        return {
            link: function ($scope, $element, $attrs) {
                $element.bind('click', function () {
                    $element.css("transform", "rotateZ(" + count + "deg)");
                    if(count == 1){
                        count = -1;
                    }
                    count++;

                });
            }
        }
    }

    angular
        .module("app")
        .directive("blur", Blur);
})();