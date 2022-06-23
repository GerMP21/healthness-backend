import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { ObjectIdScalar } from 'src/common/scalars/object-id.scalar';
import { WorkoutExercise } from './workout-exercise.model';

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
    aproxDurationMinutes: number;

    @Field()
    @Prop()
    intensity: string;

    @Field()
    @Prop()
    equipment: string;

    @Field()
    @Prop()
    caloriesBurned: number;

    @Field(() => [WorkoutExercise], { nullable: true })
    @Prop({ default: [] })
    exercises: WorkoutExercise[];

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);