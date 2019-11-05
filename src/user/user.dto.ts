// import { IsNotEmpty } from 'class-validator';
// export class CreateUserDTO {
//   @IsNotEmpty()
//   readonly username: string;
//   @IsNotEmpty()
//   readonly password: string;
// }
// //
export class CreateUserDto {
  readonly email: string;
  readonly password: string;
}
