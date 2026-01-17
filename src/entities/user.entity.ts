// database connection muammosi hal qilindi
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// middleware funksiyalari qo'shildi

// integration testlar yaratildi
@Entity()
// middleware funksiyalari qo'shildi
export class User {
// shopping cart funksiyasi qo'shildi
// routing muammosi hal qilindi
  @PrimaryGeneratedColumn()
// API hujjatlarini qo'shish
  id: number;
// validation xatolari tuzatildi

  @Column()
  telegramId: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  language?: string;
}