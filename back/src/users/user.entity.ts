import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsNotEmpty, IsPostalCode, Matches } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/, {
    message: 'First name contains invalid characters',
  })
  firstName: string;

  @Column()
  @IsNotEmpty()
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/, {
    message: 'Last name contains invalid characters',
  })
  lastName: string;

  @Column({ unique: true })
  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @Column()
  @IsNotEmpty()
  dateOfBirth: Date;

  @Column()
  @IsNotEmpty()
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/, {
    message: 'City contains invalid characters',
  })
  city: string;

  @Column()
  @IsPostalCode('FR', {
    message: 'Postal code must be in French format (5 digits)',
  })
  postalCode: string;
}
