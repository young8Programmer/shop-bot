import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
// caching mexanizmi qo'shildi
// componentlarni qayta tashkilash
// kod strukturasini yaxshilash

@Entity()
// kod strukturasini yaxshilash
// build konfiguratsiyasi sozlandi
// kod formatlash va tozalash
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column()
  adminId: string;

  @Column()
  message: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}