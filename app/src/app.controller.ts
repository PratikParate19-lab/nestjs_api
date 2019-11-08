import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { ApolloServer, gql } from 'apollo-server';
import AllInfo from './Endpoints/getall';
import Info from './Endpoints/info';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Controller('movies')
export class AppController {
  private readonly client: ClientProxy;

  // typeDefs = gql`
  //   type Query {
  //     hello: String!
  //   }
  // `;
  // resolvers = {
  //   Query: {
  //     hello: () => 'hello world',
  //   },
  // };
  constructor(
    private readonly appService: AppService,
    private readonly allInfo: AllInfo,
    private readonly info: Info,
  ) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }

  // server = new ApolloServer({ typeDefs, resolvers });
  @Get('all')
  getMovies() {
    return this.client.send<string[]>({ cmd: this.allInfo.getMovie() }, []);
  }
  @Get('rate')
  getRating() {
    return this.client.send<string[]>({ cmd: this.info.getRating() }, []);
  }
}
