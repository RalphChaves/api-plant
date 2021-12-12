import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CrendentialsDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 15)
  senha: string;
}
