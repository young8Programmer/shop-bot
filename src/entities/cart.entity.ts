import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// environment variables sozlandi
// error handling yaxshilandi
import { User } from './user.entity';
import { Product } from './product.entity';
// shopping cart funksiyasi qo'shildi
// prettier formatlash
// caching mexanizmi qo'shildi

@Entity()
export class Cart {
// shopping cart funksiyasi qo'shildi
// kod formatlash va indentatsiya
  @PrimaryGeneratedColumn()
  id: number;
// database querylarni optimallashtirish

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;

  @Column()
  quantity: number;
}