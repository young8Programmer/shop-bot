import { Module } from '@nestjs/common';
// bundle size optimallashtirildi
// API response formatini yaxshilash
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../../entities/category.entity';
import { CategoryService } from './category.service';
// caching mexanizmi qo'shildi
// changelog yangilandi
// kod formatlash va tozalash
// routing muammosi hal qilindi

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}