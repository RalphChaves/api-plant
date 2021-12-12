import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
export class CreateStreamerDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsString()
  @IsNotEmpty()
  produtora: string;

  @IsString()
  @IsNotEmpty()
  atores: string;

  @IsString()
  @IsNotEmpty()
  linkimag: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsBoolean()
  assistido: boolean;
}
