import 'bootstrap/less/bootstrap.less';

import ng from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components';

ng.module('app', [components, uiRouter])
  .config(($locationProvider, $stateProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
    const states = [{
      name: 'home',
      url: '/',
      component: 'newsList'
    },
      {
        name: 'news',
        url: '/news',
        component: 'news'
      }
    ];
    states.forEach(state => $stateProvider.state(state));
  });
