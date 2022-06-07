import { Type } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';
export class TransferDto {
  @IsString()
  to: string;

  @IsString()
  from: string;

  @IsNumber()
  @Type(() => Number)
  amount: number;
}
