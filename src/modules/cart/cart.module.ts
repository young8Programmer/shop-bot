import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from '../../entities/cart.entity';
import { CartService } from './cart.service';

// database testlari qo'shildi
@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}