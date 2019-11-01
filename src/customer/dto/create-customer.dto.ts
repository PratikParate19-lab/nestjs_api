import { IsString, IsDate } from 'class-validator';
export class CreateCustomerDTO {
  @IsString()
  readonly first_name: string;
  @IsString()
  readonly last_name: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly phone: string;
  @IsString()
  readonly address: string;
  @IsString()
  readonly description: string;
  // @IsDate()
  // readonly created_at: Date;
}
