import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export type RoleDocument = Role & Document;

@Schema()
export class Role extends Document {
  @Prop()
  key: string;

  @Prop()
  title: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
