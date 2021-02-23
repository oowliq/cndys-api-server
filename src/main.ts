import { NestFactory } from '@nestjs/core';
import { APP_PORT } from 'src/enviroments';
import { AppModule } from './app.module';

const bootstrap = async (): Promise<void> => {
    const app = await NestFactory.create(AppModule);
    await app.listen(APP_PORT);
};

bootstrap();
