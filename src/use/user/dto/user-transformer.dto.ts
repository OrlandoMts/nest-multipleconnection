import { Type } from 'class-transformer';

export class AccountDataDto {
  numberemployee: string;
  email: string;
}

export class PersonalDataDto {
  firstname: string;
  lastname: string;
  birth: Date;
}

export class UserDto {
  @Type(() => AccountDataDto)
  account_data: AccountDataDto;

  @Type(() => PersonalDataDto)
  personal_data: PersonalDataDto;
}
