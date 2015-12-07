export class RootController {
  constructor($scope) {
    'ngInject';
    $scope.greeting = 'Hi';
    $scope.counter = 0;
    $scope.increment = function(){
      $scope.counter++;
    }
  }
}
