// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { User } from './user.interface';
// import { Model } from 'mongoose';
// import { CreateUserDTO } from './user.dto';
// @Injectable()
// export class UserService {
//   constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
//   async allusers(): Promise<User[]> {
//     const user = await this.userModel.find().exec();
//     return user;
//   }
//   async login(createUserDTO: CreateUserDTO): Promise<User> {
//     const newCustomer = await this.userModel(createUserDTO);
//     return newCustomer.save();
//   }

//   async register(createUserDTO: CreateUserDTO): Promise<User> {
//     const newCustomer = await this.userModel(createUserDTO);
//     return newCustomer.save();
//   }
// }
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findOneByEmail(email): Model<User> {
    return await this.userModel.findOne({ email });
  }
}
