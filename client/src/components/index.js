import ng from 'angular';
import newsList from './newsList';
import newsItem from './newsItem';
import news from './news';


export default ng.module('app.components', [newsList, newsItem, news])
  .name;
