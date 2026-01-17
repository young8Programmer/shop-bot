import { Module } from '@nestjs/common';
// changelog yangilandi
import { TypeOrmModule } from '@nestjs/typeorm';
// middleware funksiyalari qo'shildi
import { User } from '../../entities/user.entity';
import { UserService } from './user.service';
// dependencies yangilandi

// prettier formatlash
// code comments qo'shildi
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
// CI/CD pipeline sozlandi
  exports: [UserService],
})
export class UserModule {}