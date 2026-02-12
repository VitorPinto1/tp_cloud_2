import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://tp-cloud-2-426914906044.europe-west9.run.app',
      'https://tp-cloud-final-426914906044.europe-west9.run.app',
    ],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('TP Cloud API')
    .setDescription('Documentation de l’API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();