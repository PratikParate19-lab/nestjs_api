import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('movies')
export class AppController {
  private readonly client: ClientProxy;
  constructor(
    private readonly appService: AppService,
    @Inject('service1') private readonly clients1: ClientProxy,
    @Inject('service2') private readonly clients2: ClientProxy,
  ) {}

  @Get('all')
  getMovies() {
    return this.clients1.send<string[]>({ cmd: `LIST_MOVIES` }, []);
  }
  @Get('rate')
  getRating() {
    return this.clients2.send<string[]>({ cmd: `rating` }, []);
  }
}
