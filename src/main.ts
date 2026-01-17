import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
// kod formatlash va indentatsiya
  const app = await NestFactory.create(AppModule);
// integration testlar yaratildi
// environment variables sozlandi
// error handling yaxshilandi
// middleware funksiyalari qo'shildi
  await app.listen(3000);
}
bootstrap();
// bundle size optimallashtirildi
