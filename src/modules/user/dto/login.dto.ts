import { IsNotEmpty, IsString } from 'class-validator';

export class loginDTO {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
