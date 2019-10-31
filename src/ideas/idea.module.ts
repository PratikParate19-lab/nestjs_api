import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeaController } from './idea.controller';
import { IdeaService } from './idea.service';
import { IdeaSchema } from './ideas.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Idea', schema: IdeaSchema }])],
  controllers: [IdeaController],
  providers: [IdeaService],
})
export class IdeaModule {}
