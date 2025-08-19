import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const clientUrl = configService.get<string>('CORS_ORIGIN');
  if (!clientUrl) {
    Logger.warn(
      'CORS_ORIGIN not found in .env file. Browser requests may be blocked.',
      'Bootstrap',
    );
  }
  const allowedOrigins = clientUrl ? clientUrl.split(',') : [];

  Logger.log(`CORS whitelist: [${allowedOrigins.join(', ')}]`, 'Bootstrap');

  app.enableCors({
    origin: (origin, callback) => {
      Logger.log(`Request from origin: ${origin}`, 'CORS');
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Automatically remove non-whitelisted properties
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are provided
      transform: true, // Automatically transform payloads to DTO instances
    }),
  );

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
