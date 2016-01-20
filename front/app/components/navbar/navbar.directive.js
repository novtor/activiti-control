export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: true,
    transclude: false,
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
      title: '@'
    },
    controller: NavbarController
    //controllerAs: 'vm',
    //bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor($scope, $location, $log) {
    'ngInject';

    // "this.creation" is available by directive option "bindToController: true"
    //this.relativeDate = moment(this.creationDate).fromNow();

    //$scope.items = [
    //  'The first choice!',
    //  'And another choice for you.',
    //  'but wait! A third!'
    //];
    //
    $scope.status = {
      isopen: false
    };
    //
    //$scope.toggled = function(open) {
    //  $log.log('Dropdown is now: ', open);
    //};
    //
    //$scope.toggleDropdown = function($event) {
    //  $event.preventDefault();
    //  $event.stopPropagation();
    //  $scope.status.isopen = !$scope.status.isopen;
    //};
    //
    //$scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
    //
    //$scope.navClass = function (page) {
    //  var currentRoute = $location.path().substring(1).split('/')[0];
    //  return page === currentRoute ? 'active' : '';
    //};
    //
    //$scope.routes = [{
    //  path: "/deployments-dyna",
    //  name: "deployments-dyna"
    //}, {
    //  path: "/deployments",
    //  name: "deployments"
    //}];

    //angular.forEach($route.routes, function (value, key) {
    //    var routeitem = {};
    //    routeitem.path = value.originalPath;
    //    routeitem.name = value.name;
    //    routeitem.templateUrl = value.templateUrl;
    //    routeitem.controller = value.controller;
        //$scope.routes.push(routeitem);
    //});
    //$scope.isCollapsed = true;


    //$scope.tree = [
    //  {
    //    name: "Deployments",
    //    link: "#/deployments"
        //subtree: [{
        //  name: "state 1",
        //  link: "state1"
        //},{
        //  name: "state 2",
        //  link: "state2"
        //}]
      //}, {
      //  name: "OLD",
      //  link: "#/old"
      //}, {
      //  name: "Deployments dyna",
      //  link: "#/deployments-dyna"
      //}
    //];
  }
}
