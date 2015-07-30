'use strict';

angular.module('apiFarmerDocsApp')
  .directive('taskOption', function () {

    taskOptionCtrl.$inject = ['$scope', 'gettingDocumentsService'];
    function taskOptionCtrl($scope, gettingDocumentsService) {
      $scope.showProperty = function (taskId) {
        $scope.document = gettingDocumentsService.get({}, {'Id': taskId}, function (data) {
          var i;
          var dateUnix = new Date(data.taskStartDate);
          var year = dateUnix.getFullYear();
          var month = dateUnix.getMonth() + 1;
          var fieldsArrray = [];

          if (month < 10) {
            month = '0' + month;
          }

          var date = dateUnix.getDate();
          $scope.taskDateView = date + '.' + month + '.' + year;

          for (i = 0; i < data.fields.length; i++) {
            fieldsArrray.push(data.fields[i].name);
          }

          $scope.fields = fieldsArrray.join(', ');

          $scope.actions = [
            {
              image: '../images/field.png',
              name: 'Field: ',
              property: $scope.fields
            },
            {
              image: '../images/operation.png',
              name: 'Operation: ',
              property: data.operation.name
            },
            {
              image: '../images/vehicle.png',
              name: 'Vehicle:',
              property: ''

            },
            {
              image: '../images/materials.png',
              name: 'Materials:',
              property: ''

            },
            {
              image: '../images/from.png',
              name: 'From: ',
              property: data.orgName
            }
          ];
        });
      };
    }


    return {
      restrict: 'A',
      templateUrl: '../views/taskOptions.html',
      require: 'ngModel',
      replace: true,
      scope: {},
      controller: taskOptionCtrl,
      link: function postLink(scope, element, attrs, ngModel) {
        var taskId;

        ngModel.$render = function () {
          taskId = ngModel.$modelValue;
          if (taskId) {
            scope.showProperty(taskId);
          }
        };

      }
    };
  });
