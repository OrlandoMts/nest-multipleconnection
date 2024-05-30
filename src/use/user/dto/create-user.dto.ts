import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

class AccountDataDto {
  @IsString()
  @IsNotEmpty()
  numberemployee: string;

  @IsEmail()
  @IsOptional()
  email: string;
}

class PersonalDataDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsDateString()
  @IsNotEmpty()
  birth: string; // O `Date`, dependiendo de cómo deseas manejar las fechas
}

export class CreateUserDto {
  @IsNotEmpty()
  account_data: AccountDataDto;

  @IsNotEmpty()
  personal_data: PersonalDataDto;
}
