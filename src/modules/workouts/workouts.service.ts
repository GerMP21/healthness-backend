import {
    Injectable,
    BadRequestException,
    NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types as MongooseTypes } from 'mongoose';
import { WorkoutDocument, Workout } from './model/workouts.model';
import { WorkoutInput } from './dto/workouts.input';
import { Exercise } from '../exercises/model/exercises.model';

@Injectable()
export class WorkoutsService {
    constructor(@InjectModel(Workout.name) private workoutModel: Model<WorkoutDocument>) { }

    async findAll() {
        try {
            return await this.workoutModel
                .find({})
                .populate({ path: 'exercises', model: Exercise.name })
        } catch (error) {
            throw new BadRequestException();
        }
    }

    async findOne(_id: MongooseTypes.ObjectId) {
        try {
            return await this.workoutModel
                .findOne({ _id })
                .exec();
        } catch (error) {
            throw new NotFoundException(`Workout #${_id} not found`);
        }
    }


    async create(input: WorkoutInput) {
        try {
            const workout = new this.workoutModel(input);
            return await workout.save();
        } catch (error) {
            console.error(error);
            throw new BadRequestException();
        }
    }

    async update(_id: MongooseTypes.ObjectId, input: WorkoutInput) {
        const workout = await this.findOne(_id);
        if (!workout) throw new NotFoundException(`Workout #${_id} not found`);

        return await this.workoutModel
            .findByIdAndUpdate(_id, { $set: input }, { new: true })
            .exec();
    }

    async delete(_id: MongooseTypes.ObjectId) {
        const workout = await this.findOne(_id);
        if (!workout) throw new NotFoundException(`Workout #${_id} not found`);

        return await this.workoutModel.findByIdAndDelete(_id);
    }
}
