export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor ($scope) {
    'ngInject';

    // "this.creation" is available by directive option "bindToController: true"
    //this.relativeDate = moment(this.creationDate).fromNow();

    $scope.tree = [{
      name: "Deployments",
      link: "#/deployments"
      //subtree: [{
      //  name: "state 1",
      //  link: "state1"
      //},{
      //  name: "state 2",
      //  link: "state2"
      //}]
    },
      {
        name: "Managment",
        link: "#/managment"
      }];
  }
}
