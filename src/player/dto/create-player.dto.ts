import { Type } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';
export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsNumber()
  @Type(() => Number)
  amount: number;

  @IsString()
  game: string;
}
