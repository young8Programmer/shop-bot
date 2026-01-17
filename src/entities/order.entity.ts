// prettier formatlash
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
// unit testlar qo'shildi
// kod uslubini yaxshilash
import { User } from './user.entity';
import { Product } from './product.entity';

// bundle size optimallashtirildi
// API hujjatlarini qo'shish
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
// API endpoint testlari qo'shildi
// routing muammosi hal qilindi
  id: number;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Product, (product) => product.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column()
  quantity: number;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  deliveryType: string;

  @Column()
  paymentMethod: string;

  @Column()
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}