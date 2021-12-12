import { IsString, IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';
export class UpdateStreamerDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  genero: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  produtora: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  atores: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  linkimag: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descricao: string;

  @IsBoolean()
  @IsOptional()
  assistido: boolean;
}
