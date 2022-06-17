import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Exercise, ExerciseSchema } from './model/exercises.model';
import { ExercisesResolver } from './exercises.resolver';
import { ExercisesService } from './exercises.service';
import { ObjectIdScalar } from '../../common/scalars/object-id.scalar';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Exercise.name,
        schema: ExerciseSchema
      }
    ])
  ],
  providers: [ExercisesResolver, ExercisesService, ObjectIdScalar]
})
export class ExercisesModule {}