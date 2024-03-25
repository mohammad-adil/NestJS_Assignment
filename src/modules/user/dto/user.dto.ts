import { IsNotEmpty, IsString } from 'class-validator';

export class userDTO {
  @IsNotEmpty()
  @IsString()
   userName: string;

  @IsNotEmpty()
  @IsString()
   password: string;

  @IsNotEmpty()
  @IsString()
   role: string;
}
