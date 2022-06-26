import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Workout, WorkoutSchema } from './model/workouts.model';
import { WorkoutsResolver } from './workouts.resolver';
import { WorkoutsService } from './workouts.service';
import { ObjectIdScalar } from '../../common/scalars/object-id.scalar';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Workout.name,
        schema: WorkoutSchema
      }
    ])
  ],
  providers: [WorkoutsResolver, WorkoutsService, ObjectIdScalar]
})
export class WorkoutsModule { }
