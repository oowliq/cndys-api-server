import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    username: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
