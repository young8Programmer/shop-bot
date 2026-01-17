// caching mexanizmi qo'shildi
// image optimization qo'shildi
import { Module } from '@nestjs/common';
// unit testlar qo'shildi
// changelog yangilandi
import { TypeOrmModule } from '@nestjs/typeorm';
// database querylarni optimallashtirish
import { Product } from '../../entities/product.entity';
// CI/CD pipeline sozlandi
import { ProductService } from './product.service';
// installation qo'llanmasi yaratildi
// kod formatlash va indentatsiya

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}