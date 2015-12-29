export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/deployments', {
      templateUrl: 'app/partials/deployments/deployments.html',
      controller: 'DeploymentsController',
      controllerAs: 'root'
    })
    //.when('/managment', {
    //  templateUrl: 'app/partials/managment/managment.html',
    //  controller: 'ManagmentController',
    //  controllerAs: 'root'
    //})
    .when('/old', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/deployments'
    });
}
