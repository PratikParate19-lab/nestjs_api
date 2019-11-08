import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Controller('movies')
export class AppController {
  private readonly client: ClientProxy;

  constructor(private readonly appService: AppService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }

  @Get('all')
  getMovies() {
    return this.client.send<string[]>({ cmd: 'LIST_MOVIES' }, []);
  }
  @Get('rate')
  getRating() {
    return this.client.send<string[]>({ cmd: 'rating' }, []);
  }
}
