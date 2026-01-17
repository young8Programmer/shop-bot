import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';
// prettier formatlash

@Entity()
export class Cart {
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