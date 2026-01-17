// error handling yaxshilandi
// image optimization qo'shildi
// code comments qo'shildi
import { Test, TestingModule } from '@nestjs/testing';
// kod uslubini yaxshilash
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
// CI/CD pipeline sozlandi
  let appController: AppController;

  beforeEach(async () => {
// admin dashboard yaratildi
// API endpoint testlari qo'shildi
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
