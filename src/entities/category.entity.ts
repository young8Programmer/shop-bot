import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// kod uslubini yaxshilash
// code comments qo'shildi
@Entity()
// database querylarni optimallashtirish
export class Category {
  @PrimaryGeneratedColumn()
// API hujjatlarini qo'shish
  id: number;
// API endpoint testlari qo'shildi
// database testlari qo'shildi

  @Column()
  nameUz: string;

  @Column()
  nameRu: string;

  @Column()
  nameEn: string;
}