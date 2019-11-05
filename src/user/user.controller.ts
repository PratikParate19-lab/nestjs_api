// import { Controller, Post, Get, Body, UsePipes } from '@nestjs/common';
// import { UserService } from './user.service';
// import { CreateUserDTO } from './user.dto';
// import { ValidationPipe } from 'src/shared/validation.pipe';

// @Controller('user')
// export class UserController {
//   constructor(private userService: UserService) {}
//   @Post('login')
//   @UsePipes(new ValidationPipe())
//   login(@Body() data: CreateUserDTO) {
//     return this.userService.login(data);
//   }
//   @Post('register')
//   @UsePipes(new ValidationPipe())
//   register(@Body() data: CreateUserDTO) {
//     return this.userService.register(data);
//   }
//   @Get()
//   allusers() {
//     return this.userService.allusers();
//   }
// }
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UsersService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  // This route will require successfully passing our default auth strategy (JWT) in order
  // to access the route
  @Get('test')
  @UseGuards(AuthGuard())
  testAuthRoute() {
    return {
      message: 'You did it!',
    };
  }
}
