import { Controller, Get } from '@nestjs/common';
// kod strukturasini yaxshilash
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
