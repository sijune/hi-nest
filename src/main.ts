import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //type 맞지 않는 경우 에러
      forbidNonWhitelisted: true, //request 자체를 막아버린다.
      transform: true, //string을 number로 바꿔준다.
    }),
  );
  await app.listen(3000);
}
bootstrap();
