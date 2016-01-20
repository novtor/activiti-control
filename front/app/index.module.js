/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { DeploymentsController } from './partials/deployments/deployments.controller.js';
import { DeploymentsDynaController } from './partials/deployments-dyna/deployments.controller.js';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { DynaTableDirective } from '../app/components/dynatable/dynatable.directive';

angular.module('activitiControl', ['ngAnimate', 'ngResource', 'ngRoute', 'ui.bootstrap', 'toastr', 'datatables'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('DeploymentsController', DeploymentsController)
  .controller('DeploymentsDynaController', DeploymentsDynaController)
  .directive('dynaTable', DynaTableDirective)
  .directive('acmeNavbar', NavbarDirective);
