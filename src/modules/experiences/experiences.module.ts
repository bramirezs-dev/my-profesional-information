import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExperiencesController } from './controllers/experiences.controller';
import { Experience, ExperienceSchema } from './entities/experience.entity';
import { ExperiencesService } from './services/experiences.service';

@Module({
  imports:[MongooseModule.forFeature([
    {
        name:Experience.name,
        schema: ExperienceSchema,
    }
])],
  controllers: [ExperiencesController],
  providers: [ExperiencesService]
})
export class ExperiencesModule {}
