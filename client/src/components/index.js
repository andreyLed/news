import ng from 'angular';
import newsList from './newsList';
import newsItem from './newsItem';

export default ng.module('app.components', [newsList, newsItem])
  .name;
