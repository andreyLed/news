export default class NewsListController {
  constructor(newsListService) {
    'ngInject';
    this.newsListService = newsListService;
  }

  $onInit() {
    this.init();
  }

  init() {
    this.newsListService.list().then((news) => {
      this.allNews = news;
    });
  }
}
