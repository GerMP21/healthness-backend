import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Types, Document } from 'mongoose';
import { ObjectIdScalar } from 'src/common/scalars/object-id.scalar';

@ObjectType()
@Schema({ timestamps: true })
export class User {

    @Field(() => ObjectIdScalar)
    _id: Types.ObjectId;

    @Field()
    @Prop({ index: true })
    email: string;

    @Field()
    @Prop()
    password: string;
    
    @Field()
    @Prop({ index: true})
    username: string;

    @Field()
    @Prop()
    description: string;
    
    @Field()
    @Prop()
    profilePicture: string;
    
    @Field()
    @Prop()
    coverPicture: string;

    @Field()
    @Prop()
    firstName: string;
    
    @Field()
    @Prop()
    lastName: string;
    
    @Field()
    @Prop()
    dateOfBirth: Date;

    @Field()
    @Prop()
    country: string;
    
    @Field()
    @Prop()
    city: string;

    @Field()
    @Prop()
    diet: string;

    @Field()
    @Prop()
    workoutPlan: {
        monday: Types.ObjectId,
        tuesday: Types.ObjectId,
        wednesday: Types.ObjectId,
        thursday: Types.ObjectId,
        friday: Types.ObjectId,
        saturday: Types.ObjectId,
        sunday: Types.ObjectId 
    };
    
    @Field(type => [User])
    @Prop({ type: Types.ObjectId, ref: 'User' })
    friends: User[];

    @Field(type => [User])
    @Prop({ type: Types.ObjectId, ref: 'User' })
    follows: User[];

    @Field(type => [User])
    @Prop({ type: Types.ObjectId, ref: 'User' })
    blocked: User[];

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);