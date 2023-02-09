import { Controller, Get } from '@nestjs/common';
import { SkillsService } from '../services/skills.service';

@Controller('skills')
export class SkillsController {
    constructor(private skillsService:SkillsService) {
        
    }

    @Get()
    async GetSkills(){
        return await this.skillsService.GetAllSkills();
    }
}
