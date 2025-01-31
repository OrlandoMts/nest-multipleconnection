import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export type ReportDocument = Report & Document;

@Schema()
export class Report extends Document {
  @Prop()
  key: string;

  @Prop()
  title: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
