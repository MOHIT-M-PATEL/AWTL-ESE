angular.module('complaintApp', [])
    .controller('ComplaintController', function($scope) {
        $scope.complaint = {};
        $scope.submitted = false;

        $scope.submitForm = function() {
            if ($scope.complaintForm.$valid) {
                // Submit the form or perform other actions here
                $scope.submitted = true;
            }
        };
    });
