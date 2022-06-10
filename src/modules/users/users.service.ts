import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from "./model/users.model";

@Injectable()
export class UserService {
    constructor(
        @InjectModel("User") private readonly userModel: Model<UserDocument>,
    ) {};

    async findAll(): Promise<UserDocument[]> {
        return await this.userModel.find();
    }

    async findOne(id: string): Promise<UserDocument> {
        return await this.userModel.findById(id);
    }

    async create(user: UserDocument): Promise<UserDocument> {
        return await this.userModel.create(user);
    }

}   