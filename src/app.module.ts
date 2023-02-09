import { env } from 'process';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';

import configs from '@configs';
import { SkillsModule } from './modules/skills/skills.module';
import { ExperiencesModule } from './modules/experiences/experiences.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({
    load:[configs(env.NODE_ENV || 'dev')],
    isGlobal:true
  }),
  SkillsModule,
  ExperiencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
