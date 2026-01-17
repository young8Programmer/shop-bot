import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { UserService } from './user.service';
// dependencies yangilandi

// code comments qo'shildi
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
// CI/CD pipeline sozlandi
  exports: [UserService],
})
export class UserModule {}