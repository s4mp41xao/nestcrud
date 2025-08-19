import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Read the client URL directly from environment variables for Vercel compatibility.
  const clientUrl = process.env.CORS_ORIGIN;

  if (!clientUrl) {
    Logger.warn(
      'CORS_ORIGIN not found in environment variables. Browser requests may be blocked.',
      'Bootstrap',
    );
  }

  // Allow multiple origins by splitting the comma-separated string.
  const allowedOrigins = clientUrl ? clientUrl.split(',') : [];

  if (allowedOrigins.length > 0) {
    Logger.log(
      `CORS whitelist enabled for: [${allowedOrigins.join(', ')}]`,
      'Bootstrap',
    );
  }

  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Automatically remove non-whitelisted properties.
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are provided.
      transform: true, // Automatically transform payloads to DTO instances.
    }),
  );

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
