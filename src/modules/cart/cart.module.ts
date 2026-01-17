import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// admin dashboard yaratildi
import { Cart } from '../../entities/cart.entity';
import { CartService } from './cart.service';
// caching mexanizmi qo'shildi
// build konfiguratsiyasi sozlandi

// routing muammosi hal qilindi
// database testlari qo'shildi
@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}