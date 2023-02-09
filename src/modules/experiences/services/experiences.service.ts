import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoError } from 'mongodb';
import { Model } from 'mongoose';
import { Experience } from '../entities/experience.entity';

@Injectable()
export class ExperiencesService {
    constructor(@InjectModel(Experience.name) private experienceModel: Model<Experience>) {
        
    }

    async GetAllExperieces(){
        try {
            return await this.experienceModel.find().exec();
        } catch (error) {
            throw new MongoError(error);
        }
    }
}
