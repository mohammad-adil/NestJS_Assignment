import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

enum Type {
  ADMIN = 'admin',
  SELLER = 'Seller',
  SUPPORTER = 'supporter',
  CUSTOMER = 'customer',
}

@Schema()
export class Roles extends Document {
  @Prop({ required: true, enum: Type, default: Type.CUSTOMER })
  type: Type;

  @Prop({ required: true, type: [String] })
  permissions: string[];
}

export const RolesSchema = SchemaFactory.createForClass(Roles);
