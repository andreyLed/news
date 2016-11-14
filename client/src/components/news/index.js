import ng from 'angular';

import newsComponent from './component';

export default ng.module('app.component.news', [])
.component('news', newsComponent)
.name;
