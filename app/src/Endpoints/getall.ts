import { RESTDataSource } from 'apollo-datasource-rest';

class AllInfo extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:6379/';
  }

  async getMovie() {
    return this.get(`LIST_MOVIES`);
  }

  //   async getMostViewedMovies(limit = 10) {
  //     const data = await this.get('movies', {
  //       per_page: limit,
  //       order_by: 'most_viewed',
  //     });
  //     return data.results;
  //   }
}
export default AllInfo;
