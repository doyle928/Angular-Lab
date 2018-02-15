(function () {
    function HoverList() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.bind('mouseenter', function () {
                    $element.css('background-color', '#eee');
                    $element.css('border-radius', '5px');
                });
                $element.bind('mouseleave', function () {
                    $element.css('background-color', 'white');
                });

            }
        }
    }

    angular
        .module("app")
        .directive("hoverList", HoverList);
})();