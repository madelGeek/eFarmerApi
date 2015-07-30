'use strict';

/**
 * @ngdoc function
 * @name apiFarmerDocsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apiFarmerDocsApp
 */
angular.module('apiFarmerDocsApp')
  .controller('MainCtrl', ['$scope', '$q', 'gettingDocumentsService', function ($scope) {

    $scope.indexNumber = function ($index) {
      if ($index < 10) {
        return '0' + ($index + 1);
      } else {
        return $index + 1;
      }
    };



    $scope.tasks = [
      {id: '29443d8c-eabe-4cbd-8d51-35bbe46b644b'},
      {id: 'a96a8973-8ccd-4237-877e-d5aaa2c98717'},
      {id: '6ded0c0b-e231-4fd3-a799-6191cbb4d4bd'},
      {id: '82c4d1be-24d2-46ac-8a31-dcfd61137116'},
      {id: 'bab5aa60-77d4-42b5-b948-8ecac80966ce'},
      {id: '071a5d31-b8b5-4839-8bac-bdaf485f5d95'},
      {id: '29d90230-fae9-4b99-b5c5-98dc82cf8d54'},
      {id: '2b48ba5f-a24f-4a5b-8e8a-b81eccb19dc4'},
      {id: '5c81dd14-c82c-421f-b26d-72d8bb4732c1'}
    ];



    $scope.taskId = function (task, $index) {
      $scope.taskIdOnClick = task;
      $scope.selectedIndex = $index;
    };

  }]);
