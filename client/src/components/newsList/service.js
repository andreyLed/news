export default class NewsListDervice {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.URL = 'http://localhost:3000';
  }

  list() {
    return this.$http.get(`${this.URL}/api/list`).then(result => result.data);
  }

  detail(id) {
    return this.$http.get(`${this.URL}/api/list/${id}`).then(result => result.data);
  }
}
