import { Schema, Prop } from '@nestjs/mongoose';
import { Types as MongooseTypes } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Exercise } from 'src/modules/exercises/model/exercises.model';

@ObjectType()
@Schema({ _id: false })
export class WorkoutExercise {
    @Field(() => Exercise)
    @Prop({ type: MongooseTypes.ObjectId, ref: 'Exercise' })
    exercises: Exercise;

    @Field(() => Number, { nullable: true })
    @Prop()
    sets: number;

    @Field(() => Number, { nullable: true })
    @Prop()
    reps: number;

    @Field(() => Number, { nullable: true })
    @Prop()
    durationSeconds: number;
}
