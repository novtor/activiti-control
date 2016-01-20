export function DynaTableDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/dynatable/dyna.html',
    scope: {
      creationDate: '='
    },
    controller: DynatableController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class DynatableController {
  constructor ($scope) {
    'ngInject';

    $scope.haha = "haha";
    angular.element("table").dynatable({
      dataset: {
        ajax: true,
        ajaxUrl: '/repository/deployments',
        ajaxOnLoad: true,
        records: []
      },
      params: {
        offset: 'start',
        records: 'data',
        queryRecordCount: 'size',
        totalRecordCount: 'total'
      }
    });

  }
}
