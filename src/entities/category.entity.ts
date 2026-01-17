import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// kod uslubini yaxshilash
// code comments qo'shildi
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
// database testlari qo'shildi

  @Column()
  nameUz: string;

  @Column()
  nameRu: string;

  @Column()
  nameEn: string;
}