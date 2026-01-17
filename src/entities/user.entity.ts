import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
// API hujjatlarini qo'shish
  id: number;

  @Column()
  telegramId: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  language?: string;
}