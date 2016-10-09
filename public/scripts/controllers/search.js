'use strict';

angular.module('webApp')
  .controller('searchCtrl', ['$scope', '$rootScope', 'Ajax',
    function($scope,$rootScope, Ajax, $location) {
      $scope.msg = 'Employee Searches';

      Ajax.searchEmployeeResults().success(function(data, status, headers, config) { 
        $scope.employeeResults = data;
        $scope.employeeResultsFilter = $scope.employeeResults;
      });

      

      $scope.filterEmployeeResults = function(){

        if ($scope.employee == '' || $scope.employee == undefined) {
          $scope.employeeResultsFilter = $scope.employeeResults;
        }else{
          $scope.employeeResultsFilter =  $scope.employeeResults.filter(function(val,index){
            if (val.name == $scope.employee) {
              return true;
            }else{
              return false;
            }
          })
        }

        
      }
      

}]);



