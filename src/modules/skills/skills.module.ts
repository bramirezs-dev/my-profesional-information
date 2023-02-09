import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {SkillSchema, Skill} from './entities/skill.entity';
import { SkillsController } from './controllers/skills.controller';
import { SkillsService } from './services/skills.service';


@Module({
    imports:[MongooseModule.forFeature([
        {
            name:Skill.name,
            schema: SkillSchema,
        }
    ])],
    controllers: [SkillsController],
    providers: [SkillsService],
})
export class SkillsModule {}
