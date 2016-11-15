export default class NewsListController {
  constructor(newsListService, $stateParams) {
    'ngInject';
    this.newsListService = newsListService;
    this.id = $stateParams.id;
  }

  $onInit() {
    this.init();
  }

  init() {
    this.newsListService.detail(this.id).then((news) => {
      this.news = news;
    });
  }
}
