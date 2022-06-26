import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Types as MongooseTypes } from 'mongoose';
import { ObjectIdScalar } from 'src/common/scalars/object-id.scalar';
import { Workout } from './model/workouts.model';
import { WorkoutInput } from './dto/workouts.input';
import { WorkoutsService } from './workouts.service';

@Resolver(() => Workout)
export class WorkoutsResolver {
  constructor(private readonly workoutsService: WorkoutsService) { }

  // QUERIES

  @Query(() => [Workout])
  async workouts(): Promise<Workout[]> {
    return await this.workoutsService.findAll();
  }

  @Query(() => Workout)
  async workout(
    @Args({ name: '_id', type: () => ObjectIdScalar }) _id: MongooseTypes.ObjectId): Promise<Workout> {
    return await this.workoutsService.findOne(_id);
  }

  // MUTATIONS
  @Mutation(() => Workout)
  async createWorkout(
    @Args({ name: 'input', type: () => WorkoutInput }) input: WorkoutInput) {
    return await this.workoutsService.create(input);
  }

  @Mutation(() => Workout, { name: 'updateWorkout' })
  async updateWorkout(
    @Args({ name: '_id', type: () => ObjectIdScalar }) _id: MongooseTypes.ObjectId,
    @Args({ name: 'input', type: () => WorkoutInput }) input: WorkoutInput) {
    return await this.workoutsService.update(_id, input);
  }

  @Mutation(() => Workout, { name: 'deleteWorkout' })
  async deleteWorkout(
    @Args({ name: '_id', type: () => ObjectIdScalar }) _id: MongooseTypes.ObjectId) {
    return await this.workoutsService.delete(_id);
  }
}
