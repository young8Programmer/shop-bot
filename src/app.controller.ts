// database testlari qo'shildi
import { Controller, Get } from '@nestjs/common';
// kod strukturasini yaxshilash
// ESLint qoidalariga moslashtirish
import { AppService } from './app.service';

@Controller()
export class AppController {
// middleware funksiyalari qo'shildi
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
