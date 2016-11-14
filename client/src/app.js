import 'bootstrap/less/bootstrap.less';

import ng from 'angular';

import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import components from './components';

ng.module('app', [components, ngSanitize, uiRouter])
  .config(($locationProvider, $stateProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
    const states = [
      {
        name: 'home',
        url: '/',
        component: 'newsList'
      },
      {
        name: 'news',
        url: '/news/:id',
        component: 'news'
      }
    ];
    states.forEach(state => $stateProvider.state(state));
  });
