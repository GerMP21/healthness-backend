import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types as MongooseTypes } from 'mongoose';
import { ExerciseDocument, Exercise } from './model/exercises.model';
import { ExerciseInput } from './dto/exercises.input';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>) { }

  async findAll() {
    try {
      return await this.exerciseModel
        .find({})
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findOne(_id: MongooseTypes.ObjectId) {
    try {
      return await this.exerciseModel
        .findOne({ _id })
        .exec();
    } catch (error) {
      throw new NotFoundException(`Exercise #${_id} not found`);
    }
  }


  async create(input: ExerciseInput) {
    try {
      const exercise = new this.exerciseModel(input);
      return await exercise.save();
    } catch (error) {
      console.error(error);
      throw new BadRequestException();
    }
  }

  async update(_id: MongooseTypes.ObjectId, input: ExerciseInput) {
    const exercise = await this.findOne(_id);
    if (!exercise) throw new NotFoundException(`Exercise #${_id} not found`);

    return await this.exerciseModel
      .findByIdAndUpdate(_id, { $set: input }, { new: true })
      .exec();
  }

  async delete(_id: MongooseTypes.ObjectId) {
    const exercise = await this.findOne(_id);
    if (!exercise) throw new NotFoundException(`Exercise #${_id} not found`);

    return await this.exerciseModel.findByIdAndDelete(_id);
  }
}
