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
import { ExerciseTypeEnum } from '../../../common/enums/exercise-type.enum';

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
  type: ExerciseTypeEnum;

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

  @IsOptional()
  @IsString()
  @MinLength(5)
  @MaxLength(500)
  @Field(() => String, { nullable: true })
  description: string;

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
}
