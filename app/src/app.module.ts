import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import AllInfo from './Endpoints/getall';
import Info from './Endpoints/info';
@Module({
  controllers: [AppController],
  providers: [AppService, Info, AllInfo],
})
export class AppModule {}
