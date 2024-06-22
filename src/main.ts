// main.ts

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envValidationSchema } from './env.validation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  // Valida las variables de entorno contra el esquema definido
  const { error, value: envVariables } = envValidationSchema.validate(
    process.env,
  );

  if (error) {
    throw new Error(
      `Error de validación de las variables de entorno: ${error.message}`,
    );
  }

  app.useGlobalPipes(new ValidationPipe());

  // Iniciar la aplicación
  await app.listen(envVariables.PORT || 3000);

  console.log(`App running: http://localhost:${envVariables.PORT || 3000}`);
}

bootstrap();
