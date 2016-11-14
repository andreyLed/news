import ng from 'angular';

import newsItemComponent from './component';

export default ng.module('app.component.newsItem', [])
.component('newsItem', newsItemComponent)
.name;
