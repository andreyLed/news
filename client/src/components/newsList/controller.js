export default class NewsListController {
  constructor(newsListService) {
    'ngInject';
    this.newsListService = newsListService;
  }

  $onInit() {
    console.log('tyt');
    this.init();
  }

  init() {
    this.newsListService.list().then((news) => {
      this.allNews = news;
    });
  }
}
