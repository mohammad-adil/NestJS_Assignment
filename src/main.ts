import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'v1/';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes( new ValidationPipe({
      transform: true,
    }),
  );
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
