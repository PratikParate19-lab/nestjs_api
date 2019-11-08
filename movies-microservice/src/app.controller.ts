import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd: 'LIST_MOVIES'})
  getMovies(): string[] {
    return ['Pulp Fiction', 'Titanic', 'Matrix'];
  }
}
