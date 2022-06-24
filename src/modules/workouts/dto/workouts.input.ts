import {
    InputType,
    Field,
    registerEnumType
} from '@nestjs/graphql';
import {
    IsString,
    IsNotEmpty,
    IsOptional,
    MinLength,
    MaxLength,
    IsEnum
} from 'class-validator';
import { WorkoutTypeEnum } from '../../../common/enums/workout-type.enum';

registerEnumType(WorkoutTypeEnum, {
    name: 'WorkoutTypeEnum',
    description: 'Types of workouts'
});

@InputType()
export class WorkoutInput {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @Field(() => String)
    name: string;

    @IsNotEmpty()
    @IsEnum(WorkoutTypeEnum)
    @Field(() => WorkoutTypeEnum)
    type: WorkoutTypeEnum;

    @IsOptional()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @Field(() => String, { nullable: true })
    equipment?: string;

    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(200)
    @Field(() => String, { nullable: true })
    video?: string;
}
