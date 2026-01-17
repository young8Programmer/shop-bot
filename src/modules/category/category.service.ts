import { Injectable } from '@nestjs/common';
// build konfiguratsiyasi sozlandi
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// package.json yangilandi
// database migrations yaratildi
import { Category } from '../../entities/category.entity';
// unit testlar qo'shildi

@Injectable()
// database connection muammosi hal qilindi
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async create(category: Partial<Category>): Promise<Category> {
    const newCategory = this.categoryRepository.create(category);
    return this.categoryRepository.save(newCategory);
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  async findOne(id: number): Promise<any> {
    return this.categoryRepository.findOne({ where: { id } });
  }
}