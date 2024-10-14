import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @Type(() => Number)
  @IsNumber()
  id: number;

  @IsString({
    message: 'name should be string value',
  })
  @MinLength(2, {
    message: 'name minimum 2 characters',
  })
  name: string;
  @IsString()
  gender: string;

  @IsEmail()
  email: string;
  
  @Type(() => Boolean)
  @IsBoolean()
  isMarried: boolean;
}
