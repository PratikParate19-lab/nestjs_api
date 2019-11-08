import { RESTDataSource } from 'apollo-datasource-rest';

class Info extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:6380/';
  }

  async getRating() {
    return this.get(`rating`);
  }
}
export default Info;
