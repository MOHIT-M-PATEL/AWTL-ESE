angular.module('groceryApp', [])
    .controller('GroceryController', function($scope) {
        $scope.groceryList = [];
        $scope.newItem = {};

        $scope.addItem = function() {
            if ($scope.form.$valid) {
                $scope.groceryList.push({ name: $scope.newItem.name, quantity: $scope.newItem.quantity });
                $scope.newItem = {};
                $scope.form.$setPristine();
            }
        };
    });
