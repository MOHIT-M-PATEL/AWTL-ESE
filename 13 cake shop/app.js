angular.module('cakeShopApp', [])
    .controller('CakeController', function($scope) {
        $scope.order = {};
        $scope.submitted = false;

        $scope.submitOrder = function() {
            if ($scope.orderForm.$valid) {
                // Submit the form or perform other actions here
                $scope.submitted = true;
            }
        };
    });
