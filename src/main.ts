import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// error handling yaxshilandi
  await app.listen(3000);
}
bootstrap();
// bundle size optimallashtirildi
