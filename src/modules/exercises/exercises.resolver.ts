import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Types as MongooseTypes } from 'mongoose';
import { ObjectIdScalar } from 'src/common/scalars/object-id.scalar';
import { Exercise } from './model/exercises.model';
import { ExerciseInput } from './dto/exercises.input';
import { ExercisesService } from './exercises.service';

@Resolver(() => Exercise)
export class ExercisesResolver {
  constructor(private readonly exercisesService: ExercisesService) { }

  // QUERIES
  @Query(() => [Exercise])
  async exercises(): Promise<Exercise[]> {
    return await this.exercisesService.findAll();
  }

  @Query(() => Exercise)
  async exercise(
    @Args({ name: '_id', type: () => ObjectIdScalar }) _id: MongooseTypes.ObjectId): Promise<Exercise> {
    return await this.exercisesService.findOne(_id);
  }

  // MUTATIONS
  @Mutation(() => Exercise)
  async createExercise(
    @Args({ name: 'input', type: () => ExerciseInput }) input: ExerciseInput) {
    return await this.exercisesService.create(input);
  }

  @Mutation(() => Exercise, { name: 'updateExercise' })
  async updateExercise(
    @Args({ name: '_id', type: () => ObjectIdScalar }) _id: MongooseTypes.ObjectId,
    @Args({ name: 'input', type: () => ExerciseInput }) input: ExerciseInput) {
    return await this.exercisesService.update(_id, input);
  }

  @Mutation(() => Exercise, { name: 'deleteExercise' })
  async deleteExercise(
    @Args({ name: '_id', type: () => ObjectIdScalar }) _id: MongooseTypes.ObjectId) {
    return await this.exercisesService.delete(_id);
  }
}
