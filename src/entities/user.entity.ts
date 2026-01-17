import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// middleware funksiyalari qo'shildi

@Entity()
export class User {
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