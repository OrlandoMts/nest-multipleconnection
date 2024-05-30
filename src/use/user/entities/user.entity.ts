import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// @Schema()
class AccountData {
  @Prop({ unique: true })
  numberemployee: string;

  @Prop({ unique: true, isRequired: false })
  email: string;
}

// @Schema()
class PersonalData {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  birth: Date;
}

@Schema()
export class User extends Document {
  @Prop({ type: AccountData })
  account_data: AccountData;

  @Prop({ type: PersonalData })
  personal_data: PersonalData;
}

export const AccountDataSchema = SchemaFactory.createForClass(AccountData);
export const PersonalDataSchema = SchemaFactory.createForClass(PersonalData);
export const UserSchema = SchemaFactory.createForClass(User);
