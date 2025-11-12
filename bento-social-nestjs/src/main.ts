import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');

  app.enableCors({
    origin: 'http://localhost:8080', // frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // nếu cần gửi cookie
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
