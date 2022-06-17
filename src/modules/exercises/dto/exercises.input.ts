import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MinLength,
  MaxLength,
  IsEnum,
  IsArray,
  IsObject
} from 'class-validator';
import { ExerciseTypeEnum } from '../../../common/enums/exercise-type.enum';
import { ObjectIdScalar } from '../../../common/scalars/object-id.scalar';

registerEnumType(ExerciseTypeEnum, {
  name: 'ExerciseTypeEnum',
  description: 'Types of exercises'
});

@InputType()
export class CreateExerciseInput {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsEnum(ExerciseTypeEnum)
  @Field(() => ExerciseTypeEnum)
  status: ExerciseTypeEnum;

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

@InputType()
export class UpdateExerciseInput {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @Field(() => String)
    name: string;
  
    @IsNotEmpty()
    @IsEnum(ExerciseTypeEnum)
    @Field(() => ExerciseTypeEnum)
    status: ExerciseTypeEnum;
  
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
