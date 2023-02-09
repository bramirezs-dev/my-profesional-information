import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Db } from 'mongodb';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('MONGO') private database:Db) {}

  @Get()
  async getHello (): Promise<string> {
    return this.appService.getHello();
  }
}
