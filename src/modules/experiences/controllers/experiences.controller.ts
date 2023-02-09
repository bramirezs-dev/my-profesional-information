import { Controller, Get } from '@nestjs/common';
import { ExperiencesService } from '../services/experiences.service';

@Controller('experiences')
export class ExperiencesController {
    constructor(private experiencesService:ExperiencesService) {
        
    }

    @Get()
    async GetExperiences(){
        return await this.experiencesService.GetAllExperieces();
    }
}
