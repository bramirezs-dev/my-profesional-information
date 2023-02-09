import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Experience extends Document {
  @Prop({ required: true, index: true })
  position: string;

  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  company: string;

  @Prop()
  description: string;

  @Prop({ type: Date })
  start_date: Date;

  @Prop({ type: Date })
  finish_date: Date;

  @Prop({ type: Boolean })
  currently: Boolean;

}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
