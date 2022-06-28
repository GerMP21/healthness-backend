import {
    InputType,
    Field
} from '@nestjs/graphql';
import {
    IsString,
    IsNotEmpty,
    IsOptional,
    ValidateIf,
    IsNumber
} from 'class-validator';
import { ObjectIdScalar } from 'src/common/scalars/object-id.scalar';

@InputType()
export class WorkoutExerciseInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => ObjectIdScalar)
    exercise: ObjectIdScalar;

    @ValidateIf(o => !o.durationSeconds || o.reps)
    @IsNotEmpty()
    @IsNumber()
    @Field(() => Number)
    sets: number;

    @ValidateIf(o => !o.durationSeconds || o.sets)
    @IsNotEmpty()
    @IsNumber()
    @Field(() => Number, { nullable: true })
    reps: number;

    @IsOptional()
    @IsNumber()
    @Field(() => Number, { nullable: true })
    durationSeconds?: number;
}
