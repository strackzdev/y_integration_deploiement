// src/users/dto/create-user.dto.ts
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsPostalCode,
  Matches,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IsAgeAbove18 } from '../validators/date.validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/, {
    message: 'First name contains invalid characters',
  })
  firstName: string;

  @IsNotEmpty()
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/, {
    message: 'Last name contains invalid characters',
  })
  lastName: string;

  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate({ message: 'Date of birth must be a valid date' })
  @IsAgeAbove18({ message: 'User must be at least 18 years old' })
  dateOfBirth: Date;

  @IsNotEmpty()
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/, {
    message: 'City contains invalid characters',
  })
  city: string;

  @IsPostalCode('FR', {
    message: 'Postal code must be in French format (5 digits)',
  })
  postalCode: string;
}
