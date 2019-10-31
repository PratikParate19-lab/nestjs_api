import {
  Controller,
  Get,
  Put,
  Delete,
  Body,
  Post,
  Param,
} from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaType } from './idea.dto';

@Controller('idea')
export class IdeaController {
  constructor(private ideaService: IdeaService) {}
  @Get()
  showAllIdeas() {
    return this.ideaService.findAll();
  }

  @Post()
  createIdeas(@Body() data: IdeaType) {
    return this.ideaService.create(data);
  }

  @Get(':_id')
  readIdea(@Param('_id') id: string) {
    return this.ideaService.read(id);
  }

  //   @Put()
  //   updateIdea() {}

  //   @Delete()
  //   destroyIdea() {}
}
