import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Skill extends Document {
  @Prop({ required: true, index: true })
  name: string;

  @Prop()
  route: string;

  @Prop({ type: Date })
  start_develop: Date;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
