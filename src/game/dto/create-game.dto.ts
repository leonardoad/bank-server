import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class CreateGameDto {
  @IsNumber()
  @Type(() => Number)
  baseAmount: number;
}
