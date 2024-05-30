angular.module('appointmentApp', [])
  .controller('appointmentCtrl', function ($scope) {
    $scope.formData = {};
    $scope.submitted = false;

    $scope.submitForm = function () {
      if ($scope.appointmentForm.$valid) {
        $scope.submitted = true;
      }
    };
  });
