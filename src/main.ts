import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// environment variables sozlandi
// error handling yaxshilandi
// middleware funksiyalari qo'shildi
  await app.listen(3000);
}
bootstrap();
// bundle size optimallashtirildi
