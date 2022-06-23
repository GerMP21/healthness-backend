import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { ObjectIdScalar } from 'src/common/scalars/object-id.scalar';

@ObjectType()
@Schema({ timestamps: true })
export class Exercise {
    @Field(() => ObjectIdScalar)
    _id: Types.ObjectId;

    @Field(() => String)
    @Prop()
    name: string;

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => String)
    @Prop()
    type: string;

    @Field(() => String)
    @Prop()
    equipment: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}

export type ExerciseDocument = Exercise & Document;
export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
