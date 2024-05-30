angular.module('tourismApp', [])
    .controller('TourismController', function($scope) {
        $scope.tourist = {};
        $scope.submitted = false;

        $scope.submitForm = function() {
            if ($scope.touristForm.$valid) {
                // Submit the form or perform other actions here
                $scope.submitted = true;
            }
        };
    });
