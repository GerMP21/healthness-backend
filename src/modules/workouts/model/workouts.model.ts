import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { ObjectIdScalar } from 'src/common/scalars/object-id.scalar';

@ObjectType()
@Schema({ timestamps: true })
export class Workout {

    @Field(() => ObjectIdScalar)
    _id: Types.ObjectId;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    description: string;

    @Field()
    @Prop()
    type: string;

    @Field()
    @Prop()
    duration: number;
    
    @Field()
    @Prop()
    intensity: string;

    @Field()
    @Prop()
    equipment: string;

    @Field()
    @Prop()
    caloriesBurned: number;

    @Field()
    @Prop()
    exercises: [{
        name: string,
        description: string,
        duration: number,
        intensity: string,
        caloriesBurned: number,
        equipment: string,
        video: string,
        videoThumbnail: string,
    }];

    @Field()
    @Prop()
    createdAt: Date;

    @Field()
    @Prop()
    updatedAt: Date;
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);