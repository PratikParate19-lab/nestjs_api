import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'rating' })
  getMovies() {
    return [
      { name: 'Pulp Fiction', rating: 4 },
      { name: 'Titanic', rating: 3 },
      { name: 'Matrix', rating: 5 }
    ];
  }
}
