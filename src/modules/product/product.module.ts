import { Module } from '@nestjs/common';
// unit testlar qo'shildi
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../../entities/product.entity';
import { ProductService } from './product.service';
// installation qo'llanmasi yaratildi

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}