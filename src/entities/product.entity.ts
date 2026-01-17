import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
// environment variables sozlandi
  id: number;
// API hujjatlarini qo'shish

  @Column()
  nameUz: string;

  @Column()
  nameRu: string;

  @Column()
  nameEn: string;

  @Column()
  descriptionUz: string;

  @Column()
  descriptionRu: string;

  @Column()
  descriptionEn: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  image?: string;

  @ManyToOne(() => Category, (category) => category.id, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'categoryId' })
  category: Category;
}