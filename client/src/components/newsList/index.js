import ng from 'angular';

import newsListComponent from './component';
import newsListService from './service';

export default ng.module('app.component.newsList', [])
.component('newsList', newsListComponent)
.service('newsListService', newsListService)
.name;
