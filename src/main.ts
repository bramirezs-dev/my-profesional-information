require('module-alias/register');
import { env } from 'process';
import { NestFactory } from '@nestjs/core';
import configs from '@configs';
import { AppModule } from './app.module';

const config = configs(env.NODE_ENV || 'dev');
const { port } = config();
console.log(port);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
