import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NodeDocument = Node & Document;

@Schema()
export class Node extends Document {
  @Prop({ required: true })
  content: string;

  @Prop({ required: false })
  img?: string;

  @Prop({ required: false })
  ancestor?: string;

  @Prop({ required: true })
  descendant: string[];

  @Prop({ required: true })
  link: string[];
}

export const NodeSchema = SchemaFactory.createForClass(Node);
