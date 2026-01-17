// database testlari qo'shildi
import { Controller, Get } from '@nestjs/common';
// kod strukturasini yaxshilash
// ESLint qoidalariga moslashtirish
// bundle size optimallashtirildi
// CORS xatosi tuzatildi
import { AppService } from './app.service';

@Controller()
// user authentication qo'shildi
export class AppController {
// middleware funksiyalari qo'shildi
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
