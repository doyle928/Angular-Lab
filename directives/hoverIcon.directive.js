(function () {
    function HoverIcon() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.bind('mouseenter', function () {
                    $element.css('color', '#ff0000');
                });
                $element.bind('mouseleave', function () {
                    $element.css('color', 'black');
                });

            }
        }
    }

    angular
        .module("app")
        .directive("hoverIcon", HoverIcon);
})();