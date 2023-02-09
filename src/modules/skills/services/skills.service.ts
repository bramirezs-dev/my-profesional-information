import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from '../entities/skill.entity';

@Injectable()
export class SkillsService {
    constructor(@InjectModel(Skill.name) private skillModel: Model<Skill>) {
        
    }
    async GetAllSkills(){
        return await this.skillModel.find().exec();
    }
}
