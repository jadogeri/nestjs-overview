import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

  export const swaggerConfig = new DocumentBuilder()
    .setTitle('Your API Title')
    .setDescription('The API description')
    .setVersion('1.0')
    // Add bearer authentication if your API uses JWTs
    .addBearerAuth()
    .build();


