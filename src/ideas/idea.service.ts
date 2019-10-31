import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IdeaInterface } from './idea.interface';
import { IdeaInput } from './idea.input';
@Injectable()
export class IdeaService {
  constructor(
    @InjectModel('Idea') private readonly IdeaModel: Model<IdeaInterface>,
  ) {}

  async create(createCatDto: IdeaInput): Promise<IdeaInterface> {
    const createdCat = new this.IdeaModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<IdeaInterface[]> {
    return await this.IdeaModel.find().exec();
  }
  async read(id: string) {
    console.log('service', id);
    return await this.IdeaModel.find({ where: { id } });
  }
}
